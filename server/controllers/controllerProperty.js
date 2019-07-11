import property_data from '../model/property_data.js';
import moment from "moment";

class propertyController {
    // Get all users
    static getAllProperties(req, res) {
          return res.status(200).json({
            property_data,
             message: "Get the properties",
          });
    }
    
}

export default propertyController;