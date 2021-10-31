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
 *                      description: The auto-generated id of the author.
 *                  name:
 *                      type: string
 *                      description: The fullname of author.
 *              example:
 *                  name: Kirill Goritski
 */

const category = require("../controllers/categoryController");
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
    *          description: Retrieve a list of authors
    *          responses:
    *              200:
    *                  description: A list of authors
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
    *                                       description: The author's fullname
    *                                       example: Kirill Goritski
    */
    
    router.get("/", authors.findAll)


    /**
     * @swagger
     * /api/authors/{id}:
     *      get:
     *          tags:
     *          - authors
     *          summary: Retrieve a single author by ID.
     *          description: Retrieve a single author by ID
     *          parameters:
     *            - in: path
     *              name: id
     *              schema:
     *                  type: integer
     *              required: true
     *              description: Numeric ID of the author to get
     *          responses:
     *              200:
     *                  description: Numeric ID of the author to get
     *                  content:
     *                      application/json:
     *                          schema:
     *                              type: object
     *                              properties:
     *                                  id:
     *                                      type: integer
     *                                      description: The author ID.
     *                                      example: 1
     *                                  name:
     *                                      type: string
     *                                      description: The author's fullname
     *                                      example: Kirill Goritski
     */

    router.get("/:id", authors.findOneById)

    /**
    * @swagger
    * /api/authors:
    *      post:
    *          tags:
    *          - authors
    *          summary: Add a new author to the database.
    *          description: Add a new author to the database
    *          requestBody:
    *              required: true
    *              content:
    *                  application/json:
    *                      schema:
    *                          type: object
    *                          properties:
    *                              name:
    *                                  type: string
    *                                  description: The author's fullname.
    *                                  example: Kirill Goritski
    *          responses:
    *              200:
    *                  description: Author has been created successfully
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
    *                                      description: The author's fullname
    *                                      example: Kirill Goritski
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
     *          description: Update the author data by ID
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
     *                  description: Numeric ID of the author to update
     *                  content:
     *                      application/json:
     *                          schema:
     *                              type: object
     *                              properties:
     *                                  message:
     *                                      example: Author updated successfully
     *              204:
     *                  description: No content
     */

    router.put("/:id", authors.update)

    /**
     * @swagger
     * /api/authors/{id}:
     *      delete:
     *          tags:
     *          - authors
     *          summary: Retrieve a single author by ID.
     *          description: Retrieve a single author by ID
     *          parameters:
     *            - in: path
     *              name: id
     *              schema:
     *                  type: integer
     *              required: true
     *              description: Numeric ID of the user to get
     *          responses:
     *              200:
     *                  description: Author deleted successfully
     *                  content:
     *                      application/json:
     *                          schema:
     *                              type: object
     *                              properties:
     *                                  message:
     *                                      type: string
     *                                      description: HTTP status.
     *                                      example: Author deleted successfully.
     *              500:
     *                  description: Some error occurred while deleting the author
     *                  content:
     *                      application/json:
     *                          schema:
     *                              type: object
     *                              properties:
     *                                  message:
     *                                      type: string
     *                                      description: HTTP status.
     *                                      example: Some error occurred while deleting the author.
     */

    router.delete("/:id", authors.delete)


    /**
     * @swagger
     * /api/authors/findAllByName/{name}:
     *      get:
     *          tags:
     *          - authors
     *          summary: Retrieve a author(s) by name.
     *          description: Retrieve a author(s) by name
     *          parameters:
     *            - in: path
     *              name: name
     *              schema:
     *                  type: string
     *              required: true
     *              description: Author(s) to get by name
     *          responses:
     *              200:
     *                  description: Author(s) to get
     *                  content:
     *                      application/json:
     *                          schema:
     *                              type: object
     *                              properties:
     *                                  id:
     *                                      type: integer
     *                                      description: The author ID.
     *                                      example: 1
     *                                  name:
     *                                      type: string
     *                                      description: The author(s) name
     *                                      example: Kirill Goritski
     *              204:
     *                  description: No Content
     */

    router.get("/findAllByName/:name", authors.findAllByName)
    app.use("/api/authors", router)
}