const router = require("express").Router();
const controller = require("../controller/seat_type.controller");

/**
 * @swagger
 * tags:
 *   name: SeatTypes
 *   description: SeatTypes management
 */

/**
 * @swagger
 * /seat-types:
 *   post:
 *     summary: Create a seat type
 *     tags: [SeatTypes]
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
 *         description: seat type created successfully
 *       400:
 *         description: Invalid data
 */
router.post("/seat-types", controller.createSeatType);

/**
 * @swagger
 * /seat-types:
 *   get:
 *     summary: Get all seattypes
 *     tags: [SeatTypes]
 *     responses:
 *       200:
 *         description: List of seattypes
 */
router.get("/seat-types", controller.getSeatTypes);

/**
 * @swagger
 * /seat-types/search:
 *   get:
 *     summary: Search seattypes
 *     tags: [SeatTypes]
 *     parameters:
 *       - in: query
 *         name: query
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Matching seattypes
 *       400:
 *         description: Query parameter is required
 */
router.get("/seat-types/search", controller.searchSeatTypes);

/**
 * @swagger
 * /seat-types/{id}:
 *   get:
 *     summary: Get a seat type by ID
 *     tags: [SeatTypes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: seat type details
 *       404:
 *         description: seat type not found
 */
router.get("/seat-types/:id", controller.getSeatTypeById);

/**
 * @swagger
 * /seat-types/{id}:
 *   put:
 *     summary: Update a seat type
 *     tags: [SeatTypes]
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
 *         description: seat type updated successfully
 *       404:
 *         description: seat type not found
 */
router.put("/seat-types/:id", controller.updateSeatType);

/**
 * @swagger
 * /seat-types/{id}:
 *   delete:
 *     summary: Delete a seat type
 *     tags: [SeatTypes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: seat type deleted successfully
 *       404:
 *         description: seat type not found
 */
router.delete("/seat-types/:id", controller.deleteSeatType);

module.exports = router;
