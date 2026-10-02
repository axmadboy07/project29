const Joi = require("joi");

const validateFlat = (flat) => {
    const Schema = Joi.object({
        etaj: Joi.number().allow(null),
        condition: Joi.string().allow(null, "")
    });
    return Schema.validate(flat);
};

module.exports = { validateFlat };
