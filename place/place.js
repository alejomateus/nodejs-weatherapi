const axios = require('axios');
const getLatLong = async (world_place) => {
    const encodeUrl = encodeURI(world_place);
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: {
            'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com',
            'x-rapidapi-key': '68780d182dmsh69e84a57a4b274cp1d4dc6jsn52ddc930a92d'
        }
    });
    const resp = await instance.get();
    if (resp.data.Results.length === 0) {
        throw new Error(`No results for the place ${world_place}`)
    }
    const data = resp.data.Results[0];    
    const place = data.name;
    const lat = data.lat;
    const lon = data.lon;
    return {
        place,
        lat,
        lon
    }
}
module.exports = {
    getLatLong
}