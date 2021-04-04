const inquirer = require('inquirer');
const colors = require('colors');
const KeyManager = require('../lib/KeyManager')


const key = {
    async set(){
        const keyManager = new KeyManager();
        const input = await inquirer.prompt([
            {
            type: 'input',
            name: 'key',
            message: 'Enter API key '.green + ' https://nomics.com'
            }
        ]);

        const key = keyManager.setKey(input.key);

        if(key){
            console.log('API key set'.blue);
        }
    },
    show(){
        console.log("Hello show")
    },
    remove(){
        console.log("Hello remove")
    }
}

module.exports = key;