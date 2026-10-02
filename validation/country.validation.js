const Joi = require("joi");

const validateCountry = (country) => {
    const Schema = Joi.object({
        country_name: Joi.string().min(2).required()
    });
    return Schema.validate(country);
};

module.exports = { validateCountry };
