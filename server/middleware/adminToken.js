function adminToken(req,res,next){

    if(!req.user.is_admin) return res.status(403).send('Access Denied, Admin Access Only');

    next();

}
module.exports= adminToken;