const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {type: String, default: ""},
    email: {type: String, required: true, lowercase: true, unique: true},
    password: {type: String, default: ""},
})

userSchema.set('toJSON', {
    transform: function(doc, ret) {
      // remove the password property when serializing doc to JSON
      delete ret.password;
      return ret;
    }
  });

module.exports = mongoose.model('user', userSchema)