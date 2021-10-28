/**
 * @swagger
 * components:
 *      schemas:
 *          Authors:
 *              type: object
 *              required:
 *                  -name
 *              properties:
 *                  id:
 *                      type: integer
 *                      desription: The auto-generated id of the author.
 *                  name:
 *                      type: string
 *                      description: The fullname of author.
 *              example:
 *                  name: Kirill Goritski
 */

module.exports = app => {
    const authors = require("../controllers/authorsController")
    const router = require("express").Router()
    
    /**
    * @swagger
    * /api/authors:
    *      get:
    *          summary: Retrieve a list of authors.
    *          description: Retrieve a list of authors
    *          responses:
    *              200:
    *                  description: A list of authors
    *                  content:
    *                      application/json:
    *                          schema:
    *                              type: object
    *                              properties:
    *                                  data:
    *                                      type: array
    *                                      items:
    *                                          type: object
    *                                          properties:
    *                                              id:
    *                                                  type: integer
    *                                                  description: The author ID.
    *                                                  example: 1
    *                                              name:
    *                                                  type: string
    *                                                  description: The author's fullname
    *                                                  example: Kirill Goritski
    */
    
    router.get("/", authors.findAll)

    /**
    * @swagger
    * /api/authors:
    *      post:
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
    *                                  description: The user's name.
    *                                  example: Kirill Goritski
    *          responses:
    *              200:   
    *                  description: Request completed successfully
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
    *                                      description: The user's fullname
    *                                      exmaple: Kirill Goritski
    *              201:   
    *                  description: Author has been created succesfully
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
    *                                      description: The user's fullname
    *                                      exmaple: Kirill Goritski
    */

    router.post("/", authors.create)

    /**
    * @swagger
    * /api/authors/{id}:
    *      get:
    *          summary: Retrieve a single author by id.
    *          description: Retrieve a single author by id
    *          parameters:
    *               - in: path
    *               name: id
    *               required: true
    *               description: Numeric ID of the author to retrieve
    *               schema:
    *                   type: integer
    *          responses:
    *              200:
    *                  description: The author by id
    *                  content:
    *                      application/json:
    *                          schema:
    *                              type: object
    *                              properties:
    *                                  data:
    *                                      type: array
    *                                      items:
    *                                          type: object
    *                                          properties:
    *                                              id:
    *                                                  type: integer
    *                                                  description: The author ID.
    *                                                  example: 1
    *                                              name:
    *                                                  type: string
    *                                                  description: The author's fullname
    *                                                  example: Kirill Goritski
    */
    
     router.get("/:id", authors.findAll)

    app.use("/api/authors", router)
}