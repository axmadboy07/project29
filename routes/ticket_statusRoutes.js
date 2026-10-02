const router = require("express").Router();
const controller = require("../controller/ticket_status.controller");

/**
 * @swagger
 * tags:
 *   name: TicketStatuses
 *   description: TicketStatuses management
 */

/**
 * @swagger
 * /ticket-statuses:
 *   post:
 *     summary: Create a ticket status
 *     tags: [TicketStatuses]
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
 *         description: ticket status created successfully
 *       400:
 *         description: Invalid data
 */
router.post("/ticket-statuses", controller.createTicketStatus);

/**
 * @swagger
 * /ticket-statuses:
 *   get:
 *     summary: Get all ticketstatuses
 *     tags: [TicketStatuses]
 *     responses:
 *       200:
 *         description: List of ticketstatuses
 */
router.get("/ticket-statuses", controller.getTicketStatuses);

/**
 * @swagger
 * /ticket-statuses/search:
 *   get:
 *     summary: Search ticketstatuses
 *     tags: [TicketStatuses]
 *     parameters:
 *       - in: query
 *         name: query
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Matching ticketstatuses
 *       400:
 *         description: Query parameter is required
 */
router.get("/ticket-statuses/search", controller.searchTicketStatuses);

/**
 * @swagger
 * /ticket-statuses/{id}:
 *   get:
 *     summary: Get a ticket status by ID
 *     tags: [TicketStatuses]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: ticket status details
 *       404:
 *         description: ticket status not found
 */
router.get("/ticket-statuses/:id", controller.getTicketStatusById);

/**
 * @swagger
 * /ticket-statuses/{id}:
 *   put:
 *     summary: Update a ticket status
 *     tags: [TicketStatuses]
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
 *         description: ticket status updated successfully
 *       404:
 *         description: ticket status not found
 */
router.put("/ticket-statuses/:id", controller.updateTicketStatus);

/**
 * @swagger
 * /ticket-statuses/{id}:
 *   delete:
 *     summary: Delete a ticket status
 *     tags: [TicketStatuses]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: ticket status deleted successfully
 *       404:
 *         description: ticket status not found
 */
router.delete("/ticket-statuses/:id", controller.deleteTicketStatus);

module.exports = router;
