const router = require("express").Router();
const controller = require("../controller/venue.controller");

/**
 * @swagger
 * tags:
 *   name: Venues
 *   description: Venues management
 */

/**
 * @swagger
 * /venues:
 *   post:
 *     summary: Create a venue
 *     tags: [Venues]
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
 *               address:
 *                 type: string
 *               location:
 *                 type: string
 *               site:
 *                 type: string
 *               phone:
 *                 type: string
 *               schema:
 *                 type: string
 *               region_id:
 *                 type: integer
 *               district_id:
 *                 type: integer

 *     responses:
 *       201:
 *         description: venue created successfully
 *       400:
 *         description: Invalid data
 */
router.post("/venues", controller.createVenue);

/**
 * @swagger
 * /venues:
 *   get:
 *     summary: Get all venues
 *     tags: [Venues]
 *     responses:
 *       200:
 *         description: List of venues
 */
router.get("/venues", controller.getVenues);

/**
 * @swagger
 * /venues/search:
 *   get:
 *     summary: Search venues
 *     tags: [Venues]
 *     parameters:
 *       - in: query
 *         name: query
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Matching venues
 *       400:
 *         description: Query parameter is required
 */
router.get("/venues/search", controller.searchVenues);

/**
 * @swagger
 * /venues/{id}:
 *   get:
 *     summary: Get a venue by ID
 *     tags: [Venues]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: venue details
 *       404:
 *         description: venue not found
 */
router.get("/venues/:id", controller.getVenueById);

/**
 * @swagger
 * /venues/{id}:
 *   put:
 *     summary: Update a venue
 *     tags: [Venues]
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
 *               address:
 *                 type: string
 *               location:
 *                 type: string
 *               site:
 *                 type: string
 *               phone:
 *                 type: string
 *               schema:
 *                 type: string
 *               region_id:
 *                 type: integer
 *               district_id:
 *                 type: integer

 *     responses:
 *       200:
 *         description: venue updated successfully
 *       404:
 *         description: venue not found
 */
router.put("/venues/:id", controller.updateVenue);

/**
 * @swagger
 * /venues/{id}:
 *   delete:
 *     summary: Delete a venue
 *     tags: [Venues]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: venue deleted successfully
 *       404:
 *         description: venue not found
 */
router.delete("/venues/:id", controller.deleteVenue);

module.exports = router;
