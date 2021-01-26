const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const moviesRoutes = require("./routes/movies");
require("dotenv").config();

app.use(bodyParser.json());

// connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to DB :)");
  }
);

app.use("/api/movies", moviesRoutes);

const PORT = process.env.port || 3000;
app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
