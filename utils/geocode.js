const request = require('request')

const geocoding = (place, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(place)}.json?access_token=pk.eyJ1Ijoicm9zaHJvc2giLCJhIjoiY2xpdTJvMWJyMWtvdzNrbngxYWIxbjlpZSJ9.Z3ip8Do2ijKHDcpw2K7qCw`
    request({ url, json: true }, (error, response) => {

        if (error) {
            callback(error)
        } else if (response.body.features.length == 0) {
            callback('Unable to convert to coordinates')
        } else {
            const latitude = response.body.features[0].center[1]
            const longitude = response.body.features[0].center[0]

            callback(undefined, { latitude, longitude })
        }

    })

}

module.exports = { geocoding }