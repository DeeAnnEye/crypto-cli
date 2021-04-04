#!/usr/bin/env node
const program = require('commander')
const pkg = require('../package.json')

program
    .version(pkg.version)
    .command('key','Get API key - https://nomics.com')
    .parse(process.argv)

// get arguments with terminal commands without commander
// console.log(process.argv)