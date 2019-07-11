import { Router } from 'express';
import propertyController from '../controllers/controllerProperty.js';


const routes = Router();

routes.get('/property', propertyController.getAllProperties);

routes.get('/property/:id', propertyController.getSingleProperty);

routes.post('/property', propertyController.addProperty);

export default routes;
