// SPDX-License-Identifier: MIT
pragma solidity >=0.6.6;

// import "./modules/Upgradable.sol";
// import './libraries/SafeMath.sol';
// import './libraries/TransferHelper.sol';
// import './modules/Pausable.sol';
// import './interfaces/IERC20.sol';

// contract TomiEscrow is UpgradableProduct, Pausable {
//     using SafeMath for uint;

//     // Token will be used for rewarding 
//     struct ShareToken {
//         uint dgasRate;
//     }

//     // Address of DELEGATE Smart Contract
//     address public DELEGATE;
//     // Enable emergency withdraw or not 
//     bool public ableToEmergencyWithdraw;

//     // Share token with rate config and remaining reward
//     mapping(address => ShareToken) public shareTokens;

//     // -----------------------------------------
//     // TomiEscrow's event
//     // -----------------------------------------
//     event RewardWithdraw(address shareToken, uint reward, address to);
//     event DgasToTokenRated(uint oldRate, uint newRate);
//     event ShareTokenUpdated(address tokenAddress, uint dgasRate);
//     event ShareTokenSettled(address tokenAddress, uint dgasRate);
//     event EmergencyWithdrawStatusUpdate(bool newState);
//     event EmergencyWithdraw(address to, uint totalWithdraw);

//     // -----------------------------------------
//     // -----------------------------------------

//     constructor(address _DELEGATE) UpgradableProduct() public {
//         DELEGATE = _DELEGATE;
//         ableToEmergencyWithdraw = false;
//     }

//     modifier onlyDelegate() {
//         require(msg.sender == DELEGATE, "TomiEscrow::FORBIDDEN");
//         _;
//     }

//     function setEmergencyWithdrawStatus(bool _enableEmergencyWithdraw) public requireImpl {
//         ableToEmergencyWithdraw = _enableEmergencyWithdraw;
//         emit EmergencyWithdrawStatusUpdate(ableToEmergencyWithdraw);
//     }

//     function setShareToken(address _tokenAddress, uint _dgasRate) public requireImpl {
//         require(!shareTokenExisted(_tokenAddress), "TomiEscrow::Share token address already exist!");
//         require(_tokenAddress != address(0), "TomiEscrow::Share token address is not illegal");
//         require(_dgasRate != uint(0), "TomiEscrow::Share token rate is not illegal");
//         shareTokens[_tokenAddress] = ShareToken(_dgasRate);

//         emit ShareTokenSettled(_tokenAddress, _dgasRate);
//     }

//     function emergencyWithdrawERC20(address _tokenAddress) public requireImpl whenPaused {
//         require(ableToEmergencyWithdraw, "TomiEscrow::Emergency withdraw is disabled");
//         uint totalReward = shareTokenReward(_tokenAddress);
//         require(totalReward > 0, "TomiEscrow::Nothing to withdraw");
        
//         TransferHelper.safeTransfer(_tokenAddress, msg.sender, totalReward);
//         emit EmergencyWithdraw(msg.sender, totalReward);
//     }

//     function withdrawReward(address _tokenAddress, uint _amount, address _to) public whenNotPaused onlyDelegate {
//         require(shareTokenExisted(_tokenAddress), "TomiEscrow::Share token not existed!");
//         uint totalReward = shareTokenReward(_tokenAddress);
//         uint DGasToToken = shareTokens[_tokenAddress].dgasRate;
        
//         require(totalReward >= _amount, "TomiEscrow::Not enough rewards for withdraw!");
        
//         uint dgasToReward = _amount.mul(DGasToToken);
//         TransferHelper.safeTransfer(_tokenAddress, _to, dgasToReward);

//         emit RewardWithdraw(_tokenAddress, dgasToReward, _to);
//     }

//     function updateShareTokenRate(address _tokenAddress, uint _dgasRate) public requireImpl {
//         require(shareTokenExisted(_tokenAddress), "TomiEscrow::Share token not existed!");
//         require(_dgasRate != uint(0), "TomiEscrow::Share token rate is not illegal");
//         require( shareTokens[_tokenAddress].dgasRate != _dgasRate, "TomiEscrow::Not be able to set same Dgas rate!");

//         shareTokens[_tokenAddress].dgasRate = _dgasRate;

//         emit ShareTokenUpdated(_tokenAddress, _dgasRate);
//     }

//     function shareTokenExisted(address _tokenAddress) public view returns(bool) {
//         require(_tokenAddress != address(0), "TomiEscrow::Share token address is illegal");
//         return shareTokens[_tokenAddress].dgasRate != uint(0);
//     }

//     function shareTokenReward(address _tokenAddress) public view returns(uint) {
//         return IERC20(_tokenAddress).balanceOf(address(this));
//     }

//     function pause() external requireImpl {
//         _pause();
//     }

//     function unpause() external requireImpl {
//         _unpause();
//     }

//     fallback() external {

//     }
// }
