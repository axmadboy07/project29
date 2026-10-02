const { Venue, Region, District, Venue_photo } = require("../models");
const { validateVenue } = require("../validation/venue.validation");
const { Op } = require("sequelize");

exports.createVenue = async (req, res) => {
  const { error } = validateVenue(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const venue = await Venue.create(req.body);
    res.status(201).send(venue);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getVenues = async (req, res) => {
  try {
    const venues = await Venue.findAll({});
    res.status(200).send(venues);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getVenueById = async (req, res) => {
  try {
    const venue = await Venue.findByPk(req.params.id, {
      include: [
        { model: Region, as: "region" },
        { model: District, as: "district" },
        { model: Venue_photo, as: "photos" },
      ],
    });
    if (!venue) return res.status(404).send("Venue not found");
    res.status(200).send(venue);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateVenue = async (req, res) => {
  const { error } = validateVenue(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const venue = await Venue.findByPk(req.params.id);
    if (!venue) return res.status(404).send("Venue not found");

    await venue.update(req.body);
    res.status(200).send(venue);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteVenue = async (req, res) => {
  try {
    const venue = await Venue.findByPk(req.params.id);
    if (!venue) return res.status(404).send("Venue not found");

    const venueData = venue.toJSON();
    await venue.destroy();
    res.status(200).send(venueData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.searchVenues = async (req, res) => {
  try {
    console.log("Query received:", req.query.query);
    const { query } = req.query;
    if (!query) {
      return res.status(400).send("Query parameter is required");
    }

    const venues = await Venue.findAll({
      where: {
        [Op.or]: [
          { name: { [Op.iLike]: `%${query}%` } },
          { address: { [Op.iLike]: `%${query}%` } },
          { location: { [Op.iLike]: `%${query}%` } },
          { site: { [Op.iLike]: `%${query}%` } },
          { phone: { [Op.iLike]: `%${query}%` } }
        ],
      },
    });
    res.status(200).send(venues);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
