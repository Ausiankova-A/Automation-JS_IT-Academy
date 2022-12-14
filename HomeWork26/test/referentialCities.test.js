const axios = require('axios')
const referential = require('../testData/referential.json')
const Validator = require('jsonschema').Validator;
const validator = new Validator('../sendHttpRequest');

describe('api testing of "Cities" for referential website', function () {
    let response;
    beforeAll(async () => {
        response = await axios.get('https://referential.p.rapidapi.com/v1/city', {
            params: {
                fields: 'iso_a2,state_code,state_hasc,timezone,timezone_offset',
                iso_a2: 'us',
                lang: 'en',
                state_code: 'US-CA',
                prefix: 'san fr',
                limit: '250'
            },
            headers: {
                'X-RapidAPI-Key': '732df63b37msh6048538ff001c08p1123c5jsn8d4b7a93e145',
                'X-RapidAPI-Host': 'referential.p.rapidapi.com'
            }
        })
    })
    test('check status code "Cities" request for Referential API ', async () => {
        expect(response.status).toEqual(200);
    });
    test('check response body for "Cities" for Referential API ', async () => {
        const result = await validator.validate(response.data, referential)
        expect(result.valid).toEqual(true);
    })
})