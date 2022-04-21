const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');

const app = express();
app.use(express.json());

app.use(express.urlencoded({extended: false}));

// Connecting to database
mongoose.connect('mongodb+srv://testdb:testdb123@cluster0.uxyzv.mongodb.net/wobotDb?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function(){
    console.log('connected to database.');
})

// Setting up passport
const initializePassport = require('./config/passport-config')
initializePassport(passport);

app.use(session({
    secret: 'key1',
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

// Setting up routes
const user = require('./routes/user.js');
const prod = require('./routes/product.js');

app.use('/user', user);
app.use('/prod', prod);


// Setting up server

const PORT = process.env.PORT || 3003;
app.listen(PORT , ()=>{
    console.log('Server is up on ' + PORT);
})

