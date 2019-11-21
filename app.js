const place = require('./place/place');
const weather = require('./weather/weather');
const argv = require('yargs').options({
    place: {
        alias: 'd',
        desc: 'City to get the weather',
        demand: true
    }
}).argv;
const getInfo = async (world_place) => {
    try {
        const coords = await place.getLatLong(world_place);        
        const temp = await weather.getWeather(coords.lat,  coords.lon);
        return `The weather of ${coords.place} is ${temp} degrees`;
    } catch (error) {
        return `Can´t determinate the weather to ${place}`
    }    
}
getInfo(argv.place).then(console.log).catch(console.log);