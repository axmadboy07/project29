const router = require("express").Router();
const controller = require("../controller/booking.controller");

/**
 * @swagger
 * tags:
 *   name: Bookings
 *   description: Bookings management
 */

/**
 * @swagger
 * /bookings:
 *   post:
 *     summary: Create a booking
 *     tags: [Bookings]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - cart_id
 *             properties:
 *               cart_id:
 *                 type: string
 *     responses:
 *       201:
 *         description: booking created successfully
 *       400:
 *         description: Invalid data
 */
router.post("/bookings", controller.createBooking);

/**
 * @swagger
 * /bookings:
 *   get:
 *     summary: Get all bookings
 *     tags: [Bookings]
 *     responses:
 *       200:
 *         description: List of bookings
 */
router.get("/bookings", controller.getBookings);

/**
 * @swagger
 * /bookings/search:
 *   get:
 *     summary: Search bookings
 *     tags: [Bookings]
 *     parameters:
 *       - in: query
 *         name: query
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Matching bookings
 *       400:
 *         description: Query parameter is required
 */
router.get("/bookings/search", controller.searchBookings);

/**
 * @swagger
 * /bookings/{id}:
 *   get:
 *     summary: Get a booking by ID
 *     tags: [Bookings]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: booking details
 *       404:
 *         description: booking not found
 */
router.get("/bookings/:id", controller.getBookingById);

/**
 * @swagger
 * /bookings/{id}:
 *   put:
 *     summary: Update a booking
 *     tags: [Bookings]
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
 *               cart_id:
 *                 type: string
 *     responses:
 *       200:
 *         description: booking updated successfully
 *       404:
 *         description: booking not found
 */
router.put("/bookings/:id", controller.updateBooking);

/**
 * @swagger
 * /bookings/{id}:
 *   delete:
 *     summary: Delete a booking
 *     tags: [Bookings]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: booking deleted successfully
 *       404:
 *         description: booking not found
 */
router.delete("/bookings/:id", controller.deleteBooking);

module.exports = router;
