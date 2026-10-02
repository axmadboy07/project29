const Joi = require("joi");

const validateTypes = (types) => {
    const Schema = Joi.object({
        name: Joi.string().min(2).required()
    });
    return Schema.validate(types);
};

module.exports = { validateTypes };
