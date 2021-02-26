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
        let res1 = {name: "Style's Cafe", image: "", description: ""}
        let res2 = {name: "Bean Sahab", image: "", description: ""}
        let arr = []
        
        arr.push(res1, res2)
        await CityModel.create({
          name: "New Delhi",
          location:'New Delhi',
          image:'b',
          restaurants: arr
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