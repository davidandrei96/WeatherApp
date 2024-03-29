const request = require('request')


const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiZGF2aWRhbmRyZWk5NiIsImEiOiJjanZ3am10d3MwMHhyNDZwbmRoZWt1ZTJyIn0.XZyh6v5LuiIJMHxYh-AF-g&limit=1'
    request({ url, json: true }, (error, { body }) => {
        if (error && body === undefined) {
           callback('Unable to connect to geocoding service!')
        }
        else if (body.features.length === 0) {
            callback('Unable to find location! ')
        }
        else {
            
           callback(undefined, {
            long: body.features[0].center[0],
            lat: body.features[0].center[1],
            location: body.features[0].place_name
           })
        }

    })
}
module.exports = geocode