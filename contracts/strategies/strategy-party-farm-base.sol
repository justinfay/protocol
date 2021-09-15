// SPDX-License-Identifier: MIT
pragma solidity ^0.6.7;

import "./strategy-staking-rewards-base-party.sol";

abstract contract StrategyPartyFarmBase is StrategyStakingRewardsBase {

    // WAVAX/<token1> pair
    address public token1;

    // How much PARTY tokens to keep?
    uint256 public keepPARTY = 0;
    uint256 public constant keepPARTYMax = 10000;

    constructor(
        address _token1,
        address _rewards,
        address _lp,
        address _governance,
        address _strategist,
        address _controller,
        address _timelock
    )
        public
        StrategyStakingRewardsBase(
            _rewards,
            _lp,
            _governance,
            _strategist,
            _controller,
            _timelock
        )
    {
        token1 = _token1;
    }

    // **** Setters ****

    function setKeepPARTY(uint256 _keepPARTY) external {
        require(msg.sender == timelock, "!timelock");
        keepPARTY = _keepPARTY;
    }

    // **** State Mutations ****

    function harvest() public override onlyBenevolent {
        // Anyone can harvest it at any given time.
        // I understand the possibility of being frontrun
        // But ETH is a dark forest, and I wanna see how this plays out
        // i.e. will be be heavily frontrunned?
        //      if so, a new strategy will be deployed.

        // Collects PARTY tokens
        IStakingRewards(rewards).getReward();
        uint256 _party = IERC20(party).balanceOf(address(this));
        if (_party > 0) {
            // 10% is locked up for future gov
            uint256 _keepPARTY = _party.mul(keepPARTY).div(keepPARTYMax);
            IERC20(party).safeTransfer(
                IController(controller).treasury(),
                _keepPARTY
            );
            
            if (token1 == party) {
                _swapPangolin(party, wavax, _party.sub(_keepPARTY).div(2));
            } else {            
             _swapPangolin(party, wavax, _party.sub(_keepPARTY));
            }
             
        }

        // Swap half WAVAX for token
        uint256 _wavax = IERC20(wavax).balanceOf(address(this));
        if (_wavax > 0) {
            _swapPangolin(wavax, token1, _wavax.div(2));
        }

        // Adds in liquidity for WAVAX/token
        _wavax = IERC20(wavax).balanceOf(address(this));
        uint256 _token1 = IERC20(token1).balanceOf(address(this));
        if (_wavax > 0 && _token1 > 0) {
            IERC20(wavax).safeApprove(pangolinRouter, 0);
            IERC20(wavax).safeApprove(pangolinRouter, _wavax);

            IERC20(token1).safeApprove(pangolinRouter, 0);
            IERC20(token1).safeApprove(pangolinRouter, _token1);

            IPangolinRouter(pangolinRouter).addLiquidity(
                wavax,
                token1,
                _wavax,
                _token1,
                0,
                0,
                address(this),
                now + 60
            );

            // Donates DUST
            IERC20(wavax).transfer(
                IController(controller).treasury(),
                IERC20(wavax).balanceOf(address(this))
            );
            IERC20(token1).safeTransfer(
                IController(controller).treasury(),
                IERC20(token1).balanceOf(address(this))
            );
        }

        // We want to get back PARTY LP tokens
        _distributePerformanceFeesAndDeposit();
    }
}
