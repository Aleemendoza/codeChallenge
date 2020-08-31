const mongoose = require('mongoose');
const server = require('../../index.js');




//TODO: dockerizar mongo

mongoose.connect('mongodb://localhost:27017/hiringroomdatabase', {

	useCreateIndex: true,
	useNewUrlParser: true,
	useUnifiedTopology: true
	

})

.then(db => console.log('conectado a la base de datos'))
.catch(err => console.log(err));

