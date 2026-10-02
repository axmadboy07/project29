const Joi = require("joi");

const validateCustomerAddress = (customerAddress) => {
    const Schema = Joi.object({
        customer_id: Joi.number().required(),
        name: Joi.string().allow(null, ""),
        region_id: Joi.number(),
        district_id: Joi.number(),
        street: Joi.string().allow(null, ""),
        house: Joi.string().allow(null, ""),
        flat_id: Joi.number().allow(null),
        location: Joi.string().allow(null, ""),
        post_index: Joi.string().allow(null, ""),
        info: Joi.string().allow(null, "")
    });
    return Schema.validate(customerAddress);
};

module.exports = { validateCustomerAddress };
