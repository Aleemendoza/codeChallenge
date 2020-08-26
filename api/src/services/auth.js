// requerimientos de modulo 
//modulo de autenticacion, maneja la autenticacion de la api de hiringRoom
//expone un metoodo que devuelve un token vigente
//para que el token este vigente debe conocer cuando vence y renovarlo antes que expire 
const axios = require('axios')

let token = "";

function obtenerToken(){

	return token;

}

function actualizarToken(){


		const data = {
			client_id : "misentrevistas",
			client_secret: "c6a36be30918192c645b5bb87f185054"
		};

		const options = {

			headers: {

				'Content-Type': 'application/json'
			
			}
		};

		axios.post('https://api.hiringroom.com/v0/authenticate/login', data, options)
		.then(res =>{
			token = res.data.token
		});
};



function setearToken(tokenSeteado){
	
	token = tokenSeteado;

}

module.exports = {

	obtenerToken,
	actualizarToken

}