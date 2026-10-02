const Joi = require("joi");

const validateCart = (cart) => {
    const Schema = Joi.object({
        customer_id: Joi.number().required(),
        createdAt: Joi.date(),
        finishedAt: Joi.date().allow(null),
        status_id: Joi.number()
    });
    return Schema.validate(cart);
};

module.exports = { validateCart };
