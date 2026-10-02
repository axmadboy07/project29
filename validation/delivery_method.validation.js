const Joi = require("joi");

const validateDeliveryMethod = (deliveryMethod) => {
    const Schema = Joi.object({
        name: Joi.string().min(2).required()
    });
    return Schema.validate(deliveryMethod);
};

module.exports = { validateDeliveryMethod };
