const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=b36e4dda3ec8de72c882ea8f2f3e6e5c&query=${latitude},${longitude}`

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to the weather service!', undefined)
        } else if (body.error) {
            console.log(body.error);
            callback('Unable to find location!', undefined)
        } else {
            const { temperature, feelslike, humidity } = body.current;
            callback(undefined, `${body.current.weather_descriptions[0]}. It is currently ${temperature} degrees out. It feels like ${feelslike} degrees. The humidity is at ${humidity} percent.`)
        }
    });
}

module.exports = forecast;
