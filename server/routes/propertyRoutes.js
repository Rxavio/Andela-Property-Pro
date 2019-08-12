import express from 'express';
import propertyController from '../controllers/controllerProperty.js';
import checkToken from '../middleware/userToken';
import adminToken from '../middleware/adminToken';



const router = express.Router();

router.get('/property', propertyController.getAllProperties);

router.get('/property/:id', propertyController.getSingleProperty);

router.post('/property',[checkToken],propertyController.addProperty);


router.patch('/property/:id',[checkToken], propertyController.updateProperty);

router.delete('/property/:id',[checkToken,adminToken], propertyController.deleteProperty);

router.get('/property/:type', propertyController.PropertiesByType);

router.patch('/Property/:id/sold',[checkToken], propertyController.propertyMarkSold);






export default router;
