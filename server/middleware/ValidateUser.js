import Joi from 'joi';

function validate(req) {
  const schema = {
    email: Joi.string().email().required(),
    first_name: Joi.string().required().min(4).max(255),
    last_name: Joi.string().required().min(4).max(255),
    password: Joi.string().required().min(6).max(50),
    phoneNumber: Joi.string().required().min(10).max(25),
    address: Joi.string().required().min(4).max(255),
    is_admin: Joi.boolean(),
  };

  return Joi.validate(req, schema);
}

export {validate};

