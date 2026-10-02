const router = require("express").Router();
const controller = require("../controller/cart.controller");

/**
 * @swagger
 * tags:
 *   name: Carts
 *   description: Carts management
 */

/**
 * @swagger
 * /carts:
 *   post:
 *     summary: Create a cart
 *     tags: [Carts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - customer_id
 *             properties:
 *               customer_id:
 *                 type: string
 *     responses:
 *       201:
 *         description: cart created successfully
 *       400:
 *         description: Invalid data
 */
router.post("/carts", controller.createCart);

/**
 * @swagger
 * /carts:
 *   get:
 *     summary: Get all carts
 *     tags: [Carts]
 *     responses:
 *       200:
 *         description: List of carts
 */
router.get("/carts", controller.getCarts);

/**
 * @swagger
 * /carts/search:
 *   get:
 *     summary: Search carts
 *     tags: [Carts]
 *     parameters:
 *       - in: query
 *         name: query
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Matching carts
 *       400:
 *         description: Query parameter is required
 */
router.get("/carts/search", controller.searchCarts);

/**
 * @swagger
 * /carts/{id}:
 *   get:
 *     summary: Get a cart by ID
 *     tags: [Carts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: cart details
 *       404:
 *         description: cart not found
 */
router.get("/carts/:id", controller.getCartById);

/**
 * @swagger
 * /carts/{id}:
 *   put:
 *     summary: Update a cart
 *     tags: [Carts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               customer_id:
 *                 type: string
 *     responses:
 *       200:
 *         description: cart updated successfully
 *       404:
 *         description: cart not found
 */
router.put("/carts/:id", controller.updateCart);

/**
 * @swagger
 * /carts/{id}:
 *   delete:
 *     summary: Delete a cart
 *     tags: [Carts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: cart deleted successfully
 *       404:
 *         description: cart not found
 */
router.delete("/carts/:id", controller.deleteCart);

module.exports = router;
