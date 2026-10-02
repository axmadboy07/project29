const router = require("express").Router();
const controller = require("../controller/lang.controller");

/**
 * @swagger
 * tags:
 *   name: Langs
 *   description: Langs management
 */

/**
 * @swagger
 * /langs:
 *   post:
 *     summary: Create a language
 *     tags: [Langs]
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
 *         description: language created successfully
 *       400:
 *         description: Invalid data
 */
router.post("/langs", controller.createLang);

/**
 * @swagger
 * /langs:
 *   get:
 *     summary: Get all langs
 *     tags: [Langs]
 *     responses:
 *       200:
 *         description: List of langs
 */
router.get("/langs", controller.getLangs);

/**
 * @swagger
 * /langs/search:
 *   get:
 *     summary: Search langs
 *     tags: [Langs]
 *     parameters:
 *       - in: query
 *         name: query
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Matching langs
 *       400:
 *         description: Query parameter is required
 */
router.get("/langs/search", controller.searchLangs);

/**
 * @swagger
 * /langs/{id}:
 *   get:
 *     summary: Get a language by ID
 *     tags: [Langs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: language details
 *       404:
 *         description: language not found
 */
router.get("/langs/:id", controller.getLangById);

/**
 * @swagger
 * /langs/{id}:
 *   put:
 *     summary: Update a language
 *     tags: [Langs]
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
 *         description: language updated successfully
 *       404:
 *         description: language not found
 */
router.put("/langs/:id", controller.updateLang);

/**
 * @swagger
 * /langs/{id}:
 *   delete:
 *     summary: Delete a language
 *     tags: [Langs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: language deleted successfully
 *       404:
 *         description: language not found
 */
router.delete("/langs/:id", controller.deleteLang);

module.exports = router;
