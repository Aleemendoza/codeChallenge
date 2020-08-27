const express = require('express');
const router = express.Router();
const cors = require('cors');
const { postSignup, postLogin, logOut } = require('../controladores/userController.js')
const User = require('../models/User.js');
const { estaAutenticado } = require('../config/passport.js')




router.post('/signup', postSignup);

router.post('/login', postLogin);

router.get('/logout', estaAutenticado ,logOut);


router.get('/infoUser', estaAutenticado, (req, res)=>{
	res.json(req.user);
})








module.exports = router;