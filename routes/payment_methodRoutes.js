const router = require("express").Router();
const controller = require("../controller/payment_method.controller");

/**
 * @swagger
 * tags:
 *   name: PaymentMethods
 *   description: PaymentMethods management
 */

/**
 * @swagger
 * /payment-methods:
 *   post:
 *     summary: Create a payment method
 *     tags: [PaymentMethods]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: payment method created successfully
 *       400:
 *         description: Invalid data
 */
router.post("/payment-methods", controller.createPaymentMethod);

/**
 * @swagger
 * /payment-methods:
 *   get:
 *     summary: Get all paymentmethods
 *     tags: [PaymentMethods]
 *     responses:
 *       200:
 *         description: List of paymentmethods
 */
router.get("/payment-methods", controller.getPaymentMethods);

/**
 * @swagger
 * /payment-methods/search:
 *   get:
 *     summary: Search paymentmethods
 *     tags: [PaymentMethods]
 *     parameters:
 *       - in: query
 *         name: query
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Matching paymentmethods
 *       400:
 *         description: Query parameter is required
 */
router.get("/payment-methods/search", controller.searchPaymentMethods);

/**
 * @swagger
 * /payment-methods/{id}:
 *   get:
 *     summary: Get a payment method by ID
 *     tags: [PaymentMethods]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: payment method details
 *       404:
 *         description: payment method not found
 */
router.get("/payment-methods/:id", controller.getPaymentMethodById);

/**
 * @swagger
 * /payment-methods/{id}:
 *   put:
 *     summary: Update a payment method
 *     tags: [PaymentMethods]
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
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: payment method updated successfully
 *       404:
 *         description: payment method not found
 */
router.put("/payment-methods/:id", controller.updatePaymentMethod);

/**
 * @swagger
 * /payment-methods/{id}:
 *   delete:
 *     summary: Delete a payment method
 *     tags: [PaymentMethods]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: payment method deleted successfully
 *       404:
 *         description: payment method not found
 */
router.delete("/payment-methods/:id", controller.deletePaymentMethod);

module.exports = router;
