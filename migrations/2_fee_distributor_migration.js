const json = require('../compilations/fee-distributor.json');
const contract = require('@truffle/contract');
const FeeDistributor = contract(json);

FeeDistributor.setProvider(this.web3._provider);

module.exports = async function(deployer) {

  //xSNOB
  const _voting_escrow = 0x83952E7ab4aca74ca96217D6F8f7591BEaD6D64E;

  // Sat Sep 04 2021 00:00:00 GMT+0000
  // Fri Sep 03 2021 17:00:00 GMT-0700
  const _start_time = 1630713600;
  
  //Sherpa 
  const _token = 0xa5E59761eBD4436fa4d20E1A27cBa29FB2471Fc6;
  
  // Multisig
  const _admin = 0x294aB3200ef36200db84C4128b7f1b4eec71E38a; 
  const _emergency_return = _admin;

  deployer.deploy(FeeDistributor, _voting_escrow, _start_time, _token, _admin, _emergency_return);
};