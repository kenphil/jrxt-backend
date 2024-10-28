const express = require('express');
const router = express.Router();
const Controller = require('../controller')

router.get('/weather/current', Controller.getCurrentWeatherByLocation);

module.exports = router;
