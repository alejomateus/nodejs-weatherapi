const axios = require('axios');
const argv = require('yargs').options({
    address: {
        alias: 'd',
        desc: 'Address for the city to get the weather',
        demand: true
    }
}).argv;
console.log(argv.address);
