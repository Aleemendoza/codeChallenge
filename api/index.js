//       &&&&&&                         &&&&                                                 
//     .&&&&&&%&&                     #&&&&&%                                                
//      @c&&&&&&&&&&&%. *      ,,(@&&%%%&&&&,                                                
//       (o&&&# *, ,&&&&&&/.&&&&&%/*#&&&&&(                                                  
//        %l&&&&&&&&&&&&,  ,&&&&&&&&&&&(                                                    
//         .o&&&&&&&@.        #*/%@&&%%*    *                                               
//     /%,                                  %                                                
//      (##.        #*                    *#                                                 
//       ,%#                             %/                                                  
//        ,%.        .(.       .        %                                                    
//          ,%#.         .(#,      *###,                                                     
//            *#####//(/**  ***#####(.                                                       
//               *%##############*                                                           
//                      ,***,,,                                                     



const express = require('express');
const server = express();
const mongoose = require('mongoose');
const cors = require('cors')
const bodyParser = require('body-parser');
const routes = require('./src/routes/index.js');
 

server.use(cors());

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.listen('3001', function(){

	console.log('servidor corriendo en puerto 3001')
});


server.use('/', routes);

mongoose.Promise = Promise;

const mongoUri = config.mongo.host;
mongoose.connect(mongoUri, { server: { socketOptions: { keepAlive: 1 } } });

mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database:`);
});

module.exports = server;