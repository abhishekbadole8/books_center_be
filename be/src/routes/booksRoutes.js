const express = require("express");
const router = express.Router();
const {
  getBooks,
  getBook,
  addBook,
  deleteBook,
  updateBook,
} = require("../controllers/booksController");

router.get("/", getBooks);
router.get("/:id", getBook);
router.post("/", addBook);
router.delete("/:id", deleteBook);
router.put("/:id", updateBook);

module.exports = router;
