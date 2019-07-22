const request = require('request')


const forecast  = (long , lat, callback) => {
   

    const url = 'https://api.darksky.net/forecast/2cb209e788fb814b193d4c026869bf6d/' + lat + ',' + long + '?units=si&lang=ro'
   
    request({url, json: true}, (error, { body }) => {
        if(error){
        callback("Unable to connect to weather service",undefined)
        } else if(body.error){
        callback("Unable to find location", undefined)
        }else {
            callback(undefined, body.daily.data[0].summary + " Sunt " + body.currently.temperature + " grade Celsius. Sansele sa ploua sunt: " + body.currently.precipProbability + '%.')

        }
    })
 
}


module.exports = forecast