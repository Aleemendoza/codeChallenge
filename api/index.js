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
const cors = require('cors')
const bodyParser = require('body-parser');
const methodOverride = require('method-override'); 
const session = require('express-session');
const { obtenerToken, actualizarToken } = require('./src/services/auth.js')

//initializations

const server = express();
require('./src/services/db.js');


// Settings

server.set('port', process.env.PORT || 3000);

server.use(cors());

// server listener

server.listen(server.get('port'),() => {

	actualizarToken()
	console.log('servidor corriendo en puerto', server.get('port'));

});

// Middelwares

server.use(express.urlencoded({extended: false}))
server.use(methodOverride('_method'))
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(session({
	secret: 'mysecretapp',
	resave: true,
	saveUnilitialized: true
}))

// Routes

server.use(require('./src/routes/vacantes.js'));
server.use(require('./src/routes/user.js'));


module.exports = server;