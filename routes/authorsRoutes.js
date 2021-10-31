/**
 * @swagger
 * components:
 *      schemas:
 *          Authors:
 *              type: object
 *              required:
 *                  - name
 *              properties:
 *                  id:
 *                      type: integer
 *                      description: The auto-generated ID of the author.
 *                  name:
 *                      type: string
 *                      description: The fullname of author.
 *              example:
 *                  id: 1
 *                  name: Kirill Goritski
 */

module.exports = app => {
    const authors = require("../controllers/authorsController")
    const router = require("express").Router()
    
    /**
    * @swagger
    * /api/authors:
    *      get:
    *          tags:
    *          - authors
    *          summary: Retrieve a list of authors.
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
     *                                      description: The auto-generated ID of the author.
     *                                      example: 1
     *                                  name:
     *                                      type: string
     *                                      description: The author's name.
     *                                      example: Kirill Goritski
    */
    
    router.get("/", authors.findAll)


    /**
     * @swagger
     * /api/authors/{id}:
     *      get:
     *          tags:
     *          - authors
     *          summary: Retrieve the author by ID.
     *          parameters:
     *            - in: path
     *              name: id
     *              schema:
     *                  type: integer
     *              required: true
     *              description: Numeric ID of the author to get
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
     *                                      description: The auto-generated ID of the author.
     *                                      example: 1
     *                                  name:
     *                                      type: string
     *                                      description: The author's name.
     *                                      example: Kirill Goritski
     *              404:
     *                  description: Not found
     */

    router.get("/:id", authors.findOneById)

    /**
     * @swagger
     * /api/authors:
     *      post:
     *          tags:
     *          - authors
     *          summary: Add a new author to the database.
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
     *                                  description: The author's fullname.
     *                                  example: Kirill Goritski
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
     *                                      description: The auto-generated ID of the author.
     *                                      example: 1
     *                                  name:
     *                                      type: string
     *                                      description: The author's name.
     *                                      example: Kirill Goritski
     *              400:
     *                  description: Invalid input
     */

    router.post("/", authors.create)

    /**
     * @swagger
     * /api/authors/{id}:
     *      put:
     *          tags:
     *          - authors
     *          consumes:
     *            - application/json
     *          summary: Update the author data by ID.
     *          parameters:
     *            - in: path
     *              name: id
     *              schema:
     *                  type: integer
     *              required: true
     *              description: Numeric ID of the author to update
     *          requestBody:
     *              required: true
     *              content:
     *                  application/json:
     *                      schema:
     *                          type: object
     *                          properties:
     *                              name:
     *                                  type: string
     *                                  description: The author's name.
     *                                  example: Kirill Goritski
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
     *                                      description: The auto-generated ID of the author.
     *                                      example: 1
     *                                  name:
     *                                      type: string
     *                                      description: The author's name.
     *                                      example: Kirill Goritski
     *              400:
     *                  description: Invalid status supplier
     *              404:
     *                  description: Not found
     */

    router.put("/:id", authors.update)

    /**
     * @swagger
     * /api/authors/{id}:
     *      delete:
     *          tags:
     *          - authors
     *          summary: Delete the author by ID.
     *          parameters:
     *            - in: path
     *              name: id
     *              schema:
     *                  type: integer
     *              required: true
     *              description: Numeric ID of the user to get
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
     *                                      description: The auto-generated ID of the author.
     *                                      example: 1
     *                                  name:
     *                                      type: string
     *                                      description: The author's name.
     *                                      example: Kirill Goritski
     *              400:
     *                  description: Invalid status supplier
     *              404:
     *                  description: Not found
     */

    router.delete("/:id", authors.delete)


    /**
     * @swagger
     * /api/authors/findAllByName/{name}:
     *      get:
     *          tags:
     *          - authors
     *          summary: Retrieve author(s) by name.
     *          parameters:
     *            - in: path
     *              name: name
     *              schema:
     *                  type: string
     *              required: true
     *              description: Author(s) to get by name
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
     *                                      description: The auto-generated ID of the author.
     *                                      example: 1
     *                                  name:
     *                                      type: string
     *                                      description: The author's name.
     *                                      example: Kirill Goritski
     *              400:
     *                  description: Invalid status value
     *              404:
     *                  description: Not found
     */

    router.get("/findAllByName/:name", authors.findAllByName)
    app.use("/api/authors", router)
}