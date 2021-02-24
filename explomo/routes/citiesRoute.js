let router = require('express').Router();
let citiesCtrl = require("../controllers/citiesController");

router.get('/allCities', citiesCtrl.findAllCities);

module.exports = router;