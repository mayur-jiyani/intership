const geoCoding = require('./utils/geocode')
const forecast = require('./utils/forecast')

const location = process.argv[2]

if (!location) {
    console.log("Provide location")
} else {
    
    geoCoding(location, (error, { latitude, longitude, placename }) => {
        if (error) {
            return console.log('Error', error)
        }

        forecast(latitude, longitude, (error,forecastdata) => {
            if (error) {
                return console.log('Error', error)
            }
            console.log(placename)
            console.log(forecastdata)

        })
    })
}


