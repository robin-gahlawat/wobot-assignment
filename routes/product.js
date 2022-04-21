const express = require('express');
const router = express.Router();

const passport = require('passport');
const bcrypt = require('bcrypt');

const UserDB = require('../models/user');
const ProductDB = require('../models/product');

const auth = require('../config/auth');


router.get('/uploadproducts', auth, async function(req,res){
    res.send('uploading service working');
})

router.post('/uploadproducts', auth, async function(req,res){
    
    const name = req.body.name;
    const desc = req.body.desc;
    const qty = req.body.quantity;
    const pr = req.body.price;
    const createdBy = req.body.createdBy;

    const quantity = parseInt(qty);
    const price = parseInt(pr);


    if(name == "" || desc == "" ||  quantity == "" || price == ""){
        res.send('Fill all information');
    }
    else{

        ProductDB.findOne({ name: name }, function (err, user) {
            if (err) res.send('Database Error');

            if (user) {
                res.send('Product already exists');
            }
            else {
                var product = new ProductDB({
                    name: name,
                    description: desc,
                    quantity: quantity,
                    price: price,
                    createdBy: createdBy
                });
                product.save(function (err) {
                    if (err)
                        console.log(err);
                    else {
                        res.send('Product added');
                    }
                });
            }

        });


    } 

});

router.get('/productlist', auth, async function(req,res){
    ProductDB.find({}, async function(err, products){
        res.send(products);
    })
});


module.exports = router;