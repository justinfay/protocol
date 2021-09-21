// SPDX-License-Identifier: MIT
pragma solidity ^0.6.7;

import "../strategy-joe-farm-base.sol";

contract StrategyJoeAvaxGbLp is StrategyJoeFarmBase {

    uint256 public avax_gb_poolId = 50;

    address public joe_avax_gb_lp = 0x7EC396ecbe2186BC7d624527C776a66C55Aa86d6;
    address public gb = 0x90842eb834cFD2A1DB0b1512B254a18E4D396215;

    constructor(
        address _governance,
        address _strategist,
        address _controller,
        address _timelock
    )
        public
        StrategyJoeFarmBase(
            avax_gb_poolId,
            joe_avax_gb_lp,
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

            _swapTraderJoe(joe, wavax, _amount);
            _swapTraderJoe(joe, gb, _amount);
        }

        // Adds in liquidity for AVAX/GB
        uint256 _wavax = IERC20(wavax).balanceOf(address(this));

        uint256 _gb = IERC20(gb).balanceOf(address(this));

        if (_wavax > 0 && _gb > 0) {
            IERC20(wavax).safeApprove(joeRouter, 0);
            IERC20(wavax).safeApprove(joeRouter, _wavax);

            IERC20(gb).safeApprove(joeRouter, 0);
            IERC20(gb).safeApprove(joeRouter, _gb);

            IJoeRouter(joeRouter).addLiquidity(
                wavax,
                gb,
                _wavax,
                _gb,
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
            IERC20(gb).safeTransfer(
                IController(controller).treasury(),
                IERC20(gb).balanceOf(address(this))
            );
        }

        _distributePerformanceFeesAndDeposit();
    }

    // **** Views ****

    function getName() external override pure returns (string memory) {
        return "StrategyJoeAvaxGbLp";
    }
}
