const router = require("express").Router();
const controller = require("../controller/seat.controller");

/**
 * @swagger
 * tags:
 *   name: Seats
 *   description: Seats management
 */

/**
 * @swagger
 * /seats:
 *   post:
 *     summary: Create a seat
 *     tags: [Seats]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sector_id:
 *                 type: integer
 *               row_number:
 *                 type: integer
 *               number:
 *                 type: integer
 *               venue_id:
 *                 type: integer
 *               seat_type_id:
 *                 type: integer
 *               location_in_schema:
 *                 type: string

 *     responses:
 *       201:
 *         description: seat created successfully
 *       400:
 *         description: Invalid data
 */
router.post("/seats", controller.createSeat);

/**
 * @swagger
 * /seats:
 *   get:
 *     summary: Get all seats
 *     tags: [Seats]
 *     responses:
 *       200:
 *         description: List of seats
 */
router.get("/seats", controller.getSeats);

/**
 * @swagger
 * /seats/search:
 *   get:
 *     summary: Search seats
 *     tags: [Seats]
 *     parameters:
 *       - in: query
 *         name: query
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Matching seats
 *       400:
 *         description: Query parameter is required
 */
router.get("/seats/search", controller.searchSeats);

/**
 * @swagger
 * /seats/{id}:
 *   get:
 *     summary: Get a seat by ID
 *     tags: [Seats]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: seat details
 *       404:
 *         description: seat not found
 */
router.get("/seats/:id", controller.getSeatById);

/**
 * @swagger
 * /seats/{id}:
 *   put:
 *     summary: Update a seat
 *     tags: [Seats]
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
 *               sector_id:
 *                 type: integer
 *               row_number:
 *                 type: integer
 *               number:
 *                 type: integer
 *               venue_id:
 *                 type: integer
 *               seat_type_id:
 *                 type: integer
 *               location_in_schema:
 *                 type: string

 *     responses:
 *       200:
 *         description: seat updated successfully
 *       404:
 *         description: seat not found
 */
router.put("/seats/:id", controller.updateSeat);

/**
 * @swagger
 * /seats/{id}:
 *   delete:
 *     summary: Delete a seat
 *     tags: [Seats]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: seat deleted successfully
 *       404:
 *         description: seat not found
 */
router.delete("/seats/:id", controller.deleteSeat);

module.exports = router;
