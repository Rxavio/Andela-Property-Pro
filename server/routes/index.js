import { Router } from 'express';
import propertyController from '../controllers/controllerProperty.js';


const routes = Router();

routes.get('/property', propertyController.getAllProperties);

routes.get('/property/:id', propertyController.getSingleProperty);

routes.post('/property', propertyController.addProperty);

routes.patch('/property/:id', propertyController.updateProperty);

routes.delete('/property/:id', propertyController.deleteProperty);


export default routes;
