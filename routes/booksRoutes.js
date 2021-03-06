/**
 * @swagger
 * components:
 *      schemas:
 *          Books:
 *              type: object
 *              required:
 *                  - title
 *                  - isbn
 *              properties:
 *                  id:
 *                      type: integer
 *                      description: The auto-generated ID of the book.
 *                      example: 1
 *                  title:
 *                      type: string
 *                      description: The book title.
 *                      example: Unlocking Android
 *                  isbn:
 *                      type: string
 *                      description: The book isbn.
 *                      example: 1933988673
 *                  pageCount:
 *                      type: integer
 *                      description: The book page count.
 *                      example: 416
 *                  shortDescription:
 *                      type: string
 *                      description: The book short description..
 *                      example: Unlocking Android - A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical a
 *                  longDescription:
 *                      type: string
 *                      description: The book full description.
 *                      example: Android is an open source mobile phone platform based on the Linux operating system and developed by the Open Handset Alliance, a consortium of over 30 hardware, software and telecom companies that focus on open standards for mobile devices. Led by search giant, Google, Android is designed to deliver a better and more open and cost effective mobile experience.    Unlocking Android - A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical and useful examples throughout. Based on his mobile development experience and his deep knowledge of the arcane Android technical documentation, the author conveys the know-how you need to develop practical applications that build upon or replace any of Androids features, however small.    Unlocking Android - A Developer's Guide prepares the reader to embrace the platform in easy-to-understand language and builds on this foundation with re-usable Java code examples. It is ideal for corporate and hobbyists alike who have an interest, or a mandate, to deliver software functionality for cell phones.    WHAT'S INSIDE        # Android's place in the market      # Using the Eclipse environment for Android development      # The Intents - how and why they are used      # Application classes            o Activity            o Service            o IntentReceiver       # User interface design      # Using the ContentProvider to manage data      # Persisting data with the SQLite database      # Networking examples      # Telephony applications      # Notification methods      # OpenGL, animation & multimedia      # Sample Applications
 *                  publishedDate:
 *                      type: string
 *                      description: The book published date.
 *                      example: 2009-04-01T07:00:00.000Z
 *              example:
 *                  id: 1
 *                  title: Unlocking Android
 *                  isbn: 1933988673
 *                  pageCount: 416
 *                  shortDescription: Unlocking Android - A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical a
 *                  longDescription: Android is an open source mobile phone platform based on the Linux operating system and developed by the Open Handset Alliance, a consortium of over 30 hardware, software and telecom companies that focus on open standards for mobile devices. Led by search giant, Google, Android is designed to deliver a better and more open and cost effective mobile experience.    Unlocking Android - A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical and useful examples throughout. Based on his mobile development experience and his deep knowledge of the arcane Android technical documentation, the author conveys the know-how you need to develop practical applications that build upon or replace any of Androids features, however small.    Unlocking Android - A Developer's Guide prepares the reader to embrace the platform in easy-to-understand language and builds on this foundation with re-usable Java code examples. It is ideal for corporate and hobbyists alike who have an interest, or a mandate, to deliver software functionality for cell phones.    WHAT'S INSIDE        # Android's place in the market      # Using the Eclipse environment for Android development      # The Intents - how and why they are used      # Application classes            o Activity            o Service            o IntentReceiver       # User interface design      # Using the ContentProvider to manage data      # Persisting data with the SQLite database      # Networking examples      # Telephony applications      # Notification methods      # OpenGL, animation & multimedia      # Sample Applications
 *                  publishedDate: 2009-04-01T07:00:00.000Z
 */

