import property_data from '../model/property_data.js';
import moment from "moment";

class propertyController {

    //*********all property************/
    static getAllProperties(req, res) {
          return res.status(200).json({
            property_data,
             message: "Get the properties",
          });
    }

    //*********single property*********** */
 
static getSingleProperty(req, res) {
  const findProperty = property_data.find(property_data => property_data.id === parseInt(req.params.id, 10));
  if (findProperty) {
      return res.status(200).json({
            property_data: findProperty,
            message: "get a property",
      });
  }
  return res.status(404).json({
        message: "Propery not found",
  });
}
//******************** */
    
}

export default propertyController;