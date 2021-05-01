const postmanRequest = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=bfbee3f0e5df3308a2697646fce6e3f4&query=' + latitude + ',' + longitude + '&units=f'
    postmanRequest({url: url, json: true}, (error, response) => {
        const { body } = response
        if (error) {
            callback('Unable to connect to location services', undefined)
        } else if (body.error) {
            callback('Unable to find location 2', undefined)
        } else {
            console.log(body.current.weather_descriptions[0] + ' It is currently ' + +body.current.temperature + ' degrees out', 'and it feels like ' + +body.current.feelslike + ' degrees')
        }
    })
}

module.exports = forecast