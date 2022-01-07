const http = require("http")

const url = 'http://api.weatherstack.com/current?access_key=53fb62b8da49bfc1d856bc6c2c8f04a5&query=45,-75&units = m';

const request = http.request(url, (response) => {
    let data = " "

    response.on('data', (chunk) => {
        data += chunk.toString();
        
    });

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body);
    });
})

request.on('error', (error) => {
    console.log('Error: ', error);
});

request.end()