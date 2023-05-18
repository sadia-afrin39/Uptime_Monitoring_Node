/*
 * Title: Uptime Monitoring Application
 * Description: A RESTFul API to monitor up or down time of user defined links
 * Author: Sadia Afrin Tarin ( Inspired by Learn with Sumit )
 * Date: 5/5/2023
 *
 */
// dependencies
const http = require('http');
const { handleReqRes } = require('./helpers/handleReqRes');
const environment = require('./helpers/environments');
const data = require('./lib/data');

// app object - module scaffolding
const app = {};

// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(environment.port, () => {
        console.log(`listening to port ${environment.port}`);
    });
};

// handle Request Response
app.handleReqRes = handleReqRes;

// start the server
app.createServer();