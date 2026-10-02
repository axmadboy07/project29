const router = require("express").Router();
const controller = require("../controller/admin.controller");

/**
 * @swagger
 * tags:
 *   name: Admins
 *   description: Admins management
 */

/**
 * @swagger
 * /admins:
 *   post:
 *     summary: Create a admin
 *     tags: [Admins]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - login
 *               - hashed_password
 *             properties:
 *               name:
 *                 type: string
 *               login:
 *                 type: string
 *               hashed_password:
 *                 type: string
 *     responses:
 *       201:
 *         description: admin created successfully
 *       400:
 *         description: Invalid data
 */
router.post("/admins", controller.createAdmin);

/**
 * @swagger
 * /admins:
 *   get:
 *     summary: Get all admins
 *     tags: [Admins]
 *     responses:
 *       200:
 *         description: List of admins
 */
router.get("/admins", controller.getAdmins);

/**
 * @swagger
 * /admins/search:
 *   get:
 *     summary: Search admins
 *     tags: [Admins]
 *     parameters:
 *       - in: query
 *         name: query
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Matching admins
 *       400:
 *         description: Query parameter is required
 */
router.get("/admins/search", controller.searchAdmins);

/**
 * @swagger
 * /admins/{id}:
 *   get:
 *     summary: Get a admin by ID
 *     tags: [Admins]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: admin details
 *       404:
 *         description: admin not found
 */
router.get("/admins/:id", controller.getAdminById);

/**
 * @swagger
 * /admins/{id}:
 *   put:
 *     summary: Update a admin
 *     tags: [Admins]
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
 *               login:
 *                 type: string
 *               hashed_password:
 *                 type: string
 *     responses:
 *       200:
 *         description: admin updated successfully
 *       404:
 *         description: admin not found
 */
router.put("/admins/:id", controller.updateAdmin);

/**
 * @swagger
 * /admins/{id}:
 *   delete:
 *     summary: Delete a admin
 *     tags: [Admins]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: admin deleted successfully
 *       404:
 *         description: admin not found
 */
router.delete("/admins/:id", controller.deleteAdmin);

module.exports = router;
