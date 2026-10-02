const Joi = require("joi");

const validateBooking = (booking) => {
    const Schema = Joi.object({
        cart_id: Joi.number().required(),
        createdAt: Joi.date(),
        finished: Joi.date().allow(null),
        payment_method_id: Joi.number(),
        delivery_method_id: Joi.number(),
        discount_id: Joi.number(),
        status_id: Joi.number()
    });
    return Schema.validate(booking);
};

module.exports = { validateBooking };
