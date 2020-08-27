const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy
const Usuario = require('../models/User.js');


passport.serializeUser((Usuario, done) => {
	done(null, Usuario._id);
})

passport.deserializeUser((id, done) => {
	Usuario.findById(id, (err, usuario) => {
		done(err, Usuario);
	})
});

passport.use(new LocalStrategy(
	{usernameField: 'email'},
	(email, password, done) => {
		Usuario.findOne({email}, (err, usuario) => {
			if (!usuario) {
				return done(null, false, {message: 'El email no esta registrado'});
			}

			else {
				usuario.compararPassword(password, (err, sonIguales) => {
					if (sonIguales) {
						return done(null, usuario);
					} else {
						return done(null, false, {message: 'los datos no son validos!'})
					}
				})
			}
		})
	}
	
));

exports.estaAutenticado = (req, res, next) => {
	if(req.isAuthenticated()){
		return next();
	}
	res.status(401).send('tienes que loguearte primero!');

}
