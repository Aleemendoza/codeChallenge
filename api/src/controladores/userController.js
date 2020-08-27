const passport = require('passport');
const Usuario = require('../models/User.js');

function postSignup(req, res, next){

	const nuevoUsuario = new Usuario({
		email: req.body.email,
		password: req.body.password
	})	

	Usuario.findOne({email: req.body.email}, (err, usuarioExistente) => {

		if(usuarioExistente) {
			return res.status(400).send('Este email ya esta registrado!');
		};

		nuevoUsuario.save((err) => {
		
		if(err) {
			next(err)
		}
		
		req.logIn(nuevoUsuario, (err) => {
		
			if(err){
				next(err);
			}
		
			res.send('Usuario creado exitosamente');
		
			})
		})
	})
}

function postLogin(req, res, next){

	passport.authenticate('local', (err, usuario, info) => {
		if(err){
			next(err);
		}
		if (!usuario){
			return res.status(400, 'Email o contrasenia no son validos!')
		}

	req.logIn(usuario, (err) => {
		if(err) {
			next(err);
		}
		res.send('Login exitoso!')
	 })
	})(req, res, next);

}

function logOut(req, res){
	req.logOut();
	res.send('logout exitoso!')
}

module.exports = {

	postSignup,
	postLogin,
	logOut


}