const router = require("express").Router();
const controller = require("../controller/ticket_type.controller");

/**
 * @swagger
 * tags:
 *   name: TicketTypes
 *   description: TicketTypes management
 */

/**
 * @swagger
 * /ticket-types:
 *   post:
 *     summary: Create a ticket type
 *     tags: [TicketTypes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - ticket_type
 *             properties:
 *               ticket_type:
 *                 type: string
 *     responses:
 *       201:
 *         description: ticket type created successfully
 *       400:
 *         description: Invalid data
 */
router.post("/ticket-types", controller.createTicketType);

/**
 * @swagger
 * /ticket-types:
 *   get:
 *     summary: Get all tickettypes
 *     tags: [TicketTypes]
 *     responses:
 *       200:
 *         description: List of tickettypes
 */
router.get("/ticket-types", controller.getTicketTypes);

/**
 * @swagger
 * /ticket-types/search:
 *   get:
 *     summary: Search tickettypes
 *     tags: [TicketTypes]
 *     parameters:
 *       - in: query
 *         name: query
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Matching tickettypes
 *       400:
 *         description: Query parameter is required
 */
router.get("/ticket-types/search", controller.searchTicketTypes);

/**
 * @swagger
 * /ticket-types/{id}:
 *   get:
 *     summary: Get a ticket type by ID
 *     tags: [TicketTypes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: ticket type details
 *       404:
 *         description: ticket type not found
 */
router.get("/ticket-types/:id", controller.getTicketTypeById);

/**
 * @swagger
 * /ticket-types/{id}:
 *   put:
 *     summary: Update a ticket type
 *     tags: [TicketTypes]
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
 *               ticket_type:
 *                 type: string
 *     responses:
 *       200:
 *         description: ticket type updated successfully
 *       404:
 *         description: ticket type not found
 */
router.put("/ticket-types/:id", controller.updateTicketType);

/**
 * @swagger
 * /ticket-types/{id}:
 *   delete:
 *     summary: Delete a ticket type
 *     tags: [TicketTypes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: ticket type deleted successfully
 *       404:
 *         description: ticket type not found
 */
router.delete("/ticket-types/:id", controller.deleteTicketType);

module.exports = router;
