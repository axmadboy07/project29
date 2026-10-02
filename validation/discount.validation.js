const Joi = require("joi");

const validateDiscount = (discount) => {
    const Schema = Joi.object({
        discount: Joi.string().required(),
        finish_date: Joi.date().allow(null)
    });
    return Schema.validate(discount);
};

module.exports = { validateDiscount };
