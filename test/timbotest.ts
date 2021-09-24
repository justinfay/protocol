import { ethers } from "hardhat";
import * as dotenv from "dotenv";
import { SignerWithAddress } from "hardhat-deploy-ethers/src/signers";
import { BigNumber } from "ethers";

import { expect } from "chai";
import {WAVAX} from "../typechain";
import { doesNotMatch } from "assert";

dotenv.config();

describe("A sample test for this endeavour", function(){

    // @ts-ignore
    const ABI = process.env.ABI;
    //let contractUnderTest: StrategyJoeAvaxEthELp;
    // let account1: SignerWithAddress;
    
    it("Should exist and allow itself to be questioned", async function (){
        let [account1] = await ethers.getSigners();
        console.log("The retrieved account has address: " + account1.address);
        
        const contractAddr= "0x60781C2586D68229fde47564546784ab3fACA982";

        //const contractFactory = await ethers.getContractFactory();

        // This is broken because typechain is confused AF 
        //const contractFactory = await ethers.getContractAt("erc20.sol:IERC20",contractAddr);



        //const contract = await contractFactory.deploy();
        //let tim  = contractFactory.deploy()
       // let timbo = await contract.balanceOf(account1.address);

       
       // console.log("The contract address is: " + timbo.toString());
        expect(false).to.be.false;
    
    })

})