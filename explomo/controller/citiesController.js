const CityModel = require("../models/citiesModel")

async function findAllCities(req,res){
    try{
        let allCities = await CityModel.find({});
        console.log(allCities)
        res.send({cities: allCities})
    } catch (err){
        res.send({message: err.message, response: false})
    }
}
module.exports = {
    findAllCities,
}