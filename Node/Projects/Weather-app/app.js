const request = require('request')

// const url = 'http://api.weatherstack.com/current?access_key=53fb62b8da49bfc1d856bc6c2c8f04a5&query=&units = m';

// request({ url: url, json: true }, (error, response) => {

//     if (error) {
//         console.log("unable to connect weather service")
//     } else if (response.body) {
//         console.log("unable to find location")
//     } else {
//         console.log(response.body.current.temperature + " " + response.body.current.feelslike + " " + response.body.current.weather_descriptions)
//     }

// })

const geoCoding = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibWF5dXJqaXlhbmkiLCJhIjoiY2t5MzVuNXozMGhnbTJ1bDUzZnFhbThlNSJ9.xgPwh4oLsmdOhUCaeoLgEg&limit=1';
request({ url: geoCoding, json: true }, (error, response) => {

    if (error) {
        console.log("unable to connect weather service")
    } else if (response.body.features.length === 0) {
        console.log("unable to find location")
    } else {
        console.log("Latitude " + response.body.features[0].center[1])
        console.log("Longitude " + response.body.features[0].center[0])
    }
})