import property_data from '../model/property_data.js';
import moment from 'moment';
import giveResponse from '../helpers/response';
import {validate} from "../middleware/validateProperty";

class propertyController {

    //*********all property************/
    static getAllProperties(req, res) {
      giveResponse.responses(res, 200, property_data,false); 
    }

    //*********single property*********** */

static getSingleProperty(req, res) {
  const findProperty = property_data.find(data =>data.id === parseInt(req.params.id, 10));
  if (findProperty) {
    giveResponse.responses(res, 200, findProperty,false); 
  }
  else{
    giveResponse.responses(res, 404, `property doesn't exist`,true)
  }
 
}

//*********add properties*********** */

static addProperty(req, res) {

                   //joi
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);
                   //joi end

  const Id = parseInt(property_data.length) + 1;
  const { owner,status,price,state,city,address,type} = req.body;
  const newproperty = {
    id: Id,
    owner,
    status,
    price,
    state,
    city,
    address,
    type,
    created_on: moment().format()
  };
  property_data.push(newproperty);
  giveResponse.responses(res, 201, newproperty,false);

}

//*********update property*********** */

static updateProperty(req, res) {

  const { error } = validate(req.body); 
    if (error) return res.status(400).send(error.details[0].message);

  const { id } = req.params;
  const property = property_data.find(updateProperty => updateProperty.id == id);
  if (property) {
    const datas = Object.keys(req.body);
    datas.forEach((data) => {
      property[data] = req.body[data];
    });
    giveResponse.responses(res,201,property, false);
  }
  else{
    giveResponse.responses(res, 404, 'No property found', true);
  }
}

//*********delete property*********** */

static deleteProperty(req, res) {
     const { id } = req.params;
    const property = property_data.findIndex(deleteProperty => deleteProperty.id === parseInt(id, 10));
    if (property !== -1) {
    property_data.splice(property, 1);

    giveResponse.responses(res, 200, 'Property deleted', false);
    }
    giveResponse.responses(res, 404, 'No property found',true);
  }

// Get property by type
static PropertiesByType (req, res){
  const { type } = req.params;
   const propertType=property_data.filter(property => property.type === type);
  if (propertType.length > 0) {
  giveResponse.responses(res, 200,propertType,false);
  }
  giveResponse.responses(res, 404, 'That property type not found',true);
 }

 // Mark property as sold
static propertyMarkSold(req, res){
  const { id } = req.params;
  const property = property_data.find(propert => propert.id === parseInt(id, 10));
  if (property) {
    property.status = 'sold';
    giveResponse.responses(res, 200,property,false);
  }
  giveResponse.responses(res, 404, 'That property not found',true);
}



}
export default propertyController;