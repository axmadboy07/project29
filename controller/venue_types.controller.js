const { Venue_types, Venue, Types } = require("../models");
const { validateVenueTypes } = require("../validation/venue_types.validation");
const { Op } = require("sequelize");

exports.createVenueTypes = async (req, res) => {
  const { error } = validateVenueTypes(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const venueType = await Venue_types.create(req.body);
    res.status(201).send(venueType);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getVenueTypes = async (req, res) => {
  try {
    const venueTypes = await Venue_types.findAll({});
    res.status(200).send(venueTypes);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getVenueTypesById = async (req, res) => {
  try {
    const venueType = await Venue_types.findByPk(req.params.id, {
      include: [
        { model: Venue, as: "venue" },
        { model: Types, as: "type" },
      ],
    });
    if (!venueType) return res.status(404).send("VenueTypes not found");
    res.status(200).send(venueType);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateVenueTypes = async (req, res) => {
  const { error } = validateVenueTypes(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const venueType = await Venue_types.findByPk(req.params.id);
    if (!venueType) return res.status(404).send("VenueTypes not found");

    await venueType.update(req.body);
    res.status(200).send(venueType);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteVenueTypes = async (req, res) => {
  try {
    const venueType = await Venue_types.findByPk(req.params.id);
    if (!venueType) return res.status(404).send("VenueTypes not found");

    const venueTypeData = venueType.toJSON();
    await venueType.destroy();
    res.status(200).send(venueTypeData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.searchVenueTypes = async (req, res) => {
  try {
    console.log("Query received:", req.query.query);
    const { query } = req.query;
    if (!query) {
      return res.status(400).send("Query parameter is required");
    }

    const venueTypes = await Venue_types.findAll({
      where: {
        id: query,
      },
    });
    res.status(200).send(venueTypes);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
