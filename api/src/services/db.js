const mongoose = require('mongoose');
const server = require('../../index.js');

mongoose.connect('mongodb://localhost:27017/hiringroomdatabase', {

	useCreateIndex: true,
	useNewUrlParser: true,
	useFindAndModify: true,
	useUnifiedTopology: true

})
.then(db => console.log('conectado a la base de datos'))
.catch(err => console.log(err));
