const { Flat } = require("../models");
const { validateFlat } = require("../validation/flat.validation");
const { Op } = require("sequelize");

exports.createFlat = async (req, res) => {
  const { error } = validateFlat(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const flat = await Flat.create(req.body);
    res.status(201).send(flat);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getFlats = async (req, res) => {
  try {
    const flats = await Flat.findAll({});
    res.status(200).send(flats);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getFlatById = async (req, res) => {
  try {
    const flat = await Flat.findByPk(req.params.id);
    if (!flat) return res.status(404).send("Flat not found");
    res.status(200).send(flat);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateFlat = async (req, res) => {
  const { error } = validateFlat(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const flat = await Flat.findByPk(req.params.id);
    if (!flat) return res.status(404).send("Flat not found");

    await flat.update(req.body);
    res.status(200).send(flat);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteFlat = async (req, res) => {
  try {
    const flat = await Flat.findByPk(req.params.id);
    if (!flat) return res.status(404).send("Flat not found");

    const flatData = flat.toJSON();
    await flat.destroy();
    res.status(200).send(flatData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.searchFlats = async (req, res) => {
  try {
    console.log("Query received:", req.query.query);
    const { query } = req.query;
    if (!query) {
      return res.status(400).send("Query parameter is required");
    }

    const flats = await Flat.findAll({
      where: {
        [Op.or]: [
          { condition: { [Op.iLike]: `%${query}%` } }
        ],
      },
    });
    res.status(200).send(flats);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
