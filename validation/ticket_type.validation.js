const Joi = require("joi");

const validateTicketType = (ticketType) => {
    const Schema = Joi.object({
        ticket_type: Joi.string().min(2).required()
    });
    return Schema.validate(ticketType);
};

module.exports = { validateTicketType };
