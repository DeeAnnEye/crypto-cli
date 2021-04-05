#!/usr/bin/env node
const program = require('commander')
const pkg = require('../package.json')

program
    .version(pkg.version)
    .command('key','Get API key - https://nomics.com')
    .command('check','Check Cryptocurrency Prices')
    .parse(process.argv)

// get arguments with terminal commands without commander
// console.log(process.argv)

// https://api.nomics.com/v1/currencies/ticker?key=df4f2c2bf8926feecee70b01bf6ec9f9&ids=BTC,ETH,XRP&convert=USD&per-page=100&page=1