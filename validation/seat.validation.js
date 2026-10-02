const Joi = require("joi");

const validateSeat = (seat) => {
    const Schema = Joi.object({
        sector_id: Joi.number(),
        row_number: Joi.number(),
        number: Joi.number(),
        venue_id: Joi.number(),
        seat_type_id: Joi.number(),
        location_in_schema: Joi.string().allow(null, "")
    });
    return Schema.validate(seat);
};

module.exports = { validateSeat };
