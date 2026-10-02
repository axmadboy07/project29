const Joi = require("joi");

const validateHumanCategory = (humanCategory) => {
    const Schema = Joi.object({
        name: Joi.string().min(2).required(),
        start_age: Joi.string().allow(null, ""),
        finish_age: Joi.string().allow(null, ""),
        gender_id: Joi.number().allow(null)
    });
    return Schema.validate(humanCategory);
};

module.exports = { validateHumanCategory };
