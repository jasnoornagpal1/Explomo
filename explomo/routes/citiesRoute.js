let router = require('express').Router();
let citiesCtrl = require("../controller/citiesController");

router.get('/allCities', citiesCtrl.findAllCities);

module.exports = router;