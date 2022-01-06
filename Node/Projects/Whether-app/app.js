const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=53fb62b8da49bfc1d856bc6c2c8f04a5&query=fetch:ip';

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.current)
})