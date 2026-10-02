const router = require("express").Router();
const controller = require("../controller/customer.controller");

/**
 * @swagger
 * tags:
 *   name: Group6
 *   description: Group6 management
 */

/**
 * @swagger
 * /group6:
 *   post:
 *     summary: Create a group6 item
 *     tags: [Group6]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - first_name
 *             properties:
 *               first_name:
 *                 type: string
 *     responses:
 *       201:
 *         description: group6 item created successfully
 *       400:
 *         description: Invalid data
 */
router.post("/group6", controller.createCustomer);

/**
 * @swagger
 * /group6:
 *   get:
 *     summary: Get all group6
 *     tags: [Group6]
 *     responses:
 *       200:
 *         description: List of group6
 */
router.get("/group6", controller.getCustomers);

/**
 * @swagger
 * /group6/search:
 *   get:
 *     summary: Search group6
 *     tags: [Group6]
 *     parameters:
 *       - in: query
 *         name: query
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Matching group6
 *       400:
 *         description: Query parameter is required
 */
router.get("/group6/search", controller.searchCustomers);

/**
 * @swagger
 * /group6/{id}:
 *   get:
 *     summary: Get a group6 item by ID
 *     tags: [Group6]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: group6 item details
 *       404:
 *         description: group6 item not found
 */
router.get("/group6/:id", controller.getCustomerById);

/**
 * @swagger
 * /group6/{id}:
 *   put:
 *     summary: Update a group6 item
 *     tags: [Group6]
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
 *     responses:
 *       200:
 *         description: group6 item updated successfully
 *       404:
 *         description: group6 item not found
 */
router.put("/group6/:id", controller.updateCustomer);

/**
 * @swagger
 * /group6/{id}:
 *   delete:
 *     summary: Delete a group6 item
 *     tags: [Group6]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: group6 item deleted successfully
 *       404:
 *         description: group6 item not found
 */
router.delete("/group6/:id", controller.deleteCustomer);

module.exports = router;
