const Joi = require("joi");

const validateTicket = (ticket) => {
    const Schema = Joi.object({
        event_id: Joi.number().required(),
        seat_id: Joi.number().allow(null),
        price: Joi.number().precision(2).required(),
        service_fee: Joi.number().precision(2),
        status_id: Joi.number(),
        ticket_type_id: Joi.number()
    });
    return Schema.validate(ticket);
};

module.exports = { validateTicket };
