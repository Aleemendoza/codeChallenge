const mongoose = require('mongoose');
const Schema = mongoose.Schema

const UserSchema = new Schema({
	email:{
		type: String
	},
	password:{
	
		type: String
	}
	
});

User = mongoose.model('users', UserSchema);

module.exports = User;

