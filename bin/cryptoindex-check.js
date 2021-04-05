const program = require('commander');
const check = require('../commands/check');

program
    .command('price')
    .description('Get prices of cryptocurrencies')
    .option('--coin <type>','Add coins in CSV format','BTC,ETH,XRP')
    .option('--cur <currency>','Change currency','USD')
    .action( (cmd) => check.price(cmd))

program.parse(process.argv);