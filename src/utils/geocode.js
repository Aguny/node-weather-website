const request = require('request');

const geocode = (address, callback) => {
    const url = `https://api.geoapify.com/v1/geocode/search?format=json&apiKey=5b61a887ad5f453a839bad275ef87411&text=${encodeURIComponent(address)}`;

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to the geocode service!', undefined);
        } else if (body.error) {
            callback('Unable to find coorinates. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body?.results[0]?.lat,
                longitude: body?.results[0]?.lon,
                location: body?.results[0]?.formatted

            });
        }
    })

};

module.exports = geocode;