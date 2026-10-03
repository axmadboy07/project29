const router = require("express").Router();
const controller = require("../controller/venue_photo.controller");

/**
 * @swagger
 * tags:
 *   name: VenuePhotos
 *   description: VenuePhotos management
 */

/**
 * @swagger
 * /venue-photos:
 *   post:
 *     summary: Create a venue photo
 *     tags: [VenuePhotos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - venue_id
 *               - url
 *             properties:
 *               venue_id:
 *                 type: integer
 *               url:
 *                 type: string

 *     responses:
 *       201:
 *         description: venue photo created successfully
 *       400:
 *         description: Invalid data
 */
router.post("/venue-photos", controller.createVenuePhoto);

/**
 * @swagger
 * /venue-photos:
 *   get:
 *     summary: Get all venuephotos
 *     tags: [VenuePhotos]
 *     responses:
 *       200:
 *         description: List of venuephotos
 */
router.get("/venue-photos", controller.getVenuePhotos);

/**
 * @swagger
 * /venue-photos/search:
 *   get:
 *     summary: Search venuephotos
 *     tags: [VenuePhotos]
 *     parameters:
 *       - in: query
 *         name: query
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Matching venuephotos
 *       400:
 *         description: Query parameter is required
 */
router.get("/venue-photos/search", controller.searchVenuePhotos);

/**
 * @swagger
 * /venue-photos/{id}:
 *   get:
 *     summary: Get a venue photo by ID
 *     tags: [VenuePhotos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: venue photo details
 *       404:
 *         description: venue photo not found
 */
router.get("/venue-photos/:id", controller.getVenuePhotoById);

/**
 * @swagger
 * /venue-photos/{id}:
 *   put:
 *     summary: Update a venue photo
 *     tags: [VenuePhotos]
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
 *               url:
 *                 type: string

 *     responses:
 *       200:
 *         description: venue photo updated successfully
 *       404:
 *         description: venue photo not found
 */
router.put("/venue-photos/:id", controller.updateVenuePhoto);

/**
 * @swagger
 * /venue-photos/{id}:
 *   delete:
 *     summary: Delete a venue photo
 *     tags: [VenuePhotos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: venue photo deleted successfully
 *       404:
 *         description: venue photo not found
 */
router.delete("/venue-photos/:id", controller.deleteVenuePhoto);

module.exports = router;
