const mongoose = require("mongoose");

const movieSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  year: String,
  actor: String,
  actress: String,
  director: String,
  languages: Array,
});

module.exports = mongoose.model("Movie", movieSchema);
