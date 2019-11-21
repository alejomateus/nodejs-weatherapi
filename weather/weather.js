const axios = require('axios');
const appid = '4a814a8b13ebc5101de799c047b47adb';
const units = 'metric';
const getWeather = async(lat, lon) => {
   const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appid}&units=${units}`);
   return resp.data.main.temp;
}
module.exports = {
    getWeather
}