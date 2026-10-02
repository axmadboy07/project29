const Joi = require("joi");

const validateVenue = (venue) => {
    const Schema = Joi.object({
        name: Joi.string().min(2).required(),
        address: Joi.string().allow(null, ""),
        location: Joi.string().allow(null, ""),
        site: Joi.string().allow(null, ""),
        phone: Joi.string().allow(null, ""),
        schema: Joi.string().allow(null, ""),
        region_id: Joi.number(),
        district_id: Joi.number()
    });
    return Schema.validate(venue);
};

module.exports = { validateVenue };
