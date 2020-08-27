const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');


const Schema = mongoose.Schema

const UserSchema = new Schema({
	
	email:{
		type: String,
		unique: true,
		lowercase: true,
		required: true
	},
	password:{
	
		type: String,
		required: true
	
	},
}, {

	timetamps: true
});

UserSchema.pre('save', function(next){

	const user = this;
	if(!user.isModified('password')){
		return next();
	}

	bcrypt.genSalt(10, (err, salt) =>{
		if(err){
			next(err);
		}
		bcrypt.hash(user.password, salt, null, (err, hash) => {
			if(err){
				next(err);
			}
			user.password = hash;
			next();
		})

	})

})


UserSchema.methods.compararPassword = function(password, cb){
		bcrypt.compare(password, this.password, (err, sonIguales) => {
			if(err){
			return cb(err);
		}
		cb(null, sonIguales);
	})

}




User = mongoose.model('users', UserSchema);

module.exports = User;

