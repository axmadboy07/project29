const Joi = require("joi");

const validateDistrict = (district) => {
    const Schema = Joi.object({
        name: Joi.string().min(2).required(),
        region_id: Joi.number().required()
    });
    return Schema.validate(district);
};

module.exports = { validateDistrict };
