const router = require("express").Router();
const controller = require("../controller/venue_types.controller");

/**
 * @swagger
 * tags:
 *   name: VenueTypes
 *   description: VenueTypes management
 */

/**
 * @swagger
 * /venue-types:
 *   post:
 *     summary: Create a venue type
 *     tags: [VenueTypes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - venue_id
 *               - type_id
 *             properties:
 *               venue_id:
 *                 type: integer
 *               type_id:
 *                 type: integer

 *     responses:
 *       201:
 *         description: venue type created successfully
 *       400:
 *         description: Invalid data
 */
router.post("/venue-types", controller.createVenueTypes);

/**
 * @swagger
 * /venue-types:
 *   get:
 *     summary: Get all venuetypes
 *     tags: [VenueTypes]
 *     responses:
 *       200:
 *         description: List of venuetypes
 */
router.get("/venue-types", controller.getVenueTypes);

/**
 * @swagger
 * /venue-types/search:
 *   get:
 *     summary: Search venuetypes
 *     tags: [VenueTypes]
 *     parameters:
 *       - in: query
 *         name: query
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Matching venuetypes
 *       400:
 *         description: Query parameter is required
 */
router.get("/venue-types/search", controller.searchVenueTypes);

/**
 * @swagger
 * /venue-types/{id}:
 *   get:
 *     summary: Get a venue type by ID
 *     tags: [VenueTypes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: venue type details
 *       404:
 *         description: venue type not found
 */
router.get("/venue-types/:id", controller.getVenueTypesById);

/**
 * @swagger
 * /venue-types/{id}:
 *   put:
 *     summary: Update a venue type
 *     tags: [VenueTypes]
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
 *               venue_id:
 *                 type: integer
 *               type_id:
 *                 type: integer

 *     responses:
 *       200:
 *         description: venue type updated successfully
 *       404:
 *         description: venue type not found
 */
router.put("/venue-types/:id", controller.updateVenueTypes);

/**
 * @swagger
 * /venue-types/{id}:
 *   delete:
 *     summary: Delete a venue type
 *     tags: [VenueTypes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: venue type deleted successfully
 *       404:
 *         description: venue type not found
 */
router.delete("/venue-types/:id", controller.deleteVenueTypes);

module.exports = router;
