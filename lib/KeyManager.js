const Configstore = require('configstore');
const key = require('../commands/key');
const pkg = require('../package.json')

class KeyManager{

    constructor(){
        this.conf = new Configstore();
    }

    setKey(key){
        this.conf.set('apiKey',key);
        return key;
    }

    getKey(){
        const key = this.conf.get('apiKey')

        if(!key){
            throw new Error('No API key - Get one at https://nomics.com')
        }

        return key;
    }

    deleteKey(){
        const key = this.conf.get('apiKey')

        if(!key){
            throw new Error('No API key - Get one at https://nomics.com')
        }

        this.conf.delete('apiKey')

        return;
    }
}

module.exports = KeyManager;