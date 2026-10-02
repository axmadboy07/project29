const router = require("express").Router();
const controller = require("../controller/types.controller");

/**
 * @swagger
 * tags:
 *   name: Types
 *   description: Types management
 */

/**
 * @swagger
 * /types:
 *   post:
 *     summary: Create a type
 *     tags: [Types]
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
 *         description: type created successfully
 *       400:
 *         description: Invalid data
 */
router.post("/types", controller.createTypes);

/**
 * @swagger
 * /types:
 *   get:
 *     summary: Get all types
 *     tags: [Types]
 *     responses:
 *       200:
 *         description: List of types
 */
router.get("/types", controller.getTypes);

/**
 * @swagger
 * /types/search:
 *   get:
 *     summary: Search types
 *     tags: [Types]
 *     parameters:
 *       - in: query
 *         name: query
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Matching types
 *       400:
 *         description: Query parameter is required
 */
router.get("/types/search", controller.searchTypes);

/**
 * @swagger
 * /types/{id}:
 *   get:
 *     summary: Get a type by ID
 *     tags: [Types]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: type details
 *       404:
 *         description: type not found
 */
router.get("/types/:id", controller.getTypesById);

/**
 * @swagger
 * /types/{id}:
 *   put:
 *     summary: Update a type
 *     tags: [Types]
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
 *         description: type updated successfully
 *       404:
 *         description: type not found
 */
router.put("/types/:id", controller.updateTypes);

/**
 * @swagger
 * /types/{id}:
 *   delete:
 *     summary: Delete a type
 *     tags: [Types]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: type deleted successfully
 *       404:
 *         description: type not found
 */
router.delete("/types/:id", controller.deleteTypes);

module.exports = router;
