const { Customer, Gender, Lang, Customer_card, Customer_address } = require("../models");
const { validateCustomer } = require("../validation/customer.validation");
const { Op } = require("sequelize");

exports.createCustomer = async (req, res) => {
  const { error } = validateCustomer(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const customer = await Customer.create(req.body);
    res.status(201).send(customer);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getCustomers = async (req, res) => {
  try {
    const customers = await Customer.findAll({});
    res.status(200).send(customers);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getCustomerById = async (req, res) => {
  try {
    const customer = await Customer.findByPk(req.params.id, {
      include: [
        { model: Gender, as: "gender" },
        { model: Lang, as: "language" },
        { model: Customer_card, as: "customer_cards" },
        { model: Customer_address, as: "customer_addresses" },
      ],
    });
    if (!customer) return res.status(404).send("Customer not found");
    res.status(200).send(customer);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateCustomer = async (req, res) => {
  const { error } = validateCustomer(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const customer = await Customer.findByPk(req.params.id);
    if (!customer) return res.status(404).send("Customer not found");

    await customer.update(req.body);
    res.status(200).send(customer);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteCustomer = async (req, res) => {
  try {
    const customer = await Customer.findByPk(req.params.id);
    if (!customer) return res.status(404).send("Customer not found");

    const customerData = customer.toJSON();
    await customer.destroy();
    res.status(200).send(customerData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.searchCustomers = async (req, res) => {
  try {
    console.log("Query received:", req.query.query);
    const { query } = req.query;
    if (!query) {
      return res.status(400).send("Query parameter is required");
    }

    const customers = await Customer.findAll({
      where: {
        [Op.or]: [
          { first_name: { [Op.iLike]: `%${query}%` } },
          { last_name: { [Op.iLike]: `%${query}%` } },
          { email: { [Op.iLike]: `%${query}%` } },
          { phone: { [Op.iLike]: `%${query}%` } }
        ],
      },
    });
    res.status(200).send(customers);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
