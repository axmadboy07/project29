const Joi = require("joi");

const validateCustomer = (customer) => {
    const Schema = Joi.object({
        first_name: Joi.string().min(2).required(),
        last_name: Joi.string().allow(null, ""),
        phone: Joi.string().allow(null, ""),
        hashed_password: Joi.string().min(6).required(),
        email: Joi.string().email().required(),
        birth_date: Joi.date().allow(null),
        gender_id: Joi.number(),
        lang_id: Joi.number(),
        hashed_refresh_token: Joi.string().allow(null, "")
    });
    return Schema.validate(customer);
};

module.exports = { validateCustomer };
