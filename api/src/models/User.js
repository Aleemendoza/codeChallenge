const mongoose = require('mongoose');
const Schema = mongoose.Schema

const UserSchema = new Schema({
	cliente_id:{
		type: String
	},
	cliente_secret:{
	
		type: String
	}
	
});

User = mongoose.model('users', UserSchema);

module.exports = User;

