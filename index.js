/*
 * Title: Uptime Monitoring Application
 * Description: A RESTFul API to monitor up or down time of user defined links
 * Author: Sadia Afrin Tarin ( Inspired by Learn with Sumit )
 * Date: 11/15/2020
 *
 */
// dependencies
const http = require('http');
const { handleReqRes } = require('./helpers/handleReqRes');
const environment = require('./helpers/environments');
const data = require('./lib/data');

// app object - module scaffolding
const app = {};

// configuration
// app.config = {
//     port: 3000,
// };

//testing file system
//write file
// data.create('test','newFile',{'name':'Bangladesh','language':'Bangla'},(err)=>{
//     console.log('error was',err);
// });

//read file
// data.read('test','newFile',(err,data)=>{
//     console.log(err,data);
// });

//update file
// data.update('test','newFile',{'name':'USA','language':'English'},(err)=>{
//          console.log('error was',err);
//      });

//delete file
// data.delete('test','newFile',(err)=>{
//        console.log('error was',err);
//      });


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