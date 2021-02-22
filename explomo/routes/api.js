const express = require('express');
const citiesModel = require('../models/citiesModel');
const router = express.Router();
let CitiesModel = require('../models/citiesModel')

router.get('/allCities', async function(req,res){
    try {
        let citiesList = await CitiesModel.find({})
        res.json(citiesList)
    } catch (err) {
        res.json({error:err})
    }
})

module.exports = router;