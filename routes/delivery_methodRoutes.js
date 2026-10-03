const router = require("express").Router();
const controller = require("../controller/delivery_method.controller");

/**
 * @swagger
 * tags:
 *   name: DeliveryMethods
 *   description: DeliveryMethods management
 */

/**
 * @swagger
 * /delivery-methods:
 *   post:
 *     summary: Create a delivery method
 *     tags: [DeliveryMethods]
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
 *         description: delivery method created successfully
 *       400:
 *         description: Invalid data
 */
router.post("/delivery-methods", controller.createDeliveryMethod);

/**
 * @swagger
 * /delivery-methods:
 *   get:
 *     summary: Get all deliverymethods
 *     tags: [DeliveryMethods]
 *     responses:
 *       200:
 *         description: List of deliverymethods
 */
router.get("/delivery-methods", controller.getDeliveryMethods);

/**
 * @swagger
 * /delivery-methods/search:
 *   get:
 *     summary: Search deliverymethods
 *     tags: [DeliveryMethods]
 *     parameters:
 *       - in: query
 *         name: query
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Matching deliverymethods
 *       400:
 *         description: Query parameter is required
 */
router.get("/delivery-methods/search", controller.searchDeliveryMethods);

/**
 * @swagger
 * /delivery-methods/{id}:
 *   get:
 *     summary: Get a delivery method by ID
 *     tags: [DeliveryMethods]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: delivery method details
 *       404:
 *         description: delivery method not found
 */
router.get("/delivery-methods/:id", controller.getDeliveryMethodById);

/**
 * @swagger
 * /delivery-methods/{id}:
 *   put:
 *     summary: Update a delivery method
 *     tags: [DeliveryMethods]
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
 *         description: delivery method updated successfully
 *       404:
 *         description: delivery method not found
 */
router.put("/delivery-methods/:id", controller.updateDeliveryMethod);

/**
 * @swagger
 * /delivery-methods/{id}:
 *   delete:
 *     summary: Delete a delivery method
 *     tags: [DeliveryMethods]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: delivery method deleted successfully
 *       404:
 *         description: delivery method not found
 */
router.delete("/delivery-methods/:id", controller.deleteDeliveryMethod);

module.exports = router;
