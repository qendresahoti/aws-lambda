const postmanRequest = require('postman-request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoicWVuZHJlc2Fob3RpIiwiYSI6ImNrbzRyeTl0OTA3MW4yd2x4cHQ4NGExdzgifQ.sWy2YnfUY_US60q4x_WFCg&limit=1'
    postmanRequest({ url: url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to conncect to location services', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode