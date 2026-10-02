const Joi = require("joi");

const validateCartItem = (cartItem) => {
    const Schema = Joi.object({
        ticket_id: Joi.number().required(),
        cart_id: Joi.number().required()
    });
    return Schema.validate(cartItem);
};

module.exports = { validateCartItem };
