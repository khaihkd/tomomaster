'use strict'

const BlockSignerABI = require('../../build/contracts/BlockSigner')
const Web3Ws = require('./web3ws')
const config = require('config')

function BlockSigner (web3) {
    let blockSigner = new web3.eth.Contract(BlockSignerABI.abi, config.get('blockchain.blockSignerAddress'))
    return blockSigner
}

module.exports = BlockSigner
