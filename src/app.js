const path = require('path')
const express = require('express')

const vito = express()

//define paths for Express
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates')

// Setup handlebars engine and views location
vito.set('view engine', 'hbs')
vito.set('views',viewsPath)

// Setup static directory to serve
vito.use(express.static(publicDirectoryPath))

vito.get('', (req, res) => {
    res.render('index', {
        title: 'Weather app',
        name: 'Andrew mead'
    })
})
vito.get('/about', (req, res) => {
    res.render('about',{
        title: 'About Me',
        name: 'Andrew Mead'
    })
})
vito.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some'
    })
})

vito.listen(3000, () => {
    console.log('Server is up on port 3000.')
}) 