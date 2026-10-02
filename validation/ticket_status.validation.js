const Joi = require("joi");

const validateTicketStatus = (ticketStatus) => {
    const Schema = Joi.object({
        name: Joi.string().min(2).required()
    });
    return Schema.validate(ticketStatus);
};

module.exports = { validateTicketStatus };
