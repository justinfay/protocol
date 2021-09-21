// SPDX-License-Identifier: MIT
pragma solidity ^0.6.7;

import "../strategy-joe-farm-base.sol";

contract StrategyJoeUsdtEUsdcELp is StrategyJoeFarmBase {

    uint256 public avax_joe_poolId = 49;

    address public joe_usdt_usdc_lp = 0x2E02539203256c83c7a9F6fA6f8608A32A2b1Ca2;
    address public usdt = 0xc7198437980c041c805A1EDcbA50c1Ce5db95118;
    address public usdc = 0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664;

    constructor(
        address _governance,
        address _strategist,
        address _controller,
        address _timelock
    )
        public
        StrategyJoeFarmBase(
            avax_joe_poolId,
            joe_usdt_usdc_lp,
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
            uint256 _amount = _joe.sub(_keepJOE).div(2);
            IERC20(joe).safeApprove(joeRouter, 0);
            IERC20(joe).safeApprove(joeRouter, _joe.sub(_keepJOE));

            _swapTraderJoe(joe, usdt, _amount);
            _swapTraderJoe(joe, usdc, _amount);
        }

        // Adds in liquidity for USDT.e/USDC.e
        uint256 _usdt = IERC20(usdt).balanceOf(address(this));
        uint256 _usdc = IERC20(usdc).balanceOf(address(this));

        if (_usdt > 0 && _joe > 0) {
            IERC20(usdt).safeApprove(joeRouter, 0);
            IERC20(usdt).safeApprove(joeRouter, _usdt);

            IERC20(usdc).safeApprove(joeRouter, 0);
            IERC20(usdc).safeApprove(joeRouter, _usdc);

            IJoeRouter(joeRouter).addLiquidity(
                usdt,
                usdc,
                _usdt,
                _usdc,
                0,
                0,
                address(this),
                now + 60
            );

            // Donates DUST
            IERC20(usdt).transfer(
                IController(controller).treasury(),
                IERC20(usdt).balanceOf(address(this))
            );
            IERC20(usdc).safeTransfer(
                IController(controller).treasury(),
                IERC20(usdc).balanceOf(address(this))
            );
        }

        _distributePerformanceFeesAndDeposit();
    }

    // **** Views ****

    function getName() external override pure returns (string memory) {
        return "StrategyJoeUsdtEUsdcELp";
    }
}
