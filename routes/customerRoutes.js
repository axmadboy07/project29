const router = require("express").Router();
const controller = require("../controller/customer.controller");

/**
 * @swagger
 * tags:
 *   name: Customers
 *   description: Customers management
 */

/**
 * @swagger
 * /customers:
 *   post:
 *     summary: Create a customer
 *     tags: [Customers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - first_name
 *               - hashed_password
 *               - email
 *             properties:
 *               first_name:
 *                 type: string
 *               last_name:
 *                 type: string
 *               phone:
 *                 type: string
 *               hashed_password:
 *                 type: string
 *               email:
 *                 type: string
 *               birth_date:
 *                 type: string
 *               gender_id:
 *                 type: integer
 *               lang_id:
 *                 type: integer
 *               hashed_refresh_token:
 *                 type: string

 *     responses:
 *       201:
 *         description: customer created successfully
 *       400:
 *         description: Invalid data
 */
router.post("/customers", controller.createCustomer);

/**
 * @swagger
 * /customers:
 *   get:
 *     summary: Get all customers
 *     tags: [Customers]
 *     responses:
 *       200:
 *         description: List of customers
 */
router.get("/customers", controller.getCustomers);

/**
 * @swagger
 * /customers/search:
 *   get:
 *     summary: Search customers
 *     tags: [Customers]
 *     parameters:
 *       - in: query
 *         name: query
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Matching customers
 *       400:
 *         description: Query parameter is required
 */
router.get("/customers/search", controller.searchCustomers);

/**
 * @swagger
 * /customers/{id}:
 *   get:
 *     summary: Get a customer by ID
 *     tags: [Customers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: customer details
 *       404:
 *         description: customer not found
 */
router.get("/customers/:id", controller.getCustomerById);

/**
 * @swagger
 * /customers/{id}:
 *   put:
 *     summary: Update a customer
 *     tags: [Customers]
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
 *               first_name:
 *                 type: string
 *               last_name:
 *                 type: string
 *               phone:
 *                 type: string
 *               hashed_password:
 *                 type: string
 *               email:
 *                 type: string
 *               birth_date:
 *                 type: string
 *               gender_id:
 *                 type: integer
 *               lang_id:
 *                 type: integer
 *               hashed_refresh_token:
 *                 type: string

 *     responses:
 *       200:
 *         description: customer updated successfully
 *       404:
 *         description: customer not found
 */
router.put("/customers/:id", controller.updateCustomer);

/**
 * @swagger
 * /customers/{id}:
 *   delete:
 *     summary: Delete a customer
 *     tags: [Customers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: customer deleted successfully
 *       404:
 *         description: customer not found
 */
router.delete("/customers/:id", controller.deleteCustomer);

module.exports = router;
