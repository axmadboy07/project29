const router = require("express").Router();
const controller = require("../controller/human_category.controller");

/**
 * @swagger
 * tags:
 *   name: HumanCategories
 *   description: HumanCategories management
 */

/**
 * @swagger
 * /human-categories:
 *   post:
 *     summary: Create a human category
 *     tags: [HumanCategories]
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
 *               start_age:
 *                 type: string
 *               finish_age:
 *                 type: string
 *               gender_id:
 *                 type: integer

 *     responses:
 *       201:
 *         description: human category created successfully
 *       400:
 *         description: Invalid data
 */
router.post("/human-categories", controller.createHumanCategory);

/**
 * @swagger
 * /human-categories:
 *   get:
 *     summary: Get all humancategories
 *     tags: [HumanCategories]
 *     responses:
 *       200:
 *         description: List of humancategories
 */
router.get("/human-categories", controller.getHumanCategories);

/**
 * @swagger
 * /human-categories/search:
 *   get:
 *     summary: Search humancategories
 *     tags: [HumanCategories]
 *     parameters:
 *       - in: query
 *         name: query
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Matching humancategories
 *       400:
 *         description: Query parameter is required
 */
router.get("/human-categories/search", controller.searchHumanCategories);

/**
 * @swagger
 * /human-categories/{id}:
 *   get:
 *     summary: Get a human category by ID
 *     tags: [HumanCategories]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: human category details
 *       404:
 *         description: human category not found
 */
router.get("/human-categories/:id", controller.getHumanCategoryById);

/**
 * @swagger
 * /human-categories/{id}:
 *   put:
 *     summary: Update a human category
 *     tags: [HumanCategories]
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
 *               start_age:
 *                 type: string
 *               finish_age:
 *                 type: string
 *               gender_id:
 *                 type: integer

 *     responses:
 *       200:
 *         description: human category updated successfully
 *       404:
 *         description: human category not found
 */
router.put("/human-categories/:id", controller.updateHumanCategory);

/**
 * @swagger
 * /human-categories/{id}:
 *   delete:
 *     summary: Delete a human category
 *     tags: [HumanCategories]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: human category deleted successfully
 *       404:
 *         description: human category not found
 */
router.delete("/human-categories/:id", controller.deleteHumanCategory);

module.exports = router;
