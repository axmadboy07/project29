const Joi = require("joi");

const validateCustomerCard = (customerCard) => {
    const Schema = Joi.object({
        customer_id: Joi.number().required(),
        name: Joi.string().min(2).required(),
        phone: Joi.string().allow(null, ""),
        number: Joi.string().min(12).max(19).required(),
        year: Joi.string().max(4).allow(null, ""),
        month: Joi.string().max(2).allow(null, ""),
        is_active: Joi.boolean(),
        is_main: Joi.boolean()
    });
    return Schema.validate(customerCard);
};

module.exports = { validateCustomerCard };
