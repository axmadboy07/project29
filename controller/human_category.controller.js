const { Human_category, Gender } = require("../models");
const { validateHumanCategory } = require("../validation/human_category.validation");
const { Op } = require("sequelize");

exports.createHumanCategory = async (req, res) => {
  const { error } = validateHumanCategory(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const humanCategory = await Human_category.create(req.body);
    res.status(201).send(humanCategory);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getHumanCategories = async (req, res) => {
  try {
    const humanCategories = await Human_category.findAll({});
    res.status(200).send(humanCategories);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getHumanCategoryById = async (req, res) => {
  try {
    const humanCategory = await Human_category.findByPk(req.params.id, {
      include: [
        { model: Gender, as: "gender" },
      ],
    });
    if (!humanCategory) return res.status(404).send("HumanCategory not found");
    res.status(200).send(humanCategory);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateHumanCategory = async (req, res) => {
  const { error } = validateHumanCategory(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const humanCategory = await Human_category.findByPk(req.params.id);
    if (!humanCategory) return res.status(404).send("HumanCategory not found");

    await humanCategory.update(req.body);
    res.status(200).send(humanCategory);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteHumanCategory = async (req, res) => {
  try {
    const humanCategory = await Human_category.findByPk(req.params.id);
    if (!humanCategory) return res.status(404).send("HumanCategory not found");

    const humanCategoryData = humanCategory.toJSON();
    await humanCategory.destroy();
    res.status(200).send(humanCategoryData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.searchHumanCategories = async (req, res) => {
  try {
    console.log("Query received:", req.query.query);
    const { query } = req.query;
    if (!query) {
      return res.status(400).send("Query parameter is required");
    }

    const humanCategories = await Human_category.findAll({
      where: {
        [Op.or]: [
          { name: { [Op.iLike]: `%${query}%` } },
          { start_age: { [Op.iLike]: `%${query}%` } },
          { finish_age: { [Op.iLike]: `%${query}%` } }
        ],
      },
    });
    res.status(200).send(humanCategories);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
