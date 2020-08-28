const mongoose = require('mongoose');
const server = require('../../index.js');

//TODO: dockerizar mongo

mongoose.connect('mongodb://hiringroom:admin@mongo:27017/hiringroomdatabase?authSource=hiringroomdatabase', {

	useCreateIndex: true,
	useNewUrlParser: true,
	

})
.then(db => console.log('conectado a la base de datos'))
.catch(err => console.log(err));
