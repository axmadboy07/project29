const router = require("express").Router();
const controller = require("../controller/sector.controller");

/**
 * @swagger
 * tags:
 *   name: Sectors
 *   description: Sectors management
 */

/**
 * @swagger
 * /sectors:
 *   post:
 *     summary: Create a sector
 *     tags: [Sectors]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - sector_name
 *             properties:
 *               sector_name:
 *                 type: string
 *     responses:
 *       201:
 *         description: sector created successfully
 *       400:
 *         description: Invalid data
 */
router.post("/sectors", controller.createSector);

/**
 * @swagger
 * /sectors:
 *   get:
 *     summary: Get all sectors
 *     tags: [Sectors]
 *     responses:
 *       200:
 *         description: List of sectors
 */
router.get("/sectors", controller.getSectors);

/**
 * @swagger
 * /sectors/search:
 *   get:
 *     summary: Search sectors
 *     tags: [Sectors]
 *     parameters:
 *       - in: query
 *         name: query
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Matching sectors
 *       400:
 *         description: Query parameter is required
 */
router.get("/sectors/search", controller.searchSectors);

/**
 * @swagger
 * /sectors/{id}:
 *   get:
 *     summary: Get a sector by ID
 *     tags: [Sectors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: sector details
 *       404:
 *         description: sector not found
 */
router.get("/sectors/:id", controller.getSectorById);

/**
 * @swagger
 * /sectors/{id}:
 *   put:
 *     summary: Update a sector
 *     tags: [Sectors]
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
 *               sector_name:
 *                 type: string
 *     responses:
 *       200:
 *         description: sector updated successfully
 *       404:
 *         description: sector not found
 */
router.put("/sectors/:id", controller.updateSector);

/**
 * @swagger
 * /sectors/{id}:
 *   delete:
 *     summary: Delete a sector
 *     tags: [Sectors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: sector deleted successfully
 *       404:
 *         description: sector not found
 */
router.delete("/sectors/:id", controller.deleteSector);

module.exports = router;
