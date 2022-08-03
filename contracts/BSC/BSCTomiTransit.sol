// SPDX-License-Identifier: MIT
pragma solidity >=0.5.16;

import 'contracts/BSC/libraries/TransferHelper.sol';
import 'contracts/BSC/TomiERC20.sol';

interface IWETH {
    function deposit() external payable;
    function withdraw(uint) external;
}

contract BSCTomiTransit {
    using SafeMath for uint;
    address public owner;
    address public signWallet;
    address public developWallet;
    
    uint public totalFee;
    
    uint public developFee;
    
    // key: bsc token, value: transit token
    mapping (address => address) public pairFor; 
    // key: transit token, value: bsc token
    mapping (address => address) public pairTo;
    
    // key: transit_id
    mapping (bytes32 => bool) public executedMap;
    
    event Payback(address indexed from, address indexed token, uint amount);
    event Withdraw(bytes32 transitId, address indexed to, address indexed token, uint amount);
    event CollectFee(address indexed handler, uint amount);
    
    constructor(address _signer, address _developer) public {
        signWallet = _signer;
        developWallet = _developer;
        owner = msg.sender;
    }
    
    function changeSigner(address _wallet) external {
        require(msg.sender == owner, "CHANGE_SIGNER_FORBIDDEN");
        signWallet = _wallet;
    }
    
    function changeDevelopWallet(address _wallet) external {
        require(msg.sender == owner, "CHANGE_DEVELOP_WALLET_FORBIDDEN");
        developWallet = _wallet;
    } 
    
    function changeDevelopFee(uint _amount) external {
        require(msg.sender == owner, "CHANGE_DEVELOP_FEE_FORBIDDEN");
        developFee = _amount;
    }
    
    function collectFee() external {
        require(msg.sender == owner, "FORBIDDEN");
        require(developWallet != address(0), "SETUP_DEVELOP_WALLET");
        require(totalFee > 0, "NO_FEE");
        TransferHelper.safeTransferETH(developWallet, totalFee);
        totalFee = 0;
    }
    
    function paybackTransit(address _token, uint _amount) external payable {
        require(pairFor[_token] != address(0), "UNSUPPORT_TOKEN");
        require(_amount > 0 && TomiERC20(_token).balanceOf(msg.sender) >= _amount, "INVALID_AMOUNT");
        require(msg.value == developFee, "FEE_VALUE_INCORRECT");
        totalFee = totalFee.add(developFee);
        TomiERC20(_token).burn(msg.sender, _amount);
        emit Payback(msg.sender, pairFor[_token], _amount);
    }
    
    function withdrawTransitToken(
    bytes calldata _signature,
    bytes32 _transitId,
    uint _amount,
    address _token,
    string calldata _name,
    string calldata _symbol,
    uint8 _decimals
    ) external payable {
        require(executedMap[_transitId] == false, "ALREADY_EXECUTED");
        bytes32 message = keccak256(abi.encodePacked(_transitId, msg.sender, _amount, _token, _name, _symbol, _decimals));
        require(_verify(message, _signature), "INVALID_SIGNATURE");

        require(_amount > 0, "NOTHING_TO_WITHDRAW");
        require(msg.value == developFee, "INSUFFICIENT_VALUE");
        
        if(pairTo[_token] == address(0)) {
            _createToken(_token, _name, _symbol, _decimals);
        }
        
        TomiERC20(pairTo[_token]).mint(msg.sender, _amount);
        totalFee = totalFee.add(developFee);
        executedMap[_transitId] = true;
        
        emit Withdraw(_transitId, msg.sender, _token, _amount);
    }
    
    function _verify(bytes32 _message, bytes memory _signature) internal view returns (bool) {
        bytes32 hash = _toEthBytes32SignedMessageHash(_message);
        address[] memory signList = _recoverAddresses(hash, _signature);
        return signList[0] == signWallet;
    }
    
    function _toEthBytes32SignedMessageHash (bytes32 _msg) pure internal returns (bytes32 signHash)
    {
        signHash = keccak256(abi.encodePacked("\x19Ethereum Signed Message:\n32", _msg));
    }
    
    function _recoverAddresses(bytes32 _hash, bytes memory _signatures) pure internal returns (address[] memory addresses)
    {
        uint8 v;
        bytes32 r;
        bytes32 s;
        uint count = _countSignatures(_signatures);
        addresses = new address[](count);
        for (uint i = 0; i < count; i++) {
            (v, r, s) = _parseSignature(_signatures, i);
            addresses[i] = ecrecover(_hash, v, r, s);
        }
    }
    
    function _parseSignature(bytes memory _signatures, uint _pos) pure internal returns (uint8 v, bytes32 r, bytes32 s)
    {
        uint offset = _pos * 65;
        assembly {
            r := mload(add(_signatures, add(32, offset)))
            s := mload(add(_signatures, add(64, offset)))
            v := and(mload(add(_signatures, add(65, offset))), 0xff)
        }

        if (v < 27) v += 27;

        require(v == 27 || v == 28);
    }
    
    function _countSignatures(bytes memory _signatures) pure internal returns (uint)
    {
        return _signatures.length % 65 == 0 ? _signatures.length / 65 : 0;
    }
    
    function _createToken (address _transitToken, string memory _name, string memory _symbol, uint8 _decimals) internal returns(address bscTomiToken){
        bytes memory bytecode = type(TomiERC20).creationCode;
        bytes32 salt = keccak256(abi.encodePacked(_transitToken, _name, _symbol, _decimals));
            assembly {
                bscTomiToken := create2(0, add(bytecode, 32), mload(bytecode), salt)
            }
        TomiERC20(bscTomiToken).initialize(_name, _symbol, _decimals);
        pairFor[bscTomiToken] = _transitToken;
        pairTo[_transitToken] = bscTomiToken;
    }
}
