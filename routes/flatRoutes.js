const router = require("express").Router();
const controller = require("../controller/flat.controller");

/**
 * @swagger
 * tags:
 *   name: Flats
 *   description: Flats management
 */

/**
 * @swagger
 * /flats:
 *   post:
 *     summary: Create a flat
 *     tags: [Flats]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               etaj:
 *                 type: integer
 *               condition:
 *                 type: string

 *     responses:
 *       201:
 *         description: flat created successfully
 *       400:
 *         description: Invalid data
 */
router.post("/flats", controller.createFlat);

/**
 * @swagger
 * /flats:
 *   get:
 *     summary: Get all flats
 *     tags: [Flats]
 *     responses:
 *       200:
 *         description: List of flats
 */
router.get("/flats", controller.getFlats);

/**
 * @swagger
 * /flats/search:
 *   get:
 *     summary: Search flats
 *     tags: [Flats]
 *     parameters:
 *       - in: query
 *         name: query
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Matching flats
 *       400:
 *         description: Query parameter is required
 */
router.get("/flats/search", controller.searchFlats);

/**
 * @swagger
 * /flats/{id}:
 *   get:
 *     summary: Get a flat by ID
 *     tags: [Flats]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: flat details
 *       404:
 *         description: flat not found
 */
router.get("/flats/:id", controller.getFlatById);

/**
 * @swagger
 * /flats/{id}:
 *   put:
 *     summary: Update a flat
 *     tags: [Flats]
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
 *               etaj:
 *                 type: integer
 *               condition:
 *                 type: string

 *     responses:
 *       200:
 *         description: flat updated successfully
 *       404:
 *         description: flat not found
 */
router.put("/flats/:id", controller.updateFlat);

/**
 * @swagger
 * /flats/{id}:
 *   delete:
 *     summary: Delete a flat
 *     tags: [Flats]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: flat deleted successfully
 *       404:
 *         description: flat not found
 */
router.delete("/flats/:id", controller.deleteFlat);

module.exports = router;
