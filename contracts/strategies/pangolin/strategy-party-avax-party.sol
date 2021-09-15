  
// SPDX-License-Identifier: MIT
pragma solidity ^0.6.7;

import "../strategy-party-farm-base.sol";

contract StrategyPartyAvaxPartyLp is StrategyPartyFarmBase {
    // Token addresses
    address public party_avax_party_rewards = 0x1081e6063Dbe43e7150ec7D28a705beC98dFE070;
    address public party_avax_party_lp = 0xcD5043292d99D63f42f0447d77E5cA048506Bad6;
     
    constructor(
        address _governance,
        address _strategist,
        address _controller,
        address _timelock
    )
        public
        StrategyPartyFarmBase(
            party,
            party_avax_party_rewards,
            party_avax_party_lp,
            _governance,
            _strategist,
            _controller,
            _timelock
        )
    {}

    // **** Views ****

    function getName() external override pure returns (string memory) {
        return "StrategyPartyAvaxPartyLp";
    }
}
