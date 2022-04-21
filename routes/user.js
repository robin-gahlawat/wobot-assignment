const express = require('express');
const router = express.Router();

const passport = require('passport');
const bcrypt = require('bcrypt');

const UserDB = require('../models/user');
const ProductDB = require('../models/product');

const auth = require('../config/auth');


const { append } = require('express/lib/response');
const user = require('../models/user');


router.get('/signup', async function(req,res){
    res.send('Signup working...');
});
router.post('/signup',async function(req,res){

    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const username = req.body.username;
    const password = req.body.password;

    const hashedPassword = await bcrypt.hash(password, 10)

    if(firstname == "" || lastname == "" ||  username == "" || password == ""){
        res.send('Fill all information(firstname, lastname, username, password)');
    }
    else{

        UserDB.findOne({ username: username }, function (err, user) {
            if (err) res.send('Database Error');

            if (user) {
                res.send('User already exists');
            }
            else {
                var user = new UserDB({
                    firstname: firstname,
                    lastname: lastname,
                    username: username,
                    password: hashedPassword
                });
                user.save(function (err) {
                    if (err)
                        console.log(err);
                    else {
                        res.send('user sign up successful');
                    }
                });
            }

        });
    } 

});


router.get('/login', async function(req,res){
    res.send('Login working...');
});

router.get('/loginfail', async function(req,res){
    res.send('Login failure');
})

router.post('/login', passport.authenticate('local', {
    successRedirect: '/user/list',
    failureRedirect: '/user/loginfail',
    failureFlash: true
}));



router.get('/list', auth, async function(req,res){
    UserDB.find({}, async function(err, users){
        res.send(users);
    })
});


router.get('/userinfo', auth, async function(req,res){
    const username = req.body.username;

    UserDB.findOne({username: username}, async function(err, user){
        res.send(user);
    })
});




module.exports = router;