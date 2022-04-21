
var mongoose = require('mongoose')

// User Schema
var UserSchema = mongoose.Schema({

    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }

});

var User = module.exports = mongoose.model('User', UserSchema);
  