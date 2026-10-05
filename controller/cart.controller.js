const { Cart, Customer, Cart_item, Ticket_status } = require("../models");
const { validateCart } = require("../validation/cart.validation");
const { Op } = require("sequelize");

exports.createCart = async (req, res) => {
  const { error } = validateCart(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const cart = await Cart.create(req.body);
    res.status(201).send(cart);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getCarts = async (req, res) => {
  try {
    const carts = await Cart.findAll({});
    res.status(200).send(carts);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getCartById = async (req, res) => {
  try {
    const cart = await Cart.findByPk(req.params.id, {
      include: [
        { model: Customer, as: "customer" },
        { model: Cart_item, as: "cart_items" },
        { model: Ticket_status, as: "status" },
      ],
    });
    if (!cart) return res.status(404).send("Cart not found");
    res.status(200).send(cart);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateCart = async (req, res) => {
  const { error } = validateCart(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const cart = await Cart.findByPk(req.params.id);
    if (!cart) return res.status(404).send("Cart not found");

    await cart.update(req.body);
    res.status(200).send(cart);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteCart = async (req, res) => {
  try {
    const cart = await Cart.findByPk(req.params.id);
    if (!cart) return res.status(404).send("Cart not found");

    const cartData = cart.toJSON();
    await cart.destroy();
    res.status(200).send(cartData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.searchCarts = async (req, res) => {
  try {
    console.log("Query received:", req.query.query);
    const { query } = req.query;
    if (!query) {
      return res.status(400).send("Query parameter is required");
    }

    const carts = await Cart.findAll({
      where: {
        id: query,
      },
    });
    res.status(200).send(carts);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
