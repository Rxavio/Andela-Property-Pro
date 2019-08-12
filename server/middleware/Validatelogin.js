import Joi from 'joi';

function validate(req) {
  const schema = {
    email: Joi.string().email().required(),
    password: Joi.string().required().min(6).max(50),
   
  };

  return Joi.validate(req, schema);
}

export {validate};

