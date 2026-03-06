const express = require("express")
const middleware = require("../middleware/authMiddleware")

const {
 addBook,
 getBooks,
 updateBook,
 deleteBook,filterBooks
} = require("../controllers/bookController")
console.log("route run");
const router = express.Router();
router.post("/",middleware,addBook);
router.get("/",middleware,getBooks);
router.put("/:id",middleware,updateBook);
router.delete("/:id",middleware,deleteBook);

router.get("/filter",middleware,filterBooks);


module.exports = router