// SPDX-License-Identifier: MIT
pragma solidity ^0.6.7;

import "../strategy-xjoe-farm-base.sol";

contract StrategyJoexJoe is StrategyxJoeFarmBase {

    uint256 public joeBar_poolId = 24;

    
    address public joeBar = 0x57319d41F71E81F3c65F2a47CA4e001EbAFd4F33;

    constructor(
        address _governance,
        address _strategist,
        address _controller,
        address _timelock
    )
        public
        StrategyxJoeFarmBase(
            joeBar_poolId,
            joeBar,
            _governance,
            _strategist,
            _controller,
            _timelock
        )
    {}

    // **** State Mutations ****

    function harvest() public override onlyBenevolent {
        // Anyone can harvest it at any given time.
        // I understand the possibility of being frontrun
        // But AVAX is a dark forest, and I wanna see how this plays out
        // i.e. will be be heavily frontrunned?
        //      if so, a new strategy will be deployed.

        // Collects Joe tokens
        IMasterChefJoeV2(masterChefJoeV2).deposit(poolId, 0);

        uint256 _joe = IERC20(joe).balanceOf(address(this));
        if (_joe > 0) {
            // 10% is sent to treasury
            uint256 _keepJOE = _joe.mul(keepJOE).div(keepJOEMax);
            IERC20(joe).safeTransfer(
                IController(controller).treasury(),
                _keepJOE
            );
            uint256 _amount = _joe.sub(_keepJOE);
            IERC20(joe).safeApprove(joeBar, 0);
            IERC20(joe).safeApprove(joeBar, _joe.sub(_keepJOE));

            //Deposit Harvested Joe into xJoe
            IJoeBar(joeBar).enter(_amount);
            
        }
   
        _distributePerformanceFeesAndDeposit();
    }

    // **** Views ****

    function getName() external override pure returns (string memory) {
        return "StrategyJoeAvaxSnobLp";
    }
}
