# Snowball Protocol

Solidity files relating to the Snowball protocol.

## Getting Started

We're using hardhat to compile, and test contracts.

Hardhat is used through a local installation in your project. This way your environment will be reproducible, and you will avoid future version conflicts.
We additionally have other pacakges which we import, so be sure to first run the following:

```
npm i
```

To use your local installation of Hardhat, you need to use npx to run it (i.e. npx hardhat)

## Dev Testing

Tests are executed on a fork of the Main net of C-Chain as standard. To get started first clone yourself a copy of the .env file used for creating your local accounts:
```
cp .env.example .env
```
You may run into memory errors if your node process hasn't been allocated enough heap space, this can be overriden with:
```
export NODE_OPTIONS=--max_old_space_size=4096
```
Then run this one step that will compile all the tests and and run every script in the `/test/` directory:

```bash
npx hardhat test
```

## Deploy

### Via Remix

You can use hardhat to flatten files

```bash
# Flatten
npx hardhat flatten

# Deploy file via remix
```

List of Contracts
General Contracts| Address
------------ | -------------
Snowball Token (SNOB)| 0xc38f41a296a4493ff429f1238e030924a1542e50
Governance | 0xFdd994AD468cd39a4a3a3C3A0c460BB2213159B6
Treasury| 0x294aB3200ef36200db84C4128b7f1b4eec71E38a
Proposal 3 Funds| 0x5df42ace37bA4AceB1f3465Aad9bbAcaA238D652
Controller| 0xf7B8D9f8a82a7a6dd448398aFC5c77744Bd6cb85
Staked SNOB (xSNOB)| 0x83952E7ab4aca74ca96217D6F8f7591BEaD6D64E
Gauge Proxy| 0xFc371bA1E7874Ad893408D7B581F3c8471F03D2C
IceQueen (Retired)| 0xB12531a2d758c7a8BF09f44FC88E646E1BF9D375


SnowGlobe | Address
------------ | -------------
SNOB - AVAX Pangolin | 0xF4072358C1E3d7841BD7AfDE31F61E17E8d99BE7
SNOB - PNG Pangolin | 0xB4db531076494432eaAA4C6fCD59fcc876af2734
AVAX - ETH Pangolin | 0x586554828eE99811A8ef75029351179949762c26
AVAX - PNG Pangolin | 0x621207093D2e65Bf3aC55dD8Bf0351B980A63815
AVAX - LINK Pangolin | 0x00933c16e06b1d15958317C2793BC54394Ae356C
AVAX - SUSHI Pangolin | 0x751089F1bf31B13Fa0F0537ae78108088a2253BF
AVAX - wBTC Pangolin | 0x39BE35904f52E83137881C0AC71501Edf0180181
AVAX - USDT Pangolin | 0x3fcFBCB4b368222fCB4d9c314eCA597489FE8605
AVAX - DAI Pangolin | 0xb21b21E4fA802EE4c158d7cf4bD5416B8035c5e0
AVAX - UNI Pangolin | 0xdf7F15d05d641dF701D961a38d03028e0a26a42D
AVAX - VSO Pangolin | 0x888Ab4CB2279bDB1A81c49451581d7c243AffbEf
AVAX - SPORE Pangolin | 0x27f8FE86a513bAAF18B59D3dD15218Cc629640Fc
AVAX - BNB Pangolin | 0x39BF214A93EC72e42bC0B9b8C07BE1af6Fe169dA
PNG - ETH Pangolin | 0x3815f36C3d60d658797958EAD8778f6500be16Df
PNG - wBTC Pangolin | 0x763Aa38c837f61DD8429313933Cc47f24E881430
PNG - LINK Pangolin | 0x392c51Ab0AF3017E3e22713353eCF5B9d6fBDE84
PNG - USDT Pangolin | 0x7987aDB3C789f071FeFC1BEb15Ce6DfDfbc75899
PNG - SUSHI Pangolin | 0x8eDd233546730C51a9d3840e954E5581Eb3fDAB1
PNG - DAI Pangolin | 0xcD651AD29835099334d312a9372418Eb2b70c72F
PNG - AAVE Pangolin | 0x3270b685A4a61252C6f30c1eBca9DbE622984e22
PNG - UNI Pangolin | 0x14F98349Af847AB472Eb7f7c705Dc4Bee530713B
PNG - YFI Pangolin | 0x234ed7c95Be12b2A0A43fF602e737225C83c2aa1
PNG - VSO Pangolin | 0x8309C64390F376fD778BDd701d54d1F8DFfe1F39
PNG - SPORE Pangolin | 0xa39785a4E4CdDa7509751ed152a00f3D37FbFa9F
PNG - BNB Pangolin | 0x585DE92A24057400a7c445c89338c7d6c61dd080
AVAX - ETH Trader Joe | 0xAbD637a6881a2D4bbf279aE484c2447c070f7C73
AVAX - PNG Trader Joe | 0x962ECf51A169090002CC88B4Bf16e447d2E13100
AVAX - JOE Trader Joe | 0xcC757081C972D0326de42875E0DA2c54af523622
AVAX - SNOB Trader Joe | 0x8b2E1802A7E0E0c7e1EaE8A7c636058964e21047
AVAX - SPORE Trader Joe | 0x2f17BAC3E0339C1BFB6E0DD380d65bd2Fc665C75


