const request = require('request')

const weather_data = ({ latitude, longitude }, callback) => {
    const url = `http://api.weatherapi.com/v1/current.json?key=57477496cf00481d994103954231206&q=${encodeURIComponent(latitude)},${encodeURIComponent(longitude)}&aqi=no`
    request({ url, json: true }, (error, response) => {
        if (error) {
            callback(error)
        } else if (response.body.error) {
            callback(response.body.error.message)
        } else {
            callback(undefined, response.body)
        }


    })

}

module.exports = { weather_data }