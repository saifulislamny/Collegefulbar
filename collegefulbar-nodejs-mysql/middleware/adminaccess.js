const jwt = require('jsonwebtoken');


const requireAuthAdmin = (req, res, next) => {
    const token = req.cookies.jwt;

    //check if token exists

    if(token){
        jwt.verify(token, process.env.JWT_SECRET_ADMIN, (err,decodedToken)=>{
            if(err){
                console.log(err.message);
                res.redirect('/login');
            }else{
                console.log(decodedToken);
                next();
            }
        })

    }else{
        res.redirect('/login');
    }
}

module.exports = { requireAuthAdmin};