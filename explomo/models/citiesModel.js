const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const citiesSchema = new Schema({
    name: {type: String, default: ""},
    location: {type: String, default: ""},
    image: {type: String, default: ""}
})

module.exports = mongoose.model('cities', citiesSchema)