Strategy | Address
------------ | -------------
SNOB - AVAX Pangolin | 0xEbEE8807a671a858dbb2A1894BA8336a73A5b6b3
SNOB - PNG Pangolin | 0x4Bcfb10465a8D22F0A047Df3AfA8eE06CBCc8E13
AVAX - ETH Pangolin | 0x6b32266e7793359Fa199C32e950cF5c0EB4b284A
AVAX - PNG Pangolin | 0x08d8C7C1a6E8543a4674E77cc0111EAa1D520f8b
AVAX - LINK Pangolin | 0x846E79A9d8CCC6bBafc3939177a3D53E51C634FC
AVAX - SUSHI Pangolin | 0x1b4468dC172B94B7B8307ca5b1f63466b086acc8
AVAX - wBTC Pangolin | 0x2edC6522d658946fBA5116fFaA60d8760d1B21A8
AVAX - USDT Pangolin | 0x961890586dfB84919d8C6C5f6304192A2b3ddaB7
AVAX - DAI Pangolin | 0xe6D5806B2248777761adE4Bc4f38E9AAB6Bf9BC2
AVAX - UNI Pangolin | 0x6eb9CB199C55De50279a69705BA88C146FADC574
AVAX - VSO Pangolin | 0x92F979215c9aAE3584b268Ad99FAc2ceD16F28fC
AVAX - SPORE Pangolin | 0xeC96cbe0D178cB18eCf0D7bf6c2B599DAd28dA47
AVAX - BNB Pangolin | 0xA997C0A5d9D522892780390eFfAa44d2bB3d909F
PNG - ETH Pangolin | 0x9B3298Dba29A1Fc7061A4eF9b360eAa12879C911
PNG - wBTC Pangolin | 0xafbA321B14A22501466d18eA0D9616f8e90Fc378
PNG - LINK Pangolin | 0xe11248e5c0a98038633603F291267b74183AB7be
PNG - USDT Pangolin | 0xAF1F77739E87a1bDA1114e13d4aF86c8546f3996
PNG - SUSHI Pangolin | 0xdC3F53a364BE3b38d6f8e6a087f61cb2af58FC51
PNG - DAI Pangolin | 0x53a6fFE10AdB8db0D861BF264134D42CAC03a1Bd
PNG - AAVE Pangolin | 0x47F884e0bfC0e56eCDc581e2774efeC12874f7FD
PNG - UNI Pangolin | 0x8eE25bdfe0B749B78157505B92bd919414Af696c
PNG - YFI Pangolin | 0x93bc576943Ef7452888dD810f502595Ee83187EE
PNG - VSO Pangolin | 0x747F114EfFD243f80E4fFF6D846F9b7Ef5e794e3
PNG - SPORE Pangolin | 0x9004b64e5d793B70394a96f57b0dA869faD328c0
PNG - BNB Pangolin | 0x8924Cecf2083341B13597e1175d7A318E0547C5e
AVAX - ETH Trader Joe | 0xCaA216B286E286a831F009E67d72C40cb1a5b72A
AVAX - PNG Trader Joe | 0x7E24f0f6278E9Ea526022D28FCa12cf66D882460
AVAX - JOE Trader Joe | 0x118EAa52519aC8E022f1587D4ec0EF1f7c2246e0
AVAX - SNOB Trader Joe | 0x868d0F1985e7e5585747bd6E9B111D031B71F960
AVAX - SPORE Trader Joe | 0xf41f4B7E40baAc51Ba4507cd471dC092670BB839


