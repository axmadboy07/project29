const Joi = require("joi");

const validatePaymentMethod = (paymentMethod) => {
    const Schema = Joi.object({
        name: Joi.string().min(2).required()
    });
    return Schema.validate(paymentMethod);
};

module.exports = { validatePaymentMethod };
