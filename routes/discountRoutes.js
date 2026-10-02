const router = require("express").Router();
const controller = require("../controller/discount.controller");

/**
 * @swagger
 * tags:
 *   name: Discounts
 *   description: Discounts management
 */

/**
 * @swagger
 * /discounts:
 *   post:
 *     summary: Create a discount
 *     tags: [Discounts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - discount
 *             properties:
 *               discount:
 *                 type: string
 *     responses:
 *       201:
 *         description: discount created successfully
 *       400:
 *         description: Invalid data
 */
router.post("/discounts", controller.createDiscount);

/**
 * @swagger
 * /discounts:
 *   get:
 *     summary: Get all discounts
 *     tags: [Discounts]
 *     responses:
 *       200:
 *         description: List of discounts
 */
router.get("/discounts", controller.getDiscounts);

/**
 * @swagger
 * /discounts/search:
 *   get:
 *     summary: Search discounts
 *     tags: [Discounts]
 *     parameters:
 *       - in: query
 *         name: query
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Matching discounts
 *       400:
 *         description: Query parameter is required
 */
router.get("/discounts/search", controller.searchDiscounts);

/**
 * @swagger
 * /discounts/{id}:
 *   get:
 *     summary: Get a discount by ID
 *     tags: [Discounts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: discount details
 *       404:
 *         description: discount not found
 */
router.get("/discounts/:id", controller.getDiscountById);

/**
 * @swagger
 * /discounts/{id}:
 *   put:
 *     summary: Update a discount
 *     tags: [Discounts]
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
 *               discount:
 *                 type: string
 *     responses:
 *       200:
 *         description: discount updated successfully
 *       404:
 *         description: discount not found
 */
router.put("/discounts/:id", controller.updateDiscount);

/**
 * @swagger
 * /discounts/{id}:
 *   delete:
 *     summary: Delete a discount
 *     tags: [Discounts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: discount deleted successfully
 *       404:
 *         description: discount not found
 */
router.delete("/discounts/:id", controller.deleteDiscount);

module.exports = router;
