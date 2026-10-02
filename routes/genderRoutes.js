const router = require("express").Router();
const controller = require("../controller/gender.controller");

/**
 * @swagger
 * tags:
 *   name: Genders
 *   description: Genders management
 */

/**
 * @swagger
 * /genders:
 *   post:
 *     summary: Create a gender
 *     tags: [Genders]
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
 *         description: gender created successfully
 *       400:
 *         description: Invalid data
 */
router.post("/genders", controller.createGender);

/**
 * @swagger
 * /genders:
 *   get:
 *     summary: Get all genders
 *     tags: [Genders]
 *     responses:
 *       200:
 *         description: List of genders
 */
router.get("/genders", controller.getGenders);

/**
 * @swagger
 * /genders/search:
 *   get:
 *     summary: Search genders
 *     tags: [Genders]
 *     parameters:
 *       - in: query
 *         name: query
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Matching genders
 *       400:
 *         description: Query parameter is required
 */
router.get("/genders/search", controller.searchGenders);

/**
 * @swagger
 * /genders/{id}:
 *   get:
 *     summary: Get a gender by ID
 *     tags: [Genders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: gender details
 *       404:
 *         description: gender not found
 */
router.get("/genders/:id", controller.getGenderById);

/**
 * @swagger
 * /genders/{id}:
 *   put:
 *     summary: Update a gender
 *     tags: [Genders]
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
 *         description: gender updated successfully
 *       404:
 *         description: gender not found
 */
router.put("/genders/:id", controller.updateGender);

/**
 * @swagger
 * /genders/{id}:
 *   delete:
 *     summary: Delete a gender
 *     tags: [Genders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: gender deleted successfully
 *       404:
 *         description: gender not found
 */
router.delete("/genders/:id", controller.deleteGender);

module.exports = router;
