const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const SALT_ROUNDS = 6;

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

userSchema.pre('save', function(next){
    // middleware - runs before a user is saved
    const user = this;
    if (!user.isModified('password')) return next();
    // password has been changed, time to salt and hash it
    bcrypt.hash(user.password, SALT_ROUNDS, function(err, hash){
        if (err) return next(err);
        // replace user provided password with hash
        user.password = hash;
        next();
    });
})
  module.exports = mongoose.model('user', userSchema)