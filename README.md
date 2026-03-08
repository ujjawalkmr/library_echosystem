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

 library_echosystem/BookLibrary
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
 
 URLs:
  * https://library-echosystem.vercel.app/api/auth/signup
  * https://library-echosystem.vercel.app/api/auth/login
  * https://library-echosystem.vercel.app/api/books --> get book
  * https://library-echosystem.vercel.app/api/:id  --> update
  * https://library-echosystem.vercel.app/api/:id  --> delete
  * https://library-echosystem.vercel.app/api/filter  --> filter





Personal Book Manager - Frontend
Overview
  This is the frontend of the Personal Book Manager project, built using Next.js (App Router) with Tailwind CSS for styling.

It provides a responsive, user-friendly interface to:
  * Sign up, log in, and log out securely
  * View, add, edit, and delete books
  * Filter books by status or tags
  * View dashboard stats (total books, reading status, etc.)
The frontend communicates with a Node.js + Express backend via REST APIs using JWT authentication.


Tech Stack:
  * Next.js (App Router) – React framework for frontend
  * Tailwind CSS – Modern utility-first CSS framework
  * React Hot Toast – Notifications for success/error
  * Fetch API / API Service Module – Handles API requests
  * Environment Variables – NEXT_PUBLIC_BASEURL for API URL


  library/
│
├─ src/
│   ├─ app/
│   │   ├─ layout.js         # Root layout with Navbar
│   │   ├─ page.js           # Home page
│   │   ├─ dashboard/
│   │   │   └─ page.js       # Dashboard page with books, filter, stats
│   │   ├─ login/
│   │   │   └─ page.js       # Login page
│   │   ├─ signup/
│   │   │   └─ page.js       # Signup page
│   │   └─ globals.css       # Global Tailwind CSS
│   │
│   ├─ components/
│   │   ├─ Navbar.js          # Navigation bar
│   │   ├─ BookCard.js        # Book display card with edit/delete
│   │   ├─ BookForm.js        # Add/Edit book form
│   │   ├─ FilterBar.js       # Filter books by status/tags
│   │   └─ StatsCards.js      # Dashboard stats
│   │
│   └─ services/
│       └─ api.js            # API calls to backend
│
├─ .env.local                # Environment variable: NEXT_PUBLIC_BASEURL
├─ package.json
└─ next.config.js

Key Features / Pages
 * Navbar
 * Shows Book Manager on the left
 * Links to Home, Dashboard, Login, Sign Up
 * Conditional display based on authentication
 Home Page
  * Simple landing page with app description
 Login / Signup
  * Forms with email and password fields
  * On successful login/signup, JWT token is stored in localStorage
  * Shows toast notifications for success/error
 Dashboard
  * Lists all books for logged-in user
  * Add, edit, delete books using forms and modals
  * Filter books by status (Want to Read, Reading, Completed) and tags
  * Shows statistics (total books, books by status)
 Book Management
  * BookForm.js handles add/edit books
  * BookCard.js displays book info and actions
  * FilterBar.js filters books dynamically

  URL:
   * https://library-echosystem-frontend.vercel.app
