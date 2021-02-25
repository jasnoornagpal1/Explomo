const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bucketlistSchema = new Schema({
    Name: String,
    Category: String,
    Photo: String,
    Description: String,

});


module.exports = mongoose.model('bucketlist', bucketlistSchema)

