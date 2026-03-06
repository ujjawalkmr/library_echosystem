A monolithic backend for a Personal Book Manager application built with Node.js, Express, MongoDB, and JWT authentication. This backend allows users to securely sign up, log in, and manage their personal collection of books.

Features:

 1. Authentication
    Sign up, login, logout

 2. JWT-based authentication
    Protected routes to secure user data

 3. Book Management
    Add, edit, delete books
    Track book status: Want to Read, Reading, Completed (from /api)
    Filter books by tag or status  

 4. User Dashboard
    Retrieve all books for a user
    View summary statistics (total books, reading status)
    Mark books as read, reading, or completed
    (for this use get book, update book)

Tech Stack:
 * Backend: Node.js + Express
 * Database: MongoDB
 * Authentication: JWT
 * Middleware: CORS, JSON body parser

 library_echosystem/
├─ app.js                  # Main Express app
├─ server.js               # Server entry point
├─ routes/
│  ├─ authRoutes.js        # Auth routes (signup/login)
│  └─ bookRoutes.js        # Book routes (CRUD)
├─ controllers/
│  ├─ authController.js
│  └─ bookController.js
├─ models/
│  ├─ userModel.js
│  └─ bookModel.js
├─ middleware/
│  └─ authMiddleware.js    # JWT protection
├─ utils/
│  └─ generateToken.js     # JWT token generator
├─ package.json
└─ README.md
