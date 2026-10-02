const router = require("express").Router();
const controller = require("../controller/ticket.controller");

/**
 * @swagger
 * tags:
 *   name: Tickets
 *   description: Tickets management
 */

/**
 * @swagger
 * /tickets:
 *   post:
 *     summary: Create a ticket
 *     tags: [Tickets]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - event_id
 *               - price
 *             properties:
 *               event_id:
 *                 type: string
 *               price:
 *                 type: string
 *     responses:
 *       201:
 *         description: ticket created successfully
 *       400:
 *         description: Invalid data
 */
router.post("/tickets", controller.createTicket);

/**
 * @swagger
 * /tickets:
 *   get:
 *     summary: Get all tickets
 *     tags: [Tickets]
 *     responses:
 *       200:
 *         description: List of tickets
 */
router.get("/tickets", controller.getTickets);

/**
 * @swagger
 * /tickets/search:
 *   get:
 *     summary: Search tickets
 *     tags: [Tickets]
 *     parameters:
 *       - in: query
 *         name: query
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Matching tickets
 *       400:
 *         description: Query parameter is required
 */
router.get("/tickets/search", controller.searchTickets);

/**
 * @swagger
 * /tickets/{id}:
 *   get:
 *     summary: Get a ticket by ID
 *     tags: [Tickets]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: ticket details
 *       404:
 *         description: ticket not found
 */
router.get("/tickets/:id", controller.getTicketById);

/**
 * @swagger
 * /tickets/{id}:
 *   put:
 *     summary: Update a ticket
 *     tags: [Tickets]
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
 *               event_id:
 *                 type: string
 *               price:
 *                 type: string
 *     responses:
 *       200:
 *         description: ticket updated successfully
 *       404:
 *         description: ticket not found
 */
router.put("/tickets/:id", controller.updateTicket);

/**
 * @swagger
 * /tickets/{id}:
 *   delete:
 *     summary: Delete a ticket
 *     tags: [Tickets]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: ticket deleted successfully
 *       404:
 *         description: ticket not found
 */
router.delete("/tickets/:id", controller.deleteTicket);

module.exports = router;
