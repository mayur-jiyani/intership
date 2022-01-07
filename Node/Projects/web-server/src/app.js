const express = require('express')
const path = require('path')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
app.use(express.static(publicDirectoryPath))


app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'mayur jiyani'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        about: 'About Me',
        name: 'mayur jiyani'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpMe: 'Can I help u',
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: "it is snowing",
        location: "Surat"
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})