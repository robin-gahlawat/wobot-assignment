
var mongoose = require('mongoose')

// User Schema
var ProductSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    createdBy: {
        type: String,
        required: true
    }

});

var Product = module.exports = mongoose.model('Product', ProductSchema);
  