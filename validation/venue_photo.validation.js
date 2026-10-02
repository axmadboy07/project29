const Joi = require("joi");

const validateVenuePhoto = (venuePhoto) => {
    const Schema = Joi.object({
        venue_id: Joi.number().required(),
        url: Joi.string().required()
    });
    return Schema.validate(venuePhoto);
};

module.exports = { validateVenuePhoto };
