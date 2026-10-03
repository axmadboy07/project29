const router = require("express").Router();
const controller = require("../controller/region.controller");

/**
 * @swagger
 * tags:
 *   name: Regions
 *   description: Regions management
 */

/**
 * @swagger
 * /regions:
 *   post:
 *     summary: Create a region
 *     tags: [Regions]
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
 *         description: region created successfully
 *       400:
 *         description: Invalid data
 */
router.post("/regions", controller.createRegion);

/**
 * @swagger
 * /regions:
 *   get:
 *     summary: Get all regions
 *     tags: [Regions]
 *     responses:
 *       200:
 *         description: List of regions
 */
router.get("/regions", controller.getRegions);

/**
 * @swagger
 * /regions/search:
 *   get:
 *     summary: Search regions
 *     tags: [Regions]
 *     parameters:
 *       - in: query
 *         name: query
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Matching regions
 *       400:
 *         description: Query parameter is required
 */
router.get("/regions/search", controller.searchRegions);

/**
 * @swagger
 * /regions/{id}:
 *   get:
 *     summary: Get a region by ID
 *     tags: [Regions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: region details
 *       404:
 *         description: region not found
 */
router.get("/regions/:id", controller.getRegionById);

/**
 * @swagger
 * /regions/{id}:
 *   put:
 *     summary: Update a region
 *     tags: [Regions]
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
 *         description: region updated successfully
 *       404:
 *         description: region not found
 */
router.put("/regions/:id", controller.updateRegion);

/**
 * @swagger
 * /regions/{id}:
 *   delete:
 *     summary: Delete a region
 *     tags: [Regions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: region deleted successfully
 *       404:
 *         description: region not found
 */
router.delete("/regions/:id", controller.deleteRegion);

module.exports = router;
