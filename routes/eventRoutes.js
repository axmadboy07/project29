const router = require("express").Router();
const controller = require("../controller/event.controller");

/**
 * @swagger
 * tags:
 *   name: Events
 *   description: Events management
 */

/**
 * @swagger
 * /events:
 *   post:
 *     summary: Create a event
 *     tags: [Events]
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
 *         description: event created successfully
 *       400:
 *         description: Invalid data
 */
router.post("/events", controller.createEvent);

/**
 * @swagger
 * /events:
 *   get:
 *     summary: Get all events
 *     tags: [Events]
 *     responses:
 *       200:
 *         description: List of events
 */
router.get("/events", controller.getEvents);

/**
 * @swagger
 * /events/search:
 *   get:
 *     summary: Search events
 *     tags: [Events]
 *     parameters:
 *       - in: query
 *         name: query
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Matching events
 *       400:
 *         description: Query parameter is required
 */
router.get("/events/search", controller.searchEvents);

/**
 * @swagger
 * /events/{id}:
 *   get:
 *     summary: Get a event by ID
 *     tags: [Events]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: event details
 *       404:
 *         description: event not found
 */
router.get("/events/:id", controller.getEventById);

/**
 * @swagger
 * /events/{id}:
 *   put:
 *     summary: Update a event
 *     tags: [Events]
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
 *         description: event updated successfully
 *       404:
 *         description: event not found
 */
router.put("/events/:id", controller.updateEvent);

/**
 * @swagger
 * /events/{id}:
 *   delete:
 *     summary: Delete a event
 *     tags: [Events]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: event deleted successfully
 *       404:
 *         description: event not found
 */
router.delete("/events/:id", controller.deleteEvent);

module.exports = router;
