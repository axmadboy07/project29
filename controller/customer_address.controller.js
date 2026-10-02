const { Customer_address, Customer, Region, District, Flat } = require("../models");
const { validateCustomerAddress } = require("../validation/customer_address.validation");
const { Op } = require("sequelize");

exports.createCustomerAddress = async (req, res) => {
  const { error } = validateCustomerAddress(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const customerAddress = await Customer_address.create(req.body);
    res.status(201).send(customerAddress);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getCustomerAddresses = async (req, res) => {
  try {
    const customerAddresses = await Customer_address.findAll({});
    res.status(200).send(customerAddresses);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getCustomerAddressById = async (req, res) => {
  try {
    const customerAddress = await Customer_address.findByPk(req.params.id, {
      include: [
        { model: Customer, as: "customer" },
        { model: Region, as: "region" },
        { model: District, as: "district" },
        { model: Flat, as: "flat" },
      ],
    });
    if (!customerAddress) return res.status(404).send("CustomerAddress not found");
    res.status(200).send(customerAddress);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateCustomerAddress = async (req, res) => {
  const { error } = validateCustomerAddress(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const customerAddress = await Customer_address.findByPk(req.params.id);
    if (!customerAddress) return res.status(404).send("CustomerAddress not found");

    await customerAddress.update(req.body);
    res.status(200).send(customerAddress);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteCustomerAddress = async (req, res) => {
  try {
    const customerAddress = await Customer_address.findByPk(req.params.id);
    if (!customerAddress) return res.status(404).send("CustomerAddress not found");

    const customerAddressData = customerAddress.toJSON();
    await customerAddress.destroy();
    res.status(200).send(customerAddressData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.searchCustomerAddresses = async (req, res) => {
  try {
    console.log("Query received:", req.query.query);
    const { query } = req.query;
    if (!query) {
      return res.status(400).send("Query parameter is required");
    }

    const customerAddresses = await Customer_address.findAll({
      where: {
        [Op.or]: [
          { name: { [Op.iLike]: `%${query}%` } },
          { street: { [Op.iLike]: `%${query}%` } },
          { house: { [Op.iLike]: `%${query}%` } },
          { location: { [Op.iLike]: `%${query}%` } }
        ],
      },
    });
    res.status(200).send(customerAddresses);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
