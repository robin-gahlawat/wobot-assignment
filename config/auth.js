
function auth(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    else{
        res.send('Please login first');
    }
}

module.exports = auth
