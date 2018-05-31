pragma solidity ^0.4.24;

import "openzeppelin-solidity/contracts/token/ERC20/StandardToken.sol";

// dummy ERC20 token for testing purposes
contract BotContract is StandardToken {

    uint256 public totalFund;
    uint256 public period;

    function BotContract( uint256 bot_totalFund, uint256 bot_period) public{
        totalFund = bot_totalFund;
        period = bot_period;
    }

    function getTotalFund() public constant returns (uint256 value){
        return totalFund;
    }

    function getPeriod() public constant returns (uint256 value){
        return period;
    }
}