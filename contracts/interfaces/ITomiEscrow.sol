pragma solidity >=0.5.0;

interface ITomiEscrow {
    function setShareToken(address _tokenAddress, uint _dgasRate) external;
    function depositReward(address _tokenAddress, uint _reward) external;
    function withdrawReward(address _shareToken, uint _amount, address _to) external;
    function updateShareTokenRate(address _tokenAddress, uint _dgasRate) external;
    function shareTokenExisted(address _tokenAddress) external view returns(bool);
    function shareTokenReward(address _tokenAddress) external view returns(uint);
}

