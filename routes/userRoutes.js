const router = require("express").Router();
const controller = require("../controller/customer.controller");

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Users management
 */

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create a user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - first_name
 *               - email
 *               - hashed_password
 *             properties:
 *               first_name:
 *                 type: string
 *               email:
 *                 type: string
 *               hashed_password:
 *                 type: string
 *     responses:
 *       201:
 *         description: user created successfully
 *       400:
 *         description: Invalid data
 */
router.post("/users", controller.createCustomer);

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: List of users
 */
router.get("/users", controller.getCustomers);

/**
 * @swagger
 * /users/search:
 *   get:
 *     summary: Search users
 *     tags: [Users]
 *     parameters:
 *       - in: query
 *         name: query
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Matching users
 *       400:
 *         description: Query parameter is required
 */
router.get("/users/search", controller.searchCustomers);

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Get a user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: user details
 *       404:
 *         description: user not found
 */
router.get("/users/:id", controller.getCustomerById);

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Update a user
 *     tags: [Users]
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
 *               email:
 *                 type: string
 *               hashed_password:
 *                 type: string
 *     responses:
 *       200:
 *         description: user updated successfully
 *       404:
 *         description: user not found
 */
router.put("/users/:id", controller.updateCustomer);

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Delete a user
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: user deleted successfully
 *       404:
 *         description: user not found
 */
router.delete("/users/:id", controller.deleteCustomer);

module.exports = router;
