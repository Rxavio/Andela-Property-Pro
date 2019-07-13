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

//*********update property*********** */
static updateProperty(req, res) {
  const { id } = req.params;
  const property = property_data.find(updateProperty => updateProperty.id == id);
  if (property) {
    (property.owner = req.body.owner),  (property.status = req.body.status),  (property.price = req.body.price), 
    (property.state = req.body.state),  (property.city = req.body.city),  (property.address = req.body.address),
    (property.type = req.body.type),  (property.created_on = req.body.created_on),(property.body = req.body.body);
    return res.status(201).json({
      status: "success",
      data: property_data,
    });
  } else {
    res.status(400).json({
      error: "property can not be updated"
    });
  }
}

//*********delete property*********** */
static deleteProperty(req, res) {
   const property =property_data.find(c=>c.id===parseInt(req.params.id));
  
   if(!property) res.status(404).send('The given property Id not found');
  
   const index=property_data.indexOf(property);
   property_data.splice(index, 1);

   return res.status(201).json({
    status: "success",
    data: {
      message:"Successfully Deleted"
    },
  });
  
}

//*********mark property as sold*********** */
static viewByType(req, res) {
  const result = property_data.filter(item => item.type === req.query.type);
  if (result.length > 0) {
    return response(res, 200, result);
  }
  return response(res, 404, 'Type does not exist', true);
}








}


export default propertyController;