Gauge | Address
------------ | -------------
SNOB - AVAX Pangolin | 0xda7099baa4693209ead01d2baf2f722f40ab30c1
SNOB - PNG Pangolin | 0xf2b70c7d26b841566ef14027f91c8771d615d54a
AVAX - ETH Pangolin | 0x6bb9d2420217e0c3f272f47c58942e89e23806c9
AVAX - PNG Pangolin | 0x3b062f421be17a7dc2d973a2da3fe56ff5ac8042
AVAX - LINK Pangolin | 0x7e68717f6228764bc1fc7a970dd5a041837c370c
AVAX - SUSHI Pangolin | 0x38a9635c0a1b62a7d8bc608a3ad5d84b300831ae
AVAX - wBTC Pangolin | 0x4906bf6aa9aad2b76f2c92738b7242a5c7a6a7bd
AVAX - USDT Pangolin | 0x45590658f6608c5be4c94ce885c52dbddb4fa21a
AVAX - DAI Pangolin | 0x2e2191fde0872e686b0a5117cd639896d2c8ad97
AVAX - UNI Pangolin | 0x0e06c4d0ecaae66b82ebc9133ca52ea82702cd30
AVAX - VSO Pangolin | 0x4d16ecff6dfa8f344ba182f09422b86b4d796ab4
AVAX - SPORE Pangolin | 0x85852980d24f69714701c50371811d31410144c3
AVAX - BNB Pangolin | 0xd4d2822aa078535cc28bb2daea8a1f2def5d8c61
PNG - ETH Pangolin | 0x5f05dc58ee067c91a98ec025d5c332af40b84667
PNG - wBTC Pangolin | 0x1e544e0eedc7e44f506f2ae7d389e0b07289e3c1
PNG - LINK Pangolin | 0xc4960af75f321c7fb36b725afc6059727e2db457
PNG - USDT Pangolin | 0xe58961d4895f0e26309ca1f36d607c6a2a1556ff
PNG - SUSHI Pangolin | 0xaf309db1bed322880a1edb8da426450e1c3be98e
PNG - DAI Pangolin | 0xef36cce5017471189030c84a218a6c60502d2248
PNG - AAVE Pangolin | 0xf0c180fcbd9fafd541e8be1303cf8c72eda80399
PNG - UNI Pangolin | 0xbcbce1fb679b9eba3c2e266232c86e06ab2e1e45
PNG - YFI Pangolin | 0xbf23aafa5ba0bc81f798f190b1b632ecf3fd4709
PNG - VSO Pangolin | 0xea4a0a6b5cc61b8edb228a5582308d0ad82b85cc
PNG - SPORE Pangolin | 0xfe570d95baddfab258c09b2f008b7786a2da3b3f
PNG - BNB Pangolin | 0xc2bdf4a26a2871043749491b6835a3cb7ace91ef
AVAX - ETH Trader Joe | 0xa634ec1bada2fac4eaa71439b0b18dd3486823e6
AVAX - PNG Trader Joe | 0x573a2b1c663ca57f162b258c385ec937ae08418d
AVAX - JOE Trader Joe | 0x3272f90cdb902e96c72086fe788678777562af14
AVAX - SNOB Trader Joe | 0x6d7512704010ea78dc14d739a390a63a2ec269b5
AVAX - SPORE Trader Joe | 0x76ac2c3d79ee189487b3eaf7cb4299e413af3e66


StableVault Gauge | Address
------------ | -------------
s3D | 0x5994612ffffc31d6c05c4fbec4a17116676d5b22
s3F | 0x472075680e16d34aba24ce9a6ddb59f27995906a
