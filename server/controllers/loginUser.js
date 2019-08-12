import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import user_data from '../model/user_data';
import {validate} from "../middleware/Validatelogin";
//import dotenv from 'dotenv';
require('dotenv').config();


const loginUser = async (req, res) => {
    
                //joi
const { error } = validate(req.body); 
if (error) return res.status(400).send(error.details[0].message);
              //joi end


    const currentUser = user_data.find(user => user.email === req.body.email);
    if (!currentUser) return res.status(400).send('Unknown Email');
  
    const comparePass = await bcrypt.compare(req.body.password, currentUser.password);
    if (!comparePass) return res.status(400).send( 'Unknown Password');
     
    const token=jwt.sign({id:currentUser.id, is_admin: currentUser.is_admin},process.env.JWT_SECRET,{expiresIn:"1h"});
    res.header('user-token',token).send(token);
    // return res.status(200).json({
    //     message:"Login Successfully",
    //     token:token
    // });
    
   
  };
  
  export default loginUser;