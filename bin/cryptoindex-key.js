const program = require('commander')

program
    .command('set')
    .description('Set API key - https://nomics.com')
    .action( () => console.log('hello set'));

program.parse(process.argv);