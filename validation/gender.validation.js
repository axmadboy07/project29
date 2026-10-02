const Joi = require("joi");

const validateGender = (gender) => {
    const Schema = Joi.object({
        name: Joi.string().min(2).required()
    });
    return Schema.validate(gender);
};

module.exports = { validateGender };
