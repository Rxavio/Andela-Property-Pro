import Joi from 'joi';

function validate(req) {
  const schema = {

    owner:Joi.number().required().min(0),
    status:Joi.string().required().min(4).max(255),
    price: Joi.number().required().min(0),
    state: Joi.string().required().min(4).max(255),
    city: Joi.string().required().min(4).max(255),
    address: Joi.string().required().min(4).max(255),
    type: Joi.string().required().min(4).max(255),
    //image_url: Joi.string().required(),
    created_on: Joi.string().required(),
  };

  return Joi.validate(req,schema);
}

export { validate };

