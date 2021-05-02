const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()

// using send to send different kinds of data
//default page

// Define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

//adding dynamic file view
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Qendresa'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About page',
        name: 'testi'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'Helpful text for the example',
        title: 'Help',
        name: 'testi2'
    })
})

// weather route
app.get('/weather', (req, res) => {
    console.log(req.query.address)
    if(!req.query.address) {
        return res.send({
            error: ' You must provide an address to get the weather'
        })
    }
    
    geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return res.send({
                error: error
            })
        }
        
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({ error })
            }
            
            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })
    })
})

// send json from the api
app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: ' You must provide a search term'
        })
    }
    console.log(req.query)
    res.send({
        products: []
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Hoti',
        errorMessage: 'Help article not found'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Qendresa',
        errorMessage: 'Page not found'
    })
})

// start up the server
app.listen(3000, () => {
    console.log('server is up and running on port 3000')
})