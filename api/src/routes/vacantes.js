const express = require('express')
const server = express();
const axios = require('axios');
const { obtenerToken } = require('../services/auth.js');
const router = express.Router()

router.get("/vacantes", (req, res, next) => {
	
	const options = {

		headers:{

			'Accept': 'application/json'
		}

	}
    
    axios.get(`https://api.hiringroom.com/v0/vacancies?listStatus=activa&userId=5767f2bb820cbf846f59de03&page=0&pageSize=20&token=${obtenerToken()}`, options)
       .then(data => {
       	res.json(data.data.vacantes);
       })
       .catch(err => res.send(err))

});

module.exports = router;