module.exports = app => {
    const books = require("../controllers/booksController")
    const router = require("express").Router()

    /**
     * @swagger
     * /api/books:
     *      get:
     *          tags:
     *          - books
     *          summary: Retrieve a list of books.
     *          responses:
     *              200:
     *                  description: Success
     *                  content:
     *                      application/json:
     *                          schema:
     *                              required:
     *                                - title
     *                                - isbn
     *                              type: object
     *                              properties:
     *                                  id:
     *                                      type: integer
     *                                      description: The auto-generated ID of the book.
     *                                      example: 1
     *                                  title:
     *                                      type: string
     *                                      description: The book title.
     *                                      example: Unlocking Android
     *                                  isbn:
     *                                      type: string
     *                                      description: The book isbn.
     *                                      example: 1933988673
     *                                  pageCount:
     *                                      type: integer
     *                                      description: The book page count.
     *                                      example: 416
     *                                  shortDescription:
     *                                      type: string
     *                                      description: The book short description.
     *                                      example: Unlocking Android - A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical a
     *                                  longDescription:
     *                                      type: string
     *                                      description: The book full description.
     *                                      example: Android is an open source mobile phone platform based on the Linux operating system and developed by the Open Handset Alliance, a consortium of over 30 hardware, software and telecom companies that focus on open standards for mobile devices. Led by search giant, Google, Android is designed to deliver a better and more open and cost effective mobile experience.    Unlocking Android - A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical and useful examples throughout. Based on his mobile development experience and his deep knowledge of the arcane Android technical documentation, the author conveys the know-how you need to develop practical applications that build upon or replace any of Androids features, however small.    Unlocking Android - A Developer's Guide prepares the reader to embrace the platform in easy-to-understand language and builds on this foundation with re-usable Java code examples. It is ideal for corporate and hobbyists alike who have an interest, or a mandate, to deliver software functionality for cell phones.    WHAT'S INSIDE        # Android's place in the market      # Using the Eclipse environment for Android development      # The Intents - how and why they are used      # Application classes            o Activity            o Service            o IntentReceiver       # User interface design      # Using the ContentProvider to manage data      # Persisting data with the SQLite database      # Networking examples      # Telephony applications      # Notification methods      # OpenGL, animation & multimedia      # Sample Applications
     *                                  publishedDate:
     *                                      type: string
     *                                      description: The book published date.
     *                                      example: 2009-04-01T07:00:00.000Z
     */

    router.get("/", books.findAll)


    /**
     * @swagger
     * /api/books/{id}:
     *      get:
     *          tags:
     *          - books
     *          summary: Retrieve the book by ID.
     *          parameters:
     *            - in: path
     *              name: id
     *              schema:
     *                  type: integer
     *              required: true
     *              description: Numeric ID of the book to get
     *          responses:
     *              200:
     *                  description: Success
     *                  content:
     *                      application/json:
     *                          schema:
     *                              required:
     *                                - title
     *                                - isbn
     *                              type: object
     *                              properties:
     *                                  id:
     *                                      type: integer
     *                                      description: The auto-generated ID of the book.
     *                                      example: 1
     *                                  title:
     *                                      type: string
     *                                      description: The book title.
     *                                      example: Unlocking Android
     *                                  isbn:
     *                                      type: string
     *                                      description: The book isbn.
     *                                      example: 1933988673
     *                                  pageCount:
     *                                      type: integer
     *                                      description: The book page count.
     *                                      example: 416
     *                                  shortDescription:
     *                                      type: string
     *                                      description: The book short description.
     *                                      example: Unlocking Android - A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical a
     *                                  longDescription:
     *                                      type: string
     *                                      description: The book full description.
     *                                      example: Android is an open source mobile phone platform based on the Linux operating system and developed by the Open Handset Alliance, a consortium of over 30 hardware, software and telecom companies that focus on open standards for mobile devices. Led by search giant, Google, Android is designed to deliver a better and more open and cost effective mobile experience.    Unlocking Android - A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical and useful examples throughout. Based on his mobile development experience and his deep knowledge of the arcane Android technical documentation, the author conveys the know-how you need to develop practical applications that build upon or replace any of Androids features, however small.    Unlocking Android - A Developer's Guide prepares the reader to embrace the platform in easy-to-understand language and builds on this foundation with re-usable Java code examples. It is ideal for corporate and hobbyists alike who have an interest, or a mandate, to deliver software functionality for cell phones.    WHAT'S INSIDE        # Android's place in the market      # Using the Eclipse environment for Android development      # The Intents - how and why they are used      # Application classes            o Activity            o Service            o IntentReceiver       # User interface design      # Using the ContentProvider to manage data      # Persisting data with the SQLite database      # Networking examples      # Telephony applications      # Notification methods      # OpenGL, animation & multimedia      # Sample Applications
     *                                  publishedDate:
     *                                      type: string
     *                                      description: The book published date.
     *                                      example: 2009-04-01T07:00:00.000Z
     *              404:
     *                  description: Not found
     */

    router.get("/:id", books.findOne)

    /**
     * @swagger
     * /api/books:
     *      post:
     *          tags:
     *          - books
     *          summary: Add a new book to the database.
     *          requestBody:
     *              required: true
     *              content:
     *                  application/json:
     *                      schema:
     *                          type: object
     *                          required:
     *                            - title
     *                            - isbn
     *                          properties:
     *                              title:
     *                                  type: string
     *                                  description: The book title.
     *                                  example: Unlocking Android
     *                              isbn:
     *                                  type: string
     *                                  description: The book isbn.
     *                                  example: 1933988673
     *                              pageCount:
     *                                  type: integer
     *                                  description: The book page count.
     *                                  example: 416
     *                              shortDescription:
     *                                  type: string
     *                                  description: The book short description.
     *                                  example: Unlocking Android - A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical a
     *                              longDescription:
     *                                  type: string
     *                                  description: The book full description.
     *                                  example: Android is an open source mobile phone platform based on the Linux operating system and developed by the Open Handset Alliance, a consortium of over 30 hardware, software and telecom companies that focus on open standards for mobile devices. Led by search giant, Google, Android is designed to deliver a better and more open and cost effective mobile experience.    Unlocking Android - A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical and useful examples throughout. Based on his mobile development experience and his deep knowledge of the arcane Android technical documentation, the author conveys the know-how you need to develop practical applications that build upon or replace any of Androids features, however small.    Unlocking Android - A Developer's Guide prepares the reader to embrace the platform in easy-to-understand language and builds on this foundation with re-usable Java code examples. It is ideal for corporate and hobbyists alike who have an interest, or a mandate, to deliver software functionality for cell phones.    WHAT'S INSIDE        # Android's place in the market      # Using the Eclipse environment for Android development      # The Intents - how and why they are used      # Application classes            o Activity            o Service            o IntentReceiver       # User interface design      # Using the ContentProvider to manage data      # Persisting data with the SQLite database      # Networking examples      # Telephony applications      # Notification methods      # OpenGL, animation & multimedia      # Sample Applications
     *                              publishedDate:
     *                                  type: string
     *                                  description: The book published date.
     *                                  example: 2009-04-01T07:00:00.000Z
     *          responses:
     *              200:
     *                  description: Success
     *                  content:
     *                      application/json:
     *                          schema:
     *                              required:
     *                                - title
     *                                - isbn
     *                              type: object
     *                              properties:
     *                                  id:
     *                                      type: integer
     *                                      description: The auto-generated ID of the book.
     *                                      example: 1
     *                                  title:
     *                                      type: string
     *                                      description: The book title.
     *                                      example: Unlocking Android
     *                                  isbn:
     *                                      type: string
     *                                      description: The book isbn.
     *                                      example: 1933988673
     *                                  pageCount:
     *                                      type: integer
     *                                      description: The book page count.
     *                                      example: 416
     *                                  shortDescription:
     *                                      type: string
     *                                      description: The book short description.
     *                                      example: Unlocking Android - A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical a
     *                                  longDescription:
     *                                      type: string
     *                                      description: The book full description.
     *                                      example: Android is an open source mobile phone platform based on the Linux operating system and developed by the Open Handset Alliance, a consortium of over 30 hardware, software and telecom companies that focus on open standards for mobile devices. Led by search giant, Google, Android is designed to deliver a better and more open and cost effective mobile experience.    Unlocking Android - A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical and useful examples throughout. Based on his mobile development experience and his deep knowledge of the arcane Android technical documentation, the author conveys the know-how you need to develop practical applications that build upon or replace any of Androids features, however small.    Unlocking Android - A Developer's Guide prepares the reader to embrace the platform in easy-to-understand language and builds on this foundation with re-usable Java code examples. It is ideal for corporate and hobbyists alike who have an interest, or a mandate, to deliver software functionality for cell phones.    WHAT'S INSIDE        # Android's place in the market      # Using the Eclipse environment for Android development      # The Intents - how and why they are used      # Application classes            o Activity            o Service            o IntentReceiver       # User interface design      # Using the ContentProvider to manage data      # Persisting data with the SQLite database      # Networking examples      # Telephony applications      # Notification methods      # OpenGL, animation & multimedia      # Sample Applications
     *                                  publishedDate:
     *                                      type: string
     *                                      description: The book published date.
     *                                      example: 2009-04-01T07:00:00.000Z
     *              400:
     *                  description: Invalid input
     */

    router.post("/", books.create)

    /**
     * @swagger
     * /api/books/{id}:
     *      put:
     *          tags:
     *          - books
     *          consumes:
     *            - application/json
     *          summary: Update the book data by ID.
     *          parameters:
     *            - in: path
     *              name: id
     *              schema:
     *                  type: integer
     *              required: true
     *              description: Numeric ID of the book to update
     *          requestBody:
     *              required: true
     *              content:
     *                  application/json:
     *                      schema:
     *                          type: object
     *                          properties:
     *                              id:
     *                                  type: integer
     *                                  description: The auto-generated ID of the book.
     *                                  example: 1
     *                              title:
     *                                  type: string
     *                                  description: The book title.
     *                                  example: Unlocking Android
     *                              isbn:
     *                                  type: string
     *                                  description: The book isbn.
     *                                  example: 1933988673
     *                              pageCount:
     *                                  type: integer
     *                                  description: The book page count.
     *                                  example: 416
     *                              shortDescription:
     *                                  type: string
     *                                  description: The book short description.
     *                                  example: Unlocking Android - A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical a
     *                              longDescription:
     *                                  type: string
     *                                  description: The book full description.
     *                                  example: Android is an open source mobile phone platform based on the Linux operating system and developed by the Open Handset Alliance, a consortium of over 30 hardware, software and telecom companies that focus on open standards for mobile devices. Led by search giant, Google, Android is designed to deliver a better and more open and cost effective mobile experience.    Unlocking Android - A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical and useful examples throughout. Based on his mobile development experience and his deep knowledge of the arcane Android technical documentation, the author conveys the know-how you need to develop practical applications that build upon or replace any of Androids features, however small.    Unlocking Android - A Developer's Guide prepares the reader to embrace the platform in easy-to-understand language and builds on this foundation with re-usable Java code examples. It is ideal for corporate and hobbyists alike who have an interest, or a mandate, to deliver software functionality for cell phones.    WHAT'S INSIDE        # Android's place in the market      # Using the Eclipse environment for Android development      # The Intents - how and why they are used      # Application classes            o Activity            o Service            o IntentReceiver       # User interface design      # Using the ContentProvider to manage data      # Persisting data with the SQLite database      # Networking examples      # Telephony applications      # Notification methods      # OpenGL, animation & multimedia      # Sample Applications
     *                              publishedDate:
     *                                  type: string
     *                                  description: The book published date.
     *                                  example: 2009-04-01T07:00:00.000Z
     *          responses:
     *              200:
     *                  description: Success
     *                  content:
     *                      application/json:
     *                          schema:
     *                              required:
     *                                - title
     *                                - isbn
     *                              type: object
     *                              properties:
     *                                  id:
     *                                      type: integer
     *                                      description: The auto-generated ID of the book.
     *                                      example: 1
     *                                  title:
     *                                      type: string
     *                                      description: The book title.
     *                                      example: Unlocking Android
     *                                  isbn:
     *                                      type: string
     *                                      description: The book isbn.
     *                                      example: 1933988673
     *                                  pageCount:
     *                                      type: integer
     *                                      description: The book page count.
     *                                      example: 416
     *                                  shortDescription:
     *                                      type: string
     *                                      description: The book short description.
     *                                      example: Unlocking Android - A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical a
     *                                  longDescription:
     *                                      type: string
     *                                      description: The book full description.
     *                                      example: Android is an open source mobile phone platform based on the Linux operating system and developed by the Open Handset Alliance, a consortium of over 30 hardware, software and telecom companies that focus on open standards for mobile devices. Led by search giant, Google, Android is designed to deliver a better and more open and cost effective mobile experience.    Unlocking Android - A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical and useful examples throughout. Based on his mobile development experience and his deep knowledge of the arcane Android technical documentation, the author conveys the know-how you need to develop practical applications that build upon or replace any of Androids features, however small.    Unlocking Android - A Developer's Guide prepares the reader to embrace the platform in easy-to-understand language and builds on this foundation with re-usable Java code examples. It is ideal for corporate and hobbyists alike who have an interest, or a mandate, to deliver software functionality for cell phones.    WHAT'S INSIDE        # Android's place in the market      # Using the Eclipse environment for Android development      # The Intents - how and why they are used      # Application classes            o Activity            o Service            o IntentReceiver       # User interface design      # Using the ContentProvider to manage data      # Persisting data with the SQLite database      # Networking examples      # Telephony applications      # Notification methods      # OpenGL, animation & multimedia      # Sample Applications
     *                                  publishedDate:
     *                                      type: string
     *                                      description: The book published date.
     *                                      example: 2009-04-01T07:00:00.000Z
     *              400:
     *                  description: Invalid input
     *              404:
     *                  description: Not found
     */

    router.put("/:id", books.update)

    /**
     * @swagger
     * /api/books/{id}:
     *      delete:
     *          tags:
     *          - books
     *          summary: Delete the book by ID.
     *          parameters:
     *            - in: path
     *              name: id
     *              schema:
     *                  type: integer
     *              required: true
     *              description: Numeric ID of the book to get
     *          responses:
     *              200:
     *                  description: Success
     *                  content:
     *                      application/json:
     *                          schema:
     *                              required:
     *                                - title
     *                                - isbn
     *                              type: object
     *                              properties:
     *                                  id:
     *                                      type: integer
     *                                      description: The auto-generated ID of the book.
     *                                      example: 1
     *                                  title:
     *                                      type: string
     *                                      description: The book title.
     *                                      example: Unlocking Android
     *                                  isbn:
     *                                      type: string
     *                                      description: The book isbn.
     *                                      example: 1933988673
     *                                  pageCount:
     *                                      type: integer
     *                                      description: The book page count.
     *                                      example: 416
     *                                  shortDescription:
     *                                      type: string
     *                                      description: The book short description.
     *                                      example: Unlocking Android - A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical a
     *                                  longDescription:
     *                                      type: string
     *                                      description: The book full description.
     *                                      example: Android is an open source mobile phone platform based on the Linux operating system and developed by the Open Handset Alliance, a consortium of over 30 hardware, software and telecom companies that focus on open standards for mobile devices. Led by search giant, Google, Android is designed to deliver a better and more open and cost effective mobile experience.    Unlocking Android - A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical and useful examples throughout. Based on his mobile development experience and his deep knowledge of the arcane Android technical documentation, the author conveys the know-how you need to develop practical applications that build upon or replace any of Androids features, however small.    Unlocking Android - A Developer's Guide prepares the reader to embrace the platform in easy-to-understand language and builds on this foundation with re-usable Java code examples. It is ideal for corporate and hobbyists alike who have an interest, or a mandate, to deliver software functionality for cell phones.    WHAT'S INSIDE        # Android's place in the market      # Using the Eclipse environment for Android development      # The Intents - how and why they are used      # Application classes            o Activity            o Service            o IntentReceiver       # User interface design      # Using the ContentProvider to manage data      # Persisting data with the SQLite database      # Networking examples      # Telephony applications      # Notification methods      # OpenGL, animation & multimedia      # Sample Applications
     *                                  publishedDate:
     *                                      type: string
     *                                      description: The book published date.
     *                                      example: 2009-04-01T07:00:00.000Z
     *              404:
     *                  description: Not found
     */

    router.delete("/:id", books.delete)

    /**
     * @swagger
     * /api/books/findAllByTitle/{title}:
     *      get:
     *          tags:
     *          - books
     *          summary: Retrieve book(s) by title.
     *          parameters:
     *            - in: path
     *              name: title
     *              schema:
     *                  type: string
     *              required: true
     *              description: Book(s) to get by title
     *          responses:
     *              200:
     *                  description: Success
     *                  content:
     *                      application/json:
     *                          schema:
     *                              required:
     *                                - title
     *                                - isbn
     *                              type: object
     *                              properties:
     *                                  id:
     *                                      type: integer
     *                                      description: The auto-generated ID of the book.
     *                                      example: 1
     *                                  title:
     *                                      type: string
     *                                      description: The book title.
     *                                      example: Unlocking Android
     *                                  isbn:
     *                                      type: string
     *                                      description: The book isbn.
     *                                      example: 1933988673
     *                                  pageCount:
     *                                      type: integer
     *                                      description: The book page count.
     *                                      example: 416
     *                                  shortDescription:
     *                                      type: string
     *                                      description: The book short description.
     *                                      example: Unlocking Android - A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical a
     *                                  longDescription:
     *                                      type: string
     *                                      description: The book full description.
     *                                      example: Android is an open source mobile phone platform based on the Linux operating system and developed by the Open Handset Alliance, a consortium of over 30 hardware, software and telecom companies that focus on open standards for mobile devices. Led by search giant, Google, Android is designed to deliver a better and more open and cost effective mobile experience.    Unlocking Android - A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical and useful examples throughout. Based on his mobile development experience and his deep knowledge of the arcane Android technical documentation, the author conveys the know-how you need to develop practical applications that build upon or replace any of Androids features, however small.    Unlocking Android - A Developer's Guide prepares the reader to embrace the platform in easy-to-understand language and builds on this foundation with re-usable Java code examples. It is ideal for corporate and hobbyists alike who have an interest, or a mandate, to deliver software functionality for cell phones.    WHAT'S INSIDE        # Android's place in the market      # Using the Eclipse environment for Android development      # The Intents - how and why they are used      # Application classes            o Activity            o Service            o IntentReceiver       # User interface design      # Using the ContentProvider to manage data      # Persisting data with the SQLite database      # Networking examples      # Telephony applications      # Notification methods      # OpenGL, animation & multimedia      # Sample Applications
     *                                  publishedDate:
     *                                      type: string
     *                                      description: The book published date.
     *                                      example: 2009-04-01T07:00:00.000Z
     *              404:
     *                  description: Not found
     */

    router.get("/findAllByTitle/:name", books.findAllByName)

    app.use("/api/books", router)
}