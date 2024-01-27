const Book = require("../models/bookModel");

// @desc Create a new product
// @route POST api/products
// @access Private

const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server error" });
  }
};

// @desc Get a single book by ID
// @route GET /api/books/:id
// @access Public
const getBook = async (req, res) => {
  const bookId = req.params.id;

  try {
    const book = await Book.findById(bookId);

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json(book);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server error" });
  }
};

// @desc Create a new book
// @route POST /api/books
// @access Private
const addBook = async (req, res) => {
  try {
    const { author, year, title } = req.body;
    if (!author || !year || !title) {
      return res.status(400).json({ message: "All field's are mandatory" });
    }
    const savedBook = await Book.create({
      title,
      author,
      year,
    });

    res
      .status(201)
      .json({ message: "Book added successfully", book: savedBook });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server error" });
  }
};

// @desc Update a book
// @route PUT /api/books/:id
// @access Private
const updateBook = async (req, res) => {
  const bookId = req.params.id;

  try {
    const existingBook = await Book.findById(bookId);

    if (!existingBook) {
      return res.status(404).json({ message: "Book not found" });
    }

    // Update the existing book with the new data
    existingBook.set(req.body);
    const updatedBook = await existingBook.save();

    res.json({ message: "Book updated successfully", book: updatedBook });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server error" });
  }
};

// @desc Delete a book
// @route DELETE /api/books/:id
// @access Private
const deleteBook = async (req, res) => {
  const bookId = req.params.id;

  try {
    const deletedBook = await Book.findByIdAndDelete(bookId);

    if (!deletedBook) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.json({ message: "Book deleted successfully", book: deletedBook });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { addBook, getBooks, getBook, updateBook, deleteBook };
