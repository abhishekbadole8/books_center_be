const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 5000;
const connectDb = require("./src/config/dbConnection");

const booksRoute = require("./src/routes/booksRoutes");

connectDb();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/books", booksRoute);

app.listen(port, () => {
  console.log(`server conntected to port ${port}`);
});
