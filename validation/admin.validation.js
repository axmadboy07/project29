const Joi = require("joi");

const validateAdmin = (admin) => {
    const Schema = Joi.object({
        name: Joi.string().min(3).required(),
        login: Joi.string().min(3).required(),
        hashed_password: Joi.string().min(6).required(),
        is_active: Joi.boolean(),
        is_creator: Joi.boolean(),
        hashed_refresh_token: Joi.string().allow(null, "")
    });
    return Schema.validate(admin);
};

module.exports = { validateAdmin };
