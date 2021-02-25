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

async function createTestCities(req,res) {
    try {
      await CityModel.create({
          name: "Toronto",
          location:'ON',
          image:'b'

      })
      res.json("ok")
    } catch(err) {
       res.json({message: err})
    }
 }
module.exports = {
    findAllCities,
    createTestCities,
}