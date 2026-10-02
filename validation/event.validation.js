const Joi = require("joi");

const validateEvent = (event) => {
    const Schema = Joi.object({
        name: Joi.string().min(2).required(),
        photo: Joi.string().allow(null, ""),
        start_date: Joi.date().allow(null),
        start_time: Joi.string().allow(null, ""),
        finish_date: Joi.date().allow(null),
        finish_time: Joi.string().allow(null, ""),
        info: Joi.string().allow(null, ""),
        event_type_id: Joi.number(),
        human_category_id: Joi.number(),
        venue_id: Joi.number(),
        lang_id: Joi.number(),
        release_date: Joi.date().allow(null)
    });
    return Schema.validate(event);
};

module.exports = { validateEvent };
