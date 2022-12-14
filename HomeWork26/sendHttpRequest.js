const https = require('https');
const axios = require('axios');

const RESPONSE_TIMEOUT = parseInt(process.env.RESPONSE_TIMEOUT, 10) || 10000;
/**
 * Sending http request
 *
 * @param {Object} params - object of request parameters
 * @param {string} httpMethod - method of request
 * @param {number} statusCode - expected status response code
 * @param {number} [testTimeout] - An optional parameter for response timeout
 * @returns {Object} response - response object
 */
async function sendHttpRequest(params, httpMethod = 'GET', statusCode, testTimeout = RESPONSE_TIMEOUT) {
    const conf = {
        method: httpMethod,
        headers: {
            'Content-Type': 'application/json',
        },
        ...params,
        validateStatus(status) {
            return statusCode ? statusCode === status : true;
        },
        httpsAgent: new https.Agent({
            rejectUnauthorized: false,
        }),
        timeout: testTimeout,
    };
    return axios(conf);
}

module.exports = {
    sendHttpRequest
}