const router = require("express").Router();
const controller = require("../controller/country.controller");

/**
 * @swagger
 * tags:
 *   name: Countries
 *   description: Countries management
 */

/**
 * @swagger
 * /countries:
 *   post:
 *     summary: Create a country
 *     tags: [Countries]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - country_name
 *             properties:
 *               country_name:
 *                 type: string
 *     responses:
 *       201:
 *         description: country created successfully
 *       400:
 *         description: Invalid data
 */
router.post("/countries", controller.createCountry);

/**
 * @swagger
 * /countries:
 *   get:
 *     summary: Get all countries
 *     tags: [Countries]
 *     responses:
 *       200:
 *         description: List of countries
 */
router.get("/countries", controller.getCountries);

/**
 * @swagger
 * /countries/search:
 *   get:
 *     summary: Search countries
 *     tags: [Countries]
 *     parameters:
 *       - in: query
 *         name: query
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Matching countries
 *       400:
 *         description: Query parameter is required
 */
router.get("/countries/search", controller.searchCountries);

/**
 * @swagger
 * /countries/{id}:
 *   get:
 *     summary: Get a country by ID
 *     tags: [Countries]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: country details
 *       404:
 *         description: country not found
 */
router.get("/countries/:id", controller.getCountryById);

/**
 * @swagger
 * /countries/{id}:
 *   put:
 *     summary: Update a country
 *     tags: [Countries]
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
 *               country_name:
 *                 type: string
 *     responses:
 *       200:
 *         description: country updated successfully
 *       404:
 *         description: country not found
 */
router.put("/countries/:id", controller.updateCountry);

/**
 * @swagger
 * /countries/{id}:
 *   delete:
 *     summary: Delete a country
 *     tags: [Countries]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: country deleted successfully
 *       404:
 *         description: country not found
 */
router.delete("/countries/:id", controller.deleteCountry);

module.exports = router;
