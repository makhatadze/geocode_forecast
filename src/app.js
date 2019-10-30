const path = require('path')
const express = require('express')

const vito = express()

const publicDirectoryPath = path.join(__dirname, '../public')



vito.use(express.static(publicDirectoryPath))

vito.get('', (req, res) => {
    res.send('<h1>Weather</h1>')
})

vito.get('/help', (req, res) => {
    res.send([{
        name: 'Andrew',
        age: 25
    },{
        name: 'vito',
        age: 21
    }
])
})

vito.get('/about', (req, res) => {
        res.send('<h1>About</h1>')
})
vito.get('/weather', (req, res) => {
    res.send('weather')
})

vito.listen(3000, () => {
    console.log('Server is up on port 3000.')
}) 