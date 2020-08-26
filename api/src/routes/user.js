const express = require('express');
const router = express.Router();
const cors = require('cors');

const User = require('../models/User.js');






router.get('/user/singin', (req, res) => {

	res.send('ingresando a la app');

});







module.exports = router;