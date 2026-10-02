const { Types } = require("../models");
const { validateTypes } = require("../validation/types.validation");
const { Op } = require("sequelize");

exports.createTypes = async (req, res) => {
  const { error } = validateTypes(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const typeItem = await Types.create(req.body);
    res.status(201).send(typeItem);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getTypes = async (req, res) => {
  try {
    const typeItems = await Types.findAll({});
    res.status(200).send(typeItems);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getTypesById = async (req, res) => {
  try {
    const typeItem = await Types.findByPk(req.params.id);
    if (!typeItem) return res.status(404).send("Types not found");
    res.status(200).send(typeItem);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateTypes = async (req, res) => {
  const { error } = validateTypes(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const typeItem = await Types.findByPk(req.params.id);
    if (!typeItem) return res.status(404).send("Types not found");

    await typeItem.update(req.body);
    res.status(200).send(typeItem);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteTypes = async (req, res) => {
  try {
    const typeItem = await Types.findByPk(req.params.id);
    if (!typeItem) return res.status(404).send("Types not found");

    const typeItemData = typeItem.toJSON();
    await typeItem.destroy();
    res.status(200).send(typeItemData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.searchTypes = async (req, res) => {
  try {
    console.log("Query received:", req.query.query);
    const { query } = req.query;
    if (!query) {
      return res.status(400).send("Query parameter is required");
    }

    const typeItems = await Types.findAll({
      where: {
        [Op.or]: [
          { name: { [Op.iLike]: `%${query}%` } }
        ],
      },
    });
    res.status(200).send(typeItems);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
