let router = require('express').Router();
let citiesCtrl = require("../controllers/citiesController");

router.get('/allCities', citiesCtrl.findAllCities);
router.get('/create', citiesCtrl.createTestCities);

module.exports = router;