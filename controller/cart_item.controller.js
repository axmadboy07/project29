const { Cart_item, Cart, Ticket } = require("../models");
const { validateCartItem } = require("../validation/cart_item.validation");
const { Op } = require("sequelize");

exports.createCartItem = async (req, res) => {
  const { error } = validateCartItem(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const cartItem = await Cart_item.create(req.body);
    res.status(201).send(cartItem);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getCartItems = async (req, res) => {
  try {
    const cartItems = await Cart_item.findAll({});
    res.status(200).send(cartItems);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getCartItemById = async (req, res) => {
  try {
    const cartItem = await Cart_item.findByPk(req.params.id, {
      include: [
        { model: Cart, as: "cart" },
        { model: Ticket, as: "ticket" },
      ],
    });
    if (!cartItem) return res.status(404).send("CartItem not found");
    res.status(200).send(cartItem);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateCartItem = async (req, res) => {
  const { error } = validateCartItem(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const cartItem = await Cart_item.findByPk(req.params.id);
    if (!cartItem) return res.status(404).send("CartItem not found");

    await cartItem.update(req.body);
    res.status(200).send(cartItem);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteCartItem = async (req, res) => {
  try {
    const cartItem = await Cart_item.findByPk(req.params.id);
    if (!cartItem) return res.status(404).send("CartItem not found");

    const cartItemData = cartItem.toJSON();
    await cartItem.destroy();
    res.status(200).send(cartItemData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.searchCartItems = async (req, res) => {
  try {
    console.log("Query received:", req.query.query);
    const { query } = req.query;
    if (!query) {
      return res.status(400).send("Query parameter is required");
    }

    const cartItems = await Cart_item.findAll({
      where: {
        id: query,
      },
    });
    res.status(200).send(cartItems);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
