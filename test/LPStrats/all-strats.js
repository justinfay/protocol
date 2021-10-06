const {doLPStrategyTest} = require("../lp-strategy-test");

const globeABI = [{"type":"constructor","stateMutability":"nonpayable","inputs":[{"type":"address","name":"_token","internalType":"address"},{"type":"address","name":"_governance","internalType":"address"},{"type":"address","name":"_timelock","internalType":"address"},{"type":"address","name":"_controller","internalType":"address"}]},{"type":"event","name":"Approval","inputs":[{"type":"address","name":"owner","internalType":"address","indexed":true},{"type":"address","name":"spender","internalType":"address","indexed":true},{"type":"uint256","name":"value","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"Transfer","inputs":[{"type":"address","name":"from","internalType":"address","indexed":true},{"type":"address","name":"to","internalType":"address","indexed":true},{"type":"uint256","name":"value","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"allowance","inputs":[{"type":"address","name":"owner","internalType":"address"},{"type":"address","name":"spender","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"approve","inputs":[{"type":"address","name":"spender","internalType":"address"},{"type":"uint256","name":"amount","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"available","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"balance","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"balanceOf","inputs":[{"type":"address","name":"account","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"controller","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint8","name":"","internalType":"uint8"}],"name":"decimals","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"decreaseAllowance","inputs":[{"type":"address","name":"spender","internalType":"address"},{"type":"uint256","name":"subtractedValue","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"deposit","inputs":[{"type":"uint256","name":"_amount","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"depositAll","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"earn","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"getRatio","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"governance","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"harvest","inputs":[{"type":"address","name":"reserve","internalType":"address"},{"type":"uint256","name":"amount","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"increaseAllowance","inputs":[{"type":"address","name":"spender","internalType":"address"},{"type":"uint256","name":"addedValue","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"max","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"min","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"","internalType":"string"}],"name":"name","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setController","inputs":[{"type":"address","name":"_controller","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setGovernance","inputs":[{"type":"address","name":"_governance","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setMin","inputs":[{"type":"uint256","name":"_min","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setTimelock","inputs":[{"type":"address","name":"_timelock","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"","internalType":"string"}],"name":"symbol","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"timelock","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"contract IERC20"}],"name":"token","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"totalSupply","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"transfer","inputs":[{"type":"address","name":"recipient","internalType":"address"},{"type":"uint256","name":"amount","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"transferFrom","inputs":[{"type":"address","name":"sender","internalType":"address"},{"type":"address","name":"recipient","internalType":"address"},{"type":"uint256","name":"amount","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"withdraw","inputs":[{"type":"uint256","name":"_shares","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"withdrawAll","inputs":[]}];
const stratABI = [{"inputs":[{"internalType":"address","name":"_want","type":"address"},{"internalType":"address","name":"_governance","type":"address"},{"internalType":"address","name":"_strategist","type":"address"},{"internalType":"address","name":"_controller","type":"address"},{"internalType":"address","name":"_timelock","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"balanceOfPool","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"balanceOfWant","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"controller","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_target","type":"address"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"execute","outputs":[{"internalType":"bytes","name":"response","type":"bytes"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"feeDistributor","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getName","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"governance","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"harvest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"harvesters","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"keep","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"keepMax","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pangolinRouter","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"performanceDevFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"performanceDevMax","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"performanceTreasuryFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"performanceTreasuryMax","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"png","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"revenueShare","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"revenueShareMax","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_harvester","type":"address"}],"name":"revokeHarvester","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_controller","type":"address"}],"name":"setController","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_feeDistributor","type":"address"}],"name":"setFeeDistributor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_governance","type":"address"}],"name":"setGovernance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_keep","type":"uint256"}],"name":"setKeep","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_performanceDevFee","type":"uint256"}],"name":"setPerformanceDevFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_performanceTreasuryFee","type":"uint256"}],"name":"setPerformanceTreasuryFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_share","type":"uint256"}],"name":"setRevenueShare","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_strategist","type":"address"}],"name":"setStrategist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_timelock","type":"address"}],"name":"setTimelock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_withdrawalDevFundFee","type":"uint256"}],"name":"setWithdrawalDevFundFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_withdrawalTreasuryFee","type":"uint256"}],"name":"setWithdrawalTreasuryFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"snob","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"strategist","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"timelock","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"want","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"wavax","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_harvester","type":"address"}],"name":"whitelistHarvester","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contractIERC20","name":"_asset","type":"address"}],"name":"withdraw","outputs":[{"internalType":"uint256","name":"balance","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawAll","outputs":[{"internalType":"uint256","name":"balance","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdrawForSwap","outputs":[{"internalType":"uint256","name":"balance","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawalDevFundFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdrawalDevFundMax","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdrawalTreasuryFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdrawalTreasuryMax","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}];
const tests = [
    {
        name: "PngAvaxPng",
        lpAddress: "0xd7538cABBf8605BdE1f4901B47B8D42c61DE0367",
        strategyAddress: "",
        snowglobeAddress: "0x621207093D2e65Bf3aC55dD8Bf0351B980A63815",
        amount: "25000000000000000000000",
    },
    {
        name: "PngSnobPng",
        lpAddress: "0x97b4957df08e185502a0ac624f332c7f8967ee8d",
        strategyAddress: "",
        snowglobeAddress: "0xB4db531076494432eaAA4C6fCD59fcc876af2734",
        amount: "25000000000000000000000",
    },
      {
        name: "PngAvaxSnob",
        lpAddress: "0xa1c2c3b6b120cbd4cec7d2371ffd4a931a134a32",
        strategyAddress: "",
        snowglobeAddress: "0xF4072358C1E3d7841BD7AfDE31F61E17E8d99BE7",
        amount: "25000000000000000000000",
    },
      {
        name: "PngAvaxVso",
        lpAddress: "0x2b532bc0afae65da57eccfb14ff46d16a12de5e6",
        strategyAddress: "",
        snowglobeAddress: "0x888Ab4CB2279bDB1A81c49451581d7c243AffbEf",
        amount: "25000000000000000000000",
    },
      {
        name: "PngVsoPng",
        lpAddress: "0x9d472e21f6589380b21c42674b3585c47b74c891",
        strategyAddress: "",
        snowglobeAddress: "0x8309C64390F376fD778BDd701d54d1F8DFfe1F39",
        amount: "25000000000000000000000",
    },
      {
        name: "PngAvaxSpore",
        lpAddress: "0x0a63179a8838b5729e79d239940d7e29e40a0116",
        strategyAddress: "",
        snowglobeAddress: "0x27f8FE86a513bAAF18B59D3dD15218Cc629640Fc",
        amount: "25000000000000000000000",
    },
      {
        name: "PngSporePng",
        lpAddress: "0xad24a72ffe0466399e6f69b9332022a71408f10b",
        strategyAddress: "",
        snowglobeAddress: "0xa39785a4E4CdDa7509751ed152a00f3D37FbFa9F",
        amount: "25000000000000000000000",
    },
      {
        name: "PngAvaxBnb",
        lpAddress: "0xF776Ef63c2E7A81d03e2c67673fd5dcf53231A3f",
        strategyAddress: "",
        snowglobeAddress: "0x39BF214A93EC72e42bC0B9b8C07BE1af6Fe169dA",
        amount: "25000000000000000000000",
    },
      {
        name: "PngXavaPng",
        lpAddress: "0x851D47BE09BD0D3c2B24922e34a4f8AE05456924",
        strategyAddress: "",
        snowglobeAddress: "0xF23c55a05C9f24177FFF5934e8192461AeE4f304",
        amount: "25000000000000000000000",
    },
      {
        name: "PngAvaxXava",
        lpAddress: "0x42152bDD72dE8d6767FE3B4E17a221D6985E8B25",
        strategyAddress: "",
        snowglobeAddress: "0x6AB8DAC517c244f53D86a155a14064E86c2dE653",
        amount: "25000000000000000000000",
    },
      {
        name: "PngAvaxPefi",
        lpAddress: "0x494Dd9f783dAF777D3fb4303da4de795953592d0",
        strategyAddress: "",
        snowglobeAddress: "0x5fb4d08bCBD444fDD5a0545fdB0C86783D186382",
        amount: "25000000000000000000000",
    },
      {
        name: "PngPefiPng",
        lpAddress: "0x1bb5541EcCdA68A352649954D4C8eCe6aD68338d",
        strategyAddress: "",
        snowglobeAddress: "0xf5b4Ba166b8b351C0dF92BdD6bf7d46d537185fB",
        amount: "25000000000000000000000",
    },
      {
        name: "PngAvaxSherpa",
        lpAddress: "0xD27688e195B5495a0eA29Bb6e9248E535A58511e",
        strategyAddress: "",
        snowglobeAddress: "0x5B8eE2c0a4f249e16f26d31636F1ed79df5405f9",
        amount: "25000000000000000000000",
    },
      {
        name: "PngAvaxTryb",
        lpAddress: "0x6b41673fEff1bf0b55Ba2C9F4bf213b2bE8F474D",
        strategyAddress: "",
        snowglobeAddress: "0xEb1010B9CF8484fcA2650525d477DD002fa889cE",
        amount: "25000000000000000000000",
    },
      {
        name: "PngAvaxUsdtE",
        lpAddress: "0xe28984e1EE8D431346D32BeC9Ec800Efb643eef4",
        strategyAddress: "",
        snowglobeAddress: "0x7CC8068AB5FC2D8c843C4b1A6572a1d1E742D7c8",
        amount: "25000000000000000000000",
    },
      {
        name: "PngAvaxDaiE",
        lpAddress: "0xbA09679Ab223C6bdaf44D45Ba2d7279959289AB0",
        strategyAddress: "",
        snowglobeAddress: "0x56A6e103D860FBb991eF1Afd24250562a292b2a5",
        amount: "25000000000000000000000",
    },
];

for (const test of tests) {
    describe(test.name, async () => {
        doLPStrategyTest(test.name, test.lpAddress, test.snowglobeAddress, test.strategyAddress, globeABI, stratABI, test.amount);
    });
}
