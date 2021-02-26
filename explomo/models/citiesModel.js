const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const restaurantSchema = new Schema ({
    name: {type: String},
    image: {type: String},
    description: {type: String}
})

const citiesSchema = new Schema({
    name: {type: String, default: ""},
    location: {type: String, default: ""},
    image: {type: String, default:""},
    restaurants: [restaurantSchema]
    //restaurants: {all related schemas for categories will go here}
})

module.exports = mongoose.model('cities', citiesSchema)

