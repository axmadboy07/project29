const router = require("express").Router();
const controller = require("../controller/customer_address.controller");

/**
 * @swagger
 * tags:
 *   name: CustomerAddresses
 *   description: CustomerAddresses management
 */

/**
 * @swagger
 * /customer-addresses:
 *   post:
 *     summary: Create a customer address
 *     tags: [CustomerAddresses]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - customer_id
 *               - street
 *               - house
 *             properties:
 *               customer_id:
 *                 type: string
 *               street:
 *                 type: string
 *               house:
 *                 type: string
 *     responses:
 *       201:
 *         description: customer address created successfully
 *       400:
 *         description: Invalid data
 */
router.post("/customer-addresses", controller.createCustomerAddress);

/**
 * @swagger
 * /customer-addresses:
 *   get:
 *     summary: Get all customeraddresses
 *     tags: [CustomerAddresses]
 *     responses:
 *       200:
 *         description: List of customeraddresses
 */
router.get("/customer-addresses", controller.getCustomerAddresses);

/**
 * @swagger
 * /customer-addresses/search:
 *   get:
 *     summary: Search customeraddresses
 *     tags: [CustomerAddresses]
 *     parameters:
 *       - in: query
 *         name: query
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Matching customeraddresses
 *       400:
 *         description: Query parameter is required
 */
router.get("/customer-addresses/search", controller.searchCustomerAddresses);

/**
 * @swagger
 * /customer-addresses/{id}:
 *   get:
 *     summary: Get a customer address by ID
 *     tags: [CustomerAddresses]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: customer address details
 *       404:
 *         description: customer address not found
 */
router.get("/customer-addresses/:id", controller.getCustomerAddressById);

/**
 * @swagger
 * /customer-addresses/{id}:
 *   put:
 *     summary: Update a customer address
 *     tags: [CustomerAddresses]
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
 *               street:
 *                 type: string
 *               house:
 *                 type: string
 *     responses:
 *       200:
 *         description: customer address updated successfully
 *       404:
 *         description: customer address not found
 */
router.put("/customer-addresses/:id", controller.updateCustomerAddress);

/**
 * @swagger
 * /customer-addresses/{id}:
 *   delete:
 *     summary: Delete a customer address
 *     tags: [CustomerAddresses]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: customer address deleted successfully
 *       404:
 *         description: customer address not found
 */
router.delete("/customer-addresses/:id", controller.deleteCustomerAddress);

module.exports = router;
