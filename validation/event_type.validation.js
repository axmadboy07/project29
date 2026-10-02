const Joi = require("joi");

const validateEventType = (eventType) => {
    const Schema = Joi.object({
        name: Joi.string().min(2).required(),
        parent_event_type_id: Joi.number().allow(null)
    });
    return Schema.validate(eventType);
};

module.exports = { validateEventType };
