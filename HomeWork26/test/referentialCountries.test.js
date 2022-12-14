const axios = require('axios')
const referential = require('../testData/referential.json')
const Validator = require('jsonschema').Validator;
const validator = new Validator('../sendHttpRequest');

describe('API testgin for website referential', function () {
    describe('api testing of "Countries" for referential website', function () {
        let response;
        beforeAll(async () => {
            response = await axios.get('https://referential.p.rapidapi.com/v1/country', {
                params: {
                    fields: 'currency,currency_num_code,currency_code,continent_code,currency,iso_a3,dial_code',
                    limit: '250'
                },
                headers: {
                    'X-RapidAPI-Key': '732df63b37msh6048538ff001c08p1123c5jsn8d4b7a93e145',
                    'X-RapidAPI-Host': 'referential.p.rapidapi.com'
                }
            })
        })
        test('check status code "Countries" request for Referential API ', async () => {
            expect(response.status).toEqual(200);
        });
        test('check response body for "Countries" for Referential API ', async () => {
            const result = await validator.validate(response.data, referential)
            expect(result.valid).toEqual(true);
        });
    });
})