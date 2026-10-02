const { Ticket_status } = require("../models");
const { validateTicketStatus } = require("../validation/ticket_status.validation");
const { Op } = require("sequelize");

exports.createTicketStatus = async (req, res) => {
  const { error } = validateTicketStatus(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const ticketStatus = await Ticket_status.create(req.body);
    res.status(201).send(ticketStatus);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getTicketStatuses = async (req, res) => {
  try {
    const ticketStatuses = await Ticket_status.findAll({});
    res.status(200).send(ticketStatuses);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getTicketStatusById = async (req, res) => {
  try {
    const ticketStatus = await Ticket_status.findByPk(req.params.id);
    if (!ticketStatus) return res.status(404).send("TicketStatus not found");
    res.status(200).send(ticketStatus);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateTicketStatus = async (req, res) => {
  const { error } = validateTicketStatus(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const ticketStatus = await Ticket_status.findByPk(req.params.id);
    if (!ticketStatus) return res.status(404).send("TicketStatus not found");

    await ticketStatus.update(req.body);
    res.status(200).send(ticketStatus);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteTicketStatus = async (req, res) => {
  try {
    const ticketStatus = await Ticket_status.findByPk(req.params.id);
    if (!ticketStatus) return res.status(404).send("TicketStatus not found");

    const ticketStatusData = ticketStatus.toJSON();
    await ticketStatus.destroy();
    res.status(200).send(ticketStatusData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.searchTicketStatuses = async (req, res) => {
  try {
    console.log("Query received:", req.query.query);
    const { query } = req.query;
    if (!query) {
      return res.status(400).send("Query parameter is required");
    }

    const ticketStatuses = await Ticket_status.findAll({
      where: {
        [Op.or]: [
          { name: { [Op.iLike]: `%${query}%` } }
        ],
      },
    });
    res.status(200).send(ticketStatuses);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
