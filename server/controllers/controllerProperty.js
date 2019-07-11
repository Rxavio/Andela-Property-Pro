import property_data from '../model/property_data.js';
import moment from "moment";

class propertyController {

    //*********all property************/
    static getAllProperties(req, res) {
          return res.status(200).json({
            status: "success",
            data: property_data,
          });
    }

    //*********single property*********** */
 
static getSingleProperty(req, res) {
  const findProperty = property_data.find(property_data => property_data.id === parseInt(req.params.id, 10));
  if (findProperty) {
      return res.status(200).json({
           status: "success",
            data: findProperty,
            
      });
  }
  return res.status(404).json({
        message: "Propery not found",
  });
}

//*********add properties*********** */
static addProperty(req, res) {
  const Id = parseInt(property_data.length) + 1;
  const { owner,status,price,state,city,address,type,created_on,body } = req.body;
  const newproperty = {
    id: Id,
    owner,
    status,
    price,
    state,
    city,
    address,
    type,
    body,
    created_on: moment().format()
  };
  property_data.push(newproperty);
  return res.status(200).json({
    status: "success",
    data:{
      Id,
      owner,
      status,
      price,
      state,
      city,
      address,
      type,
      created_on
    }
  });
}
   
}



export default propertyController;