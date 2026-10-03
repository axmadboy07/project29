const router = require("express").Router();
const controller = require("../controller/event_type.controller");

/**
 * @swagger
 * tags:
 *   name: EventTypes
 *   description: EventTypes management
 */

/**
 * @swagger
 * /event-types:
 *   post:
 *     summary: Create a event type
 *     tags: [EventTypes]
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
 *               parent_event_type_id:
 *                 type: integer

 *     responses:
 *       201:
 *         description: event type created successfully
 *       400:
 *         description: Invalid data
 */
router.post("/event-types", controller.createEventType);

/**
 * @swagger
 * /event-types:
 *   get:
 *     summary: Get all eventtypes
 *     tags: [EventTypes]
 *     responses:
 *       200:
 *         description: List of eventtypes
 */
router.get("/event-types", controller.getEventTypes);

/**
 * @swagger
 * /event-types/search:
 *   get:
 *     summary: Search eventtypes
 *     tags: [EventTypes]
 *     parameters:
 *       - in: query
 *         name: query
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Matching eventtypes
 *       400:
 *         description: Query parameter is required
 */
router.get("/event-types/search", controller.searchEventTypes);

/**
 * @swagger
 * /event-types/{id}:
 *   get:
 *     summary: Get a event type by ID
 *     tags: [EventTypes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: event type details
 *       404:
 *         description: event type not found
 */
router.get("/event-types/:id", controller.getEventTypeById);

/**
 * @swagger
 * /event-types/{id}:
 *   put:
 *     summary: Update a event type
 *     tags: [EventTypes]
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
 *               parent_event_type_id:
 *                 type: integer

 *     responses:
 *       200:
 *         description: event type updated successfully
 *       404:
 *         description: event type not found
 */
router.put("/event-types/:id", controller.updateEventType);

/**
 * @swagger
 * /event-types/{id}:
 *   delete:
 *     summary: Delete a event type
 *     tags: [EventTypes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: event type deleted successfully
 *       404:
 *         description: event type not found
 */
router.delete("/event-types/:id", controller.deleteEventType);

module.exports = router;
