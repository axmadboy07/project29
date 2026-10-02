const Joi = require("joi");

const validateRegion = (region) => {
    const Schema = Joi.object({
        name: Joi.string().min(2).required()
    });
    return Schema.validate(region);
};

module.exports = { validateRegion };
