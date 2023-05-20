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
const {sendTwilioSms} = require('./helpers/notifications');

// app object - module scaffolding
const app = {};

sendTwilioSms("01318777906",'FROM Uptime Monitoring System, Hi Tarin',(err)=>{
    console.log(`this is the error`,err);
});
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