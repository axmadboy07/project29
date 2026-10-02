const Joi = require("joi");

const validateSeatType = (seatType) => {
    const Schema = Joi.object({
        name: Joi.string().min(2).required()
    });
    return Schema.validate(seatType);
};

module.exports = { validateSeatType };
