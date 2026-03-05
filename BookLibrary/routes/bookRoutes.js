const express = require("express")
const middleware = require("../middleware/authMiddleware")

const {
 addBook,
 getBooks,
 updateBook,
 deleteBook
} = require("../controllers/bookController")

const router = express.Router()
console.log("route hit");
router.post("/",middleware,addBook)
router.get("/",middleware,getBooks)
router.put("/:id",middleware,updateBook)
router.delete("/:id",middleware,deleteBook)

module.exports = router