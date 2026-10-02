const Joi = require("joi");

const validateSector = (sector) => {
    const Schema = Joi.object({
        sector_name: Joi.string().min(2).required()
    });
    return Schema.validate(sector);
};

module.exports = { validateSector };
