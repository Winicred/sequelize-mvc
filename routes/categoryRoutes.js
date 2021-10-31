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
 *                      description: The auto-generated ID of the category.
 *                  name:
 *                      type: string
 *                      description: The name of category.
 *              example:
 *                  id: 1
 *                  name: Java
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
     *          responses:
     *              200:
     *                  description: Success
     *                  content:
     *                      application/json:
     *                          schema:
     *                              required:
     *                                - name
     *                              type: object
     *                              properties:
     *                                  id:
     *                                      type: integer
     *                                      description: The auto-generated ID of the category.
     *                                      example: 1
     *                                  name:
     *                                      type: string
     *                                      description: The name of category.
     *                                      example: Java
     */

    router.get("/", category.findAll)

    /**
     * @swagger
     * /api/categories/{id}:
     *      get:
     *          tags:
     *          - categories
     *          summary: Retrieve the category by ID.
     *          parameters:
     *            - in: path
     *              name: id
     *              schema:
     *                  type: integer
     *              required: true
     *              description: Numeric ID of the category to get
     *          responses:
     *              200:
     *                  description: Success
     *                  content:
     *                      application/json:
     *                          schema:
     *                              required:
     *                                - name
     *                              type: object
     *                              properties:
     *                                  id:
     *                                      type: integer
     *                                      description: The auto-generated ID of the category.
     *                                      example: 1
     *                                  name:
     *                                      type: string
     *                                      description: The name of category.
     *                                      example: Java
     *              404:
     *                  description: Not found
     */

    router.get("/:id", category.findOneById)

    /**
     * @swagger
     * /api/categories:
     *      post:
     *          tags:
     *          - categories
     *          summary: Add a new category to the database.
     *          requestBody:
     *              required: true
     *              content:
     *                  application/json:
     *                      schema:
     *                          required:
     *                            - name
     *                          type: object
     *                          properties:
     *                              name:
     *                                  type: string
     *                                  description: The category name.
     *                                  example: Java
     *          responses:
     *              200:
     *                  description: Success
     *                  content:
     *                      application/json:
     *                          schema:
     *                              required:
     *                                - name
     *                              type: object
     *                              properties:
     *                                  id:
     *                                      type: integer
     *                                      description: The auto-generated ID of the category.
     *                                      example: 1
     *                                  name:
     *                                      type: string
     *                                      description: The name of category.
     *                                      example: Java
     *              400:
     *                  description: Invalid input
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
     *          parameters:
     *            - in: path
     *              name: id
     *              schema:
     *                  type: integer
     *              required: true
     *              description: Numeric ID of the category to update
     *          requestBody:
     *              required: true
     *              schema:
     *                  required:
     *                    - name
     *                  type: object
     *                  properties:
     *                      name:
     *                          type: string
     *                          description: The category name.
     *                          example: Java
     *          responses:
     *              200:
     *                  description: Success
     *                  content:
     *                      application/json:
     *                          schema:
     *                              required:
     *                                - name
     *                              type: object
     *                              properties:
     *                                  id:
     *                                      type: integer
     *                                      description: The auto-generated ID of the category.
     *                                      example: 1
     *                                  name:
     *                                      type: string
     *                                      description: The name of category.
     *                                      example: Java
     *              400:
     *                  description: Invalid input
     *              404:
     *                  description: Not found
     */

    router.put("/:id", category.update)

    /**
     * @swagger
     * /api/categories/{id}:
     *      delete:
     *          tags:
     *          - categories
     *          summary: Delete the category by ID.
     *          parameters:
     *            - in: path
     *              name: id
     *              schema:
     *                  type: integer
     *              required: true
     *              description: Numeric ID of the category to get
     *          responses:
     *              200:
     *                  description: Success
     *                  content:
     *                      application/json:
     *                          schema:
     *                              required:
     *                                - name
     *                              type: object
     *                              properties:
     *                                  id:
     *                                      type: integer
     *                                      description: The auto-generated ID of the category.
     *                                      example: 1
     *                                  name:
     *                                      type: string
     *                                      description: The name of category.
     *                                      example: Java
     *              404:
     *                  description: Not found
     */

    router.delete("/:id", category.delete)

    /**
     * @swagger
     * /api/categories/findAllByName/{name}:
     *      get:
     *          tags:
     *          - categories
     *          summary: Retrieve category(ies) by name.
     *          parameters:
     *            - in: path
     *              name: name
     *              schema:
     *                  type: string
     *              required: true
     *              description: Category(ies) to get by name
     *          responses:
     *              200:
     *                  description: Success
     *                  content:
     *                      application/json:
     *                          schema:
     *                              required:
     *                                - name
     *                              type: object
     *                              properties:
     *                                  id:
     *                                      type: integer
     *                                      description: The auto-generated ID of the category.
     *                                      example: 1
     *                                  name:
     *                                      type: string
     *                                      description: The name of category.
     *                                      example: Java
     *              404:
     *                  description: Not found
     */

    router.get("/findAllByName/:name", category.findAllByName)

    app.use("/api/categories", router)
}