const place = require('./place/place');
const weather = require('./weather/weather');

const argv = require('yargs').options({
    place: {
        alias: 'd',
        desc: 'City to get the weather',
        demand: true
    }
}).argv;
// place.getLatLong(argv.place).then(console.log);
// weather.getWeather(37.340000, -121.889999).then(console.log).catch(console.log);
const getInfo = async (place) => {
    try {
        const coords = await place.getLatLong(argv.place);
        const temp = await weather.getWeather(coords.lat,  coords.lon);
        return `The weather of ${coords.place} is ${temp} degrees`;
    } catch (error) {
        return `Can´t determinate the weather to ${place}`
    }    
}
getInfo(argv.place)