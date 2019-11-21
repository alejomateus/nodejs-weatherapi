const place = require('./place/place')
const argv = require('yargs').options({
    address: {
        alias: 'd',
        desc: 'Address for the city to get the weather',
        demand: true
    }
}).argv;
place.getLatLong(argv.address).then(console.log);
