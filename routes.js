/*
 * Title: Routes
 * Description: Application Routes
 *  Author: Sadia Afrin Tarin ( Inspired by Learn with Sumit )
 * Date: 5/5/2023
 *
 */

// dependencies
const { sampleHandler } = require('./handlers/routeHandlers/sampleHandler');
const { userHandler } = require('./handlers/routeHandlers/userHandler');
const { tokenHandler } = require('./handlers/routeHandlers/tokenHandler');
const { checkHandler } = require('./handlers/routeHandlers/checkHandler');

const routes = {
    sample: sampleHandler,
    user: userHandler,
    token:tokenHandler,
    check:checkHandler

};

module.exports = routes;