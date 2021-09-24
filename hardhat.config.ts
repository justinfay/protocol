import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import { HardhatUserConfig } from "hardhat/types";
import * as dotenv from "dotenv";
dotenv.config();

const AVALANCHE_MAINNET_URL = process.env.AVALANCHE_MAINNET_URL;


const config: HardhatUserConfig =  {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      //accounts: [{privateKey: process.env.PRIVATE_KEY as string, balance: "10000000000000000000000"}],
      chainId: 43114,
      gasPrice: 225000000000,
      throwOnTransactionFailures: false,
      loggingEnabled: true,
      forking: {
        url: AVALANCHE_MAINNET_URL as string,
        enabled: true,
        //blockNumber: 2975762
      }
    },
    fuji: {
      url: "https://api.avax-test.network/ext/bc/C/rpc",
      accounts: [process.env.PRIVATE_KEY as string]
    },
    mainnet: {
      url: AVALANCHE_MAINNET_URL as string,
     accounts: [process.env.PRIVATE_KEY as string]
    }
  },
  typechain: {
    outDir: "typechain",
    target: "ethers-v5",
  },
  solidity: {
    version: "0.6.7",
    settings: {
      optimizer: {
        enabled: true,
        runs: 5
      }
    }
  },
};

export default config;