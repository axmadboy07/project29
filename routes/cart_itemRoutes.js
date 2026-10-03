const router = require("express").Router();
const controller = require("../controller/cart_item.controller");

/**
 * @swagger
 * tags:
 *   name: CartItems
 *   description: CartItems management
 */

/**
 * @swagger
 * /cart-items:
 *   post:
 *     summary: Create a cart item
 *     tags: [CartItems]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - ticket_id
 *               - cart_id
 *             properties:
 *               ticket_id:
 *                 type: integer
 *               cart_id:
 *                 type: integer

 *     responses:
 *       201:
 *         description: cart item created successfully
 *       400:
 *         description: Invalid data
 */
router.post("/cart-items", controller.createCartItem);

/**
 * @swagger
 * /cart-items:
 *   get:
 *     summary: Get all cartitems
 *     tags: [CartItems]
 *     responses:
 *       200:
 *         description: List of cartitems
 */
router.get("/cart-items", controller.getCartItems);

/**
 * @swagger
 * /cart-items/search:
 *   get:
 *     summary: Search cartitems
 *     tags: [CartItems]
 *     parameters:
 *       - in: query
 *         name: query
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Matching cartitems
 *       400:
 *         description: Query parameter is required
 */
router.get("/cart-items/search", controller.searchCartItems);

/**
 * @swagger
 * /cart-items/{id}:
 *   get:
 *     summary: Get a cart item by ID
 *     tags: [CartItems]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: cart item details
 *       404:
 *         description: cart item not found
 */
router.get("/cart-items/:id", controller.getCartItemById);

/**
 * @swagger
 * /cart-items/{id}:
 *   put:
 *     summary: Update a cart item
 *     tags: [CartItems]
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
 *               ticket_id:
 *                 type: integer
 *               cart_id:
 *                 type: integer

 *     responses:
 *       200:
 *         description: cart item updated successfully
 *       404:
 *         description: cart item not found
 */
router.put("/cart-items/:id", controller.updateCartItem);

/**
 * @swagger
 * /cart-items/{id}:
 *   delete:
 *     summary: Delete a cart item
 *     tags: [CartItems]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: cart item deleted successfully
 *       404:
 *         description: cart item not found
 */
router.delete("/cart-items/:id", controller.deleteCartItem);

module.exports = router;
