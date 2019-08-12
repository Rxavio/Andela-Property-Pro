import jwt from 'jsonwebtoken';
require('dotenv').config();


function checkToken(req,res,next){
const token=req.header('user-token');
if(!token) return res.status(401).send('Access Denied.You Must Provide a Token.')


try{
    const verified=jwt.verify(token,process.env.JWT_SECRET);
    req.user=verified;
    next();
}
catch(ex){
    res.status(400).send('Invalid token');
}

}

module.exports= checkToken;