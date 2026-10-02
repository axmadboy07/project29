const { Event_type } = require("../models");
const { validateEventType } = require("../validation/event_type.validation");
const { Op } = require("sequelize");

exports.createEventType = async (req, res) => {
  const { error } = validateEventType(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const eventType = await Event_type.create(req.body);
    res.status(201).send(eventType);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getEventTypes = async (req, res) => {
  try {
    const eventTypes = await Event_type.findAll({});
    res.status(200).send(eventTypes);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getEventTypeById = async (req, res) => {
  try {
    const eventType = await Event_type.findByPk(req.params.id, {
      include: [
        { model: Event_type, as: "parent" },
      ],
    });
    if (!eventType) return res.status(404).send("EventType not found");
    res.status(200).send(eventType);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateEventType = async (req, res) => {
  const { error } = validateEventType(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const eventType = await Event_type.findByPk(req.params.id);
    if (!eventType) return res.status(404).send("EventType not found");

    await eventType.update(req.body);
    res.status(200).send(eventType);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteEventType = async (req, res) => {
  try {
    const eventType = await Event_type.findByPk(req.params.id);
    if (!eventType) return res.status(404).send("EventType not found");

    const eventTypeData = eventType.toJSON();
    await eventType.destroy();
    res.status(200).send(eventTypeData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.searchEventTypes = async (req, res) => {
  try {
    console.log("Query received:", req.query.query);
    const { query } = req.query;
    if (!query) {
      return res.status(400).send("Query parameter is required");
    }

    const eventTypes = await Event_type.findAll({
      where: {
        [Op.or]: [
          { name: { [Op.iLike]: `%${query}%` } }
        ],
      },
    });
    res.status(200).send(eventTypes);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
