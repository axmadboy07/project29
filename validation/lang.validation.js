const Joi = require("joi");

const validateLang = (lang) => {
    const Schema = Joi.object({
        name: Joi.string().min(2).required()
    });
    return Schema.validate(lang);
};

module.exports = { validateLang };
