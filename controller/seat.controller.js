const { Seat, Sector, Venue, Seat_type } = require("../models");
const { validateSeat } = require("../validation/seat.validation");
const { Op } = require("sequelize");

exports.createSeat = async (req, res) => {
  const { error } = validateSeat(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const seat = await Seat.create(req.body);
    res.status(201).send(seat);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getSeats = async (req, res) => {
  try {
    const seats = await Seat.findAll({});
    res.status(200).send(seats);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getSeatById = async (req, res) => {
  try {
    const seat = await Seat.findByPk(req.params.id, {
      include: [
        { model: Sector, as: "sector" },
        { model: Venue, as: "venue" },
        { model: Seat_type, as: "seat_type" },
      ],
    });
    if (!seat) return res.status(404).send("Seat not found");
    res.status(200).send(seat);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateSeat = async (req, res) => {
  const { error } = validateSeat(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const seat = await Seat.findByPk(req.params.id);
    if (!seat) return res.status(404).send("Seat not found");

    await seat.update(req.body);
    res.status(200).send(seat);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteSeat = async (req, res) => {
  try {
    const seat = await Seat.findByPk(req.params.id);
    if (!seat) return res.status(404).send("Seat not found");

    const seatData = seat.toJSON();
    await seat.destroy();
    res.status(200).send(seatData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.searchSeats = async (req, res) => {
  try {
    console.log("Query received:", req.query.query);
    const { query } = req.query;
    if (!query) {
      return res.status(400).send("Query parameter is required");
    }

    const seats = await Seat.findAll({
      where: {
        [Op.or]: [
          { location_in_schema: { [Op.iLike]: `%${query}%` } }
        ],
      },
    });
    res.status(200).send(seats);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
