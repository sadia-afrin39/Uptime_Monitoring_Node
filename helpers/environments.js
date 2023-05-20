/*
 * Title: Environments
 * Description: Handle all environment related things
 * Author: Sadia Afrin Tarin ( Inspired by Learn with Sumit )
 * Date: 15/5/2023
 *
 */

// module scaffolding
const environments = {};

// staging environment
environments.staging = {
    port: 3000,
    envName: 'staging',
    secretKey: 'hsjdhsdhsjdhjshdjshd',
    maxChecks:5,
    twilio: {
        fromPhone: '+12545875801',
        accountSid: 'ACbbfb152a4a593b32a206d35d4d3cff99',
        authToken: '56369cfc258ee01fe4d55c6b83ffda9d',
    },
};

// production environment
environments.production = {
    port: 5000,
    envName: 'production',
    secretKey: 'djkdjskdjksdjksjdskjd',
    maxChecks:5,
    twilio: {
        fromPhone: '+12545875801',
        accountSid: 'ACbbfb152a4a593b32a206d35d4d3cff99',
        authToken: '56369cfc258ee01fe4d55c6b83ffda9d',
    },
};

// determine which environment was passed
const currentEnvironment =
    typeof (process.env.NODE_ENV) === 'string' ? process.env.NODE_ENV : 'staging';

// export corresponding environment object
const environmentToExport =
    typeof (environments[currentEnvironment]) === 'object'
        ? environments[currentEnvironment]
        : environments.staging;

// export module
module.exports = environmentToExport;