import bcrypt from 'bcryptjs';
//import jwt from 'jsonwebtoken';
import user_data from '../model/user_data.js';
import giveResponse from '../helpers/response';
import {validate} from "../middleware/validateUser";


  const createUser = async (req, res) => {
                //joi
const { error } = validate(req.body); 
if (error) return res.status(400).send(error.details[0].message);
              //joi end

    
  const {email,first_name,last_name,password,phoneNumber,address,is_admin} = req.body;

  let checkUser = user_data.find(user => user.email === req.body.email);
  if (checkUser) return res.status(400).send('User already registered.');
  
  const newUser = {
    id: user_data.length + 1,
    email,
    first_name,
    last_name,
    password,
    phoneNumber,
    address,
    is_admin
  };

 const salt = await bcrypt.genSalt(10);
 newUser.password = await bcrypt.hash(newUser.password, salt);
  user_data.push(newUser);
  giveResponse.responses(res, 201, newUser);
  
    }



export default createUser;