import express from 'express';
import createUser from '../controllers/createUser.js';
import loginUser from '../controllers/loginUser.js';


const router = express.Router();

router.post('/user/create',createUser);
router.post('/user/login',loginUser);




export default router;
