const router = require("express").Router();
const controller = require("../controller/customer_card.controller");

/**
 * @swagger
 * tags:
 *   name: CustomerCards
 *   description: CustomerCards management
 */

/**
 * @swagger
 * /customer-cards:
 *   post:
 *     summary: Create a customer card
 *     tags: [CustomerCards]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - customer_id
 *               - name
 *               - number
 *             properties:
 *               customer_id:
 *                 type: string
 *               name:
 *                 type: string
 *               number:
 *                 type: string
 *     responses:
 *       201:
 *         description: customer card created successfully
 *       400:
 *         description: Invalid data
 */
router.post("/customer-cards", controller.createCustomerCard);

/**
 * @swagger
 * /customer-cards:
 *   get:
 *     summary: Get all customercards
 *     tags: [CustomerCards]
 *     responses:
 *       200:
 *         description: List of customercards
 */
router.get("/customer-cards", controller.getCustomerCards);

/**
 * @swagger
 * /customer-cards/search:
 *   get:
 *     summary: Search customercards
 *     tags: [CustomerCards]
 *     parameters:
 *       - in: query
 *         name: query
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Matching customercards
 *       400:
 *         description: Query parameter is required
 */
router.get("/customer-cards/search", controller.searchCustomerCards);

/**
 * @swagger
 * /customer-cards/{id}:
 *   get:
 *     summary: Get a customer card by ID
 *     tags: [CustomerCards]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: customer card details
 *       404:
 *         description: customer card not found
 */
router.get("/customer-cards/:id", controller.getCustomerCardById);

/**
 * @swagger
 * /customer-cards/{id}:
 *   put:
 *     summary: Update a customer card
 *     tags: [CustomerCards]
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
 *               name:
 *                 type: string
 *               number:
 *                 type: string
 *     responses:
 *       200:
 *         description: customer card updated successfully
 *       404:
 *         description: customer card not found
 */
router.put("/customer-cards/:id", controller.updateCustomerCard);

/**
 * @swagger
 * /customer-cards/{id}:
 *   delete:
 *     summary: Delete a customer card
 *     tags: [CustomerCards]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: customer card deleted successfully
 *       404:
 *         description: customer card not found
 */
router.delete("/customer-cards/:id", controller.deleteCustomerCard);

module.exports = router;
