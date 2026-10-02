const router = require("express").Router();
const controller = require("../controller/district.controller");

/**
 * @swagger
 * tags:
 *   name: Districts
 *   description: Districts management
 */

/**
 * @swagger
 * /districts:
 *   post:
 *     summary: Create a district
 *     tags: [Districts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - region_id
 *             properties:
 *               name:
 *                 type: string
 *               region_id:
 *                 type: string
 *     responses:
 *       201:
 *         description: district created successfully
 *       400:
 *         description: Invalid data
 */
router.post("/districts", controller.createDistrict);

/**
 * @swagger
 * /districts:
 *   get:
 *     summary: Get all districts
 *     tags: [Districts]
 *     responses:
 *       200:
 *         description: List of districts
 */
router.get("/districts", controller.getDistricts);

/**
 * @swagger
 * /districts/search:
 *   get:
 *     summary: Search districts
 *     tags: [Districts]
 *     parameters:
 *       - in: query
 *         name: query
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Matching districts
 *       400:
 *         description: Query parameter is required
 */
router.get("/districts/search", controller.searchDistricts);

/**
 * @swagger
 * /districts/{id}:
 *   get:
 *     summary: Get a district by ID
 *     tags: [Districts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: district details
 *       404:
 *         description: district not found
 */
router.get("/districts/:id", controller.getDistrictById);

/**
 * @swagger
 * /districts/{id}:
 *   put:
 *     summary: Update a district
 *     tags: [Districts]
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
 *               region_id:
 *                 type: string
 *     responses:
 *       200:
 *         description: district updated successfully
 *       404:
 *         description: district not found
 */
router.put("/districts/:id", controller.updateDistrict);

/**
 * @swagger
 * /districts/{id}:
 *   delete:
 *     summary: Delete a district
 *     tags: [Districts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: district deleted successfully
 *       404:
 *         description: district not found
 */
router.delete("/districts/:id", controller.deleteDistrict);

module.exports = router;
