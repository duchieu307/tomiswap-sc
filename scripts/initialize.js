const ethers = require('ethers')
const { BigNumber } = require('ethers')
const Web3 = require('web3')
const web3 = new Web3()
const fs = require('fs')
const privateKey = fs
  .readFileSync('../.secret')
  .toString()
  .trim()

const config = {
  gasPrice: '10',
  users: []
}

const ETHER_SEND_CONFIG = {
  gasPrice: ethers.utils.parseUnits(config.gasPrice, 'gwei')
}

const WETH9 = artifacts.require('WETH9')
const TomiPlatform = artifacts.require('TomiPlatform')
const TomiConfig = artifacts.require('TomiConfig')
const Tgas = artifacts.require('Tgas')
const USDT = artifacts.require('USDT')
// const TomiPair = artifacts.require('TomiPair')
// const TomiPool = artifacts.require('TomiPool')
const TomiFactory = artifacts.require('TomiFactory')
const TomiGovernance = artifacts.require('TomiGovernance')
const TomiBallotFactory = artifacts.require('TomiBallotFactory')
const TomiTransferListener = artifacts.require('TomiTransferListener')
const TomiQuery = artifacts.require('TomiQuery')
// const TomiQuery2 = artifacts.require('TomiQuery2')
// const TomiDelegate = artifacts.require('TomiDelegate')
// const ERC20 = artifacts.require('ERC20')

let ALL_ERC20_TOKENS = []
// ALL_ERC20_TOKENS.push(TGAS_ADDRESS, USDT_ADDRESS, WETH_ADDRESS)
let TOKENA_ADDRESS = ''

const NEED_TRANSFER_ADDRESS = config.users
const MOCK_TOKENS = [{ name: 'tokenA', symbol: 'A' }]

function expandTo18Decimals(n, p = 18) {
  return BigNumber.from(n).mul(BigNumber.from(10).pow(p))
}

const ownerAddress = web3.eth.accounts.privateKeyToAccount(privateKey).address

const initialize = async () => {
  let ins = await TomiTransferListener.deployed()
  console.log('transferListener initialize...')

  let tx = await ins.initialize(
    Tgas.address,
    TomiFactory.address,
    WETH9.address,
    TomiPlatform.address
    // ownerAddress,
    // ETHER_SEND_CONFIG
  )

  ins = await TomiGovernance.deployed()
  console.log('TomiGovernance initialize...')
  tx = await ins.initialize(TomiPlatform.address, TomiConfig.address, TomiBallotFactory.address, ETHER_SEND_CONFIG)

  ins = await TomiPlatform.deployed()
  console.log('platform initialize...')
  tx = await ins.initialize(
    Tgas.address,
    TomiConfig.address,
    TomiFactory.address,
    WETH9.address,
    TomiGovernance.address,
    TomiTransferListener.address
    // TomiPool.address,
    // ETHER_SEND_CONFIG
  )

  // ins = await TomiPool.deployed()
  // console.log('TomiPool initialize...')
  // tx = await ins.initialize(
  //   Tgas.address,
  //   WETH9.address,
  //   TomiFactory.address,
  //   TomiPlatform.address,
  //   TomiConfig.address,
  //   TomiGovernance.address,
  //   ETHER_SEND_CONFIG
  // )

  ins = await TomiConfig.deployed()
  console.log('TomiConfig initialize...')
  tx = await ins.initialize(
    Tgas.address,
    TomiGovernance.address,
    TomiPlatform.address,
    ownerAddress,
    ALL_ERC20_TOKENS
    // ETHER_SEND_CONFIG
  )

  // set FEE_LP_REWARD_PERCENT
  tx = await ins.changeConfig(
    '0x4645455f4c505f5245574152445f50455243454e540000000000000000000000',
    1000,
    6000,
    250,
    4000,
    ETHER_SEND_CONFIG
  )

  // set FEE_GOVERNANCE_REWARD_PERCENT
  tx = await ins.changeConfig(
    '0x4645455f474f5645524e414e43455f5245574152445f50455243454e54000000',
    1000,
    6000,
    250,
    5000,
    ETHER_SEND_CONFIG
  )

  // console.log('have list tokens length ', (await ins.tokenCount()).toString())
  // console.log('the first list token address ', (await ins.tokenList(0)).toString())

  console.log('tgas upgradeImpl ', TomiTransferListener.address)
  ins = await Tgas.deployed()
  tx = await ins.upgradeImpl(TomiTransferListener.address, ETHER_SEND_CONFIG)

  console.log('tgas upgradeGovernance ', TomiGovernance.address)
  tx = await ins.upgradeGovernance(TomiGovernance.address, ETHER_SEND_CONFIG)

  // TOMI QUERY
  console.log('TomiQuery upgrade ', TomiGovernance.address)
  ins = await TomiQuery.deployed()
  tx = await ins.upgrade(
    TomiConfig.address,
    TomiPlatform.address,
    TomiFactory.address,
    TomiGovernance.address
    // TomiTransferListener.address,
    // ETHER_SEND_CONFIG
  )

  // // TOMI QUERY2
  // console.log('TomiQuery2 upgrade ', TomiGovernance.address)
  // ins = await TomiQuery2.deployed()
  // tx = await ins.upgrade(
  //   TomiConfig.address,
  //   TomiPlatform.address,
  //   TomiFactory.address,
  //   TomiGovernance.address,
  //   TomiTransferListener.address,
  //   TomiDelegate.address,
  //   ETHER_SEND_CONFIG
  // )
}

module.exports = async function(cb) {
  try {
    await initialize()
    cb(null, {})
  } catch (err) {
    console.log(err)
    cb(err)
  }
}
