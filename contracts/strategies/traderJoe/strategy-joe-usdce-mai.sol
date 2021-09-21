// SPDX-License-Identifier: MIT
pragma solidity ^0.6.7;

import "../strategy-joe-farm-base.sol";

contract StrategyJoeUsdcEMaiLp is StrategyJoeFarmBase {

    uint256 public avax_joe_poolId = 47;

    address public joe_usdc_mai_lp = 0x58f75d7745ec383491053947Cd2AE6Ee7fc8B8f8;
    address public usdc = 0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664;
    address public mai = 0x3B55E45fD6bd7d4724F5c47E0d1bCaEdd059263e;

    constructor(
        address _governance,
        address _strategist,
        address _controller,
        address _timelock
    )
        public
        StrategyJoeFarmBase(
            avax_joe_poolId,
            joe_usdc_mai_lp,
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

            _swapTraderJoe(joe, usdc, _amount);
            _swapTraderJoe(joe, mai, _amount);
        }

        // Adds in liquidity for USDC.e/Mai
        uint256 _usdc = IERC20(usdc).balanceOf(address(this));
        uint256 _mai = IERC20(mai).balanceOf(address(this));

        if (_usdc > 0 && _joe > 0) {
            IERC20(usdc).safeApprove(joeRouter, 0);
            IERC20(usdc).safeApprove(joeRouter, _usdc);

            IERC20(mai).safeApprove(joeRouter, 0);
            IERC20(mai).safeApprove(joeRouter, _mai);

            IJoeRouter(joeRouter).addLiquidity(
                usdc,
                mai,
                _usdc,
                _mai,
                0,
                0,
                address(this),
                now + 60
            );

            // Donates DUST
            IERC20(usdc).transfer(
                IController(controller).treasury(),
                IERC20(usdc).balanceOf(address(this))
            );
            IERC20(mai).safeTransfer(
                IController(controller).treasury(),
                IERC20(mai).balanceOf(address(this))
            );
        }

        _distributePerformanceFeesAndDeposit();
    }

    // **** Views ****

    function getName() external override pure returns (string memory) {
        return "StrategyJoeUsdcEMaiLp";
    }
}
