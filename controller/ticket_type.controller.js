const { Ticket_type } = require("../models");
const { validateTicketType } = require("../validation/ticket_type.validation");
const { Op } = require("sequelize");

exports.createTicketType = async (req, res) => {
  const { error } = validateTicketType(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const ticketType = await Ticket_type.create(req.body);
    res.status(201).send(ticketType);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getTicketTypes = async (req, res) => {
  try {
    const ticketTypes = await Ticket_type.findAll({});
    res.status(200).send(ticketTypes);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getTicketTypeById = async (req, res) => {
  try {
    const ticketType = await Ticket_type.findByPk(req.params.id);
    if (!ticketType) return res.status(404).send("TicketType not found");
    res.status(200).send(ticketType);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateTicketType = async (req, res) => {
  const { error } = validateTicketType(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const ticketType = await Ticket_type.findByPk(req.params.id);
    if (!ticketType) return res.status(404).send("TicketType not found");

    await ticketType.update(req.body);
    res.status(200).send(ticketType);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteTicketType = async (req, res) => {
  try {
    const ticketType = await Ticket_type.findByPk(req.params.id);
    if (!ticketType) return res.status(404).send("TicketType not found");

    const ticketTypeData = ticketType.toJSON();
    await ticketType.destroy();
    res.status(200).send(ticketTypeData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.searchTicketTypes = async (req, res) => {
  try {
    console.log("Query received:", req.query.query);
    const { query } = req.query;
    if (!query) {
      return res.status(400).send("Query parameter is required");
    }

    const ticketTypes = await Ticket_type.findAll({
      where: {
        [Op.or]: [
          { ticket_type: { [Op.iLike]: `%${query}%` } }
        ],
      },
    });
    res.status(200).send(ticketTypes);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
