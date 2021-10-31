/**
 * @swagger
 * components:
 *      schemas:
 *          Category:
 *              type: object
 *              required:
 *                  - name
 *              properties:
 *                  id:
 *                      type: integer
 *                      description: The auto-generated id of the category.
 *                  name:
 *                      type: string
 *                      description: The name of category.
 *              example:
 *                  name: RESTful API
 */

module.exports = app => {
    const category = require("../controllers/categoryController")
    const router = require("express").Router()

    /**
     * @swagger
     * /api/categories:
     *      get:
     *          tags:
     *          - categories
     *          summary: Retrieve a list of categories.
     *          description: Retrieve a list of categories
     *          responses:
     *              200:
     *                  description: A list of categories
     *                  content:
     *                      application/json:
     *                          schema:
     *                               type: object
     *                               properties:
     *                                   id:
     *                                       type: integer
     *                                       description: The author ID.
     *                                       example: 1
     *                                   name:
     *                                       type: string
     *                                       description: The categories name
     *                                       example: Java
     */

    router.get("/", category.findAll)

    /**
     * @swagger
     * /api/categories/{id}:
     *      get:
     *          tags:
     *          - categories
     *          summary: Retrieve a category by ID.
     *          description: Retrieve a category by ID
     *          parameters:
     *            - in: path
     *              name: id
     *              schema:
     *                  type: integer
     *              required: true
     *              description: Numeric ID of the category to get
     *          responses:
     *              200:
     *                  description: Numeric ID of the category to get
     *                  content:
     *                      application/json:
     *                          schema:
     *                              type: object
     *                              properties:
     *                                  id:
     *                                      type: integer
     *                                      description: The category ID.
     *                                      example: 1
     *                                  name:
     *                                      type: string
     *                                      description: The categories name
     *                                      example: Java
     *              204:
     *                  description: No Content
     */

    router.get("/:id", category.findOneById)

    /**
     * @swagger
     * /api/categories:
     *      post:
     *          tags:
     *          - categories
     *          summary: Add a new category to the database.
     *          description: Add a new category to the database
     *          requestBody:
     *              required: true
     *              content:
     *                  application/json:
     *                      schema:
     *                          type: object
     *                          properties:
     *                              name:
     *                                  type: string
     *                                  description: The category name
     *                                  example: Python
     *          responses:
     *              200:
     *                  description: Category has been created successfully
     *                  content:
     *                      application/json:
     *                          schema:
     *                              type: object
     *                              properties:
     *                                  id:
     *                                      type: integer
     *                                      description: The author ID
     *                                      example: 1
     *                                  name:
     *                                      type: string
     *                                      description: The category name
     *                                      example: Python
     *              400:
     *                  description: Empty content
     *                  content:
     *                      application/json:
     *                          schema:
     *                              type: object
     *                              properties:
     *                                  message:
     *                                      example: Content can not be empty!
     */

    router.post("/", category.create)

    /**
     * @swagger
     * /api/categories/{id}:
     *      put:
     *          tags:
     *          - categories
     *          consumes:
     *            - application/json
     *          summary: Update the category data by ID.
     *          description: Update the category data by ID
     *          parameters:
     *            - in: path
     *              name: id
     *              schema:
     *                  type: integer
     *              required: true
     *              description: Numeric ID of the category to update
     *          requestBody:
     *              required: true
     *              content:
     *                  application/json:
     *                      schema:
     *                          type: object
     *                          properties:
     *                              name:
     *                                  type: string
     *                                  description: The category name.
     *                                  example: Java
     *          responses:
     *              200:
     *                  description: Numeric ID of the category to update
     *                  content:
     *                      application/json:
     *                          schema:
     *                              type: object
     *                              properties:
     *                                  id:
     *                                      type: integer
     *                                      description: The category ID.
     *                                      example: 1
     *                                  name:
     *                                      type: string
     *                                      description: The category name
     *                                      example: PHP
     */

    router.put("/:id", category.update)

    /**
     * @swagger
     * /api/categories/{id}:
     *      delete:
     *          tags:
     *          - categories
     *          summary: Retrieve a category by ID.
     *          description: Retrieve a category by ID
     *          parameters:
     *            - in: path
     *              name: id
     *              schema:
     *                  type: integer
     *              required: true
     *              description: Numeric ID of the category to get
     *          responses:
     *              200:
     *                  description: Category deleted successfully
     *                  content:
     *                      application/json:
     *                          schema:
     *                              type: object
     *                              properties:
     *                                  message:
     *                                      type: string
     *                                      description: HTTP status.
     *                                      example: Category deleted successfully.
     *              500:
     *                  description: Some error occurred while deleting the category
     *                  content:
     *                      application/json:
     *                          schema:
     *                              type: object
     *                              properties:
     *                                  message:
     *                                      type: string
     *                                      description: HTTP status.
     *                                      example: Some error occurred while deleting the category.
     */

    router.delete("/:id", category.delete)

    /**
     * @swagger
     * /api/categories/findAllByName/{name}:
     *      get:
     *          tags:
     *          - categories
     *          summary: Retrieve a category(ies) by name.
     *          description: Retrieve a category(ies) by name
     *          parameters:
     *            - in: path
     *              name: name
     *              schema:
     *                  type: string
     *              required: true
     *              description: Category(ies) to get by name
     *          responses:
     *              200:
     *                  description: Category(ies) to get
     *                  content:
     *                      application/json:
     *                          schema:
     *                              type: object
     *                              properties:
     *                                  id:
     *                                      type: integer
     *                                      description: The category ID.
     *                                      example: 1
     *                                  name:
     *                                      type: string
     *                                      description: The categories name
     *                                      example: Java
     *              204:
     *                  description: No Content
     */

    router.get("/findAllByName/:name", category.findAllByName)

    app.use("/api/categories", router)
}