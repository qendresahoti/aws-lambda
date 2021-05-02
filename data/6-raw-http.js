const http = require('http')
const url = 'http://api.weatherstack.com/current?access_key=bfbee3f0e5df3308a2697646fce6e3f4&query=40,-75&units=f'

const request = http.request(url, (response) => {
    let data = ''
    // this callback is fired when the data comes in
    response.on('data', (chunk) => {
        data = data + chunk.toString()
        console.log(chunk)
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error) => {
    console.log('An error', error)
})
request.end()