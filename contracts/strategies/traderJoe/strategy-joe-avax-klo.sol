// SPDX-License-Identifier: MIT
pragma solidity ^0.6.7;

import "../strategy-joe-farm-base.sol";

contract StrategyJoeAvaxKloLp is StrategyJoeFarmBase {
    uint256 public avax_klo_poolId = 61;

    address public joe_avax_klo_lp = 0xb2fF0817ad078C92C3AfB82326592e06C92581B8;
    address public klo = 0xb27c8941a7Df8958A1778c0259f76D1F8B711C35;

    constructor(
        address _governance,
        address _strategist,
        address _controller,
        address _timelock
    )
        public
        StrategyJoeFarmBase(
            avax_klo_poolId,
            joe_avax_klo_lp,
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
            uint256 _keepJOE = _joe.mul(keep).div(keepMax);
            IERC20(joe).safeTransfer(
                IController(controller).treasury(),
                _keepJOE
            );
            uint256 _amount = _joe.sub(_keepJOE).div(2);
            IERC20(joe).safeApprove(joeRouter, 0);
            IERC20(joe).safeApprove(joeRouter, _joe.sub(_keepJOE));

            _swapTraderJoe(joe, wavax, _amount);
            _swapTraderJoe(joe, klo, _amount);
        }

        // Adds in liquidity for AVAX/KLO
        uint256 _wavax = IERC20(wavax).balanceOf(address(this));

        uint256 _klo = IERC20(klo).balanceOf(address(this));

        if (_wavax > 0 && _klo > 0) {
            IERC20(wavax).safeApprove(joeRouter, 0);
            IERC20(wavax).safeApprove(joeRouter, _wavax);

            IERC20(klo).safeApprove(joeRouter, 0);
            IERC20(klo).safeApprove(joeRouter, _klo);

            IJoeRouter(joeRouter).addLiquidity(
                wavax,
                klo,
                _wavax,
                _klo,
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
            IERC20(klo).safeTransfer(
                IController(controller).treasury(),
                IERC20(klo).balanceOf(address(this))
            );
        }

        _distributePerformanceFeesAndDeposit();
    }

    // **** Views ****

    function getName() external pure override returns (string memory) {
        return "StrategyJoeAvaxKloLp";
    }
}
