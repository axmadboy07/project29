const Joi = require("joi");

const validateVenueTypes = (venueTypes) => {
    const Schema = Joi.object({
        venue_id: Joi.number().required(),
        type_id: Joi.number().required()
    });
    return Schema.validate(venueTypes);
};

module.exports = { validateVenueTypes };
