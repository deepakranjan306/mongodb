const express = require("express");
const router = express.Router();
const movieModel = require("../models/Movie");

router.get("/", async (req, res) => {
  try {
    const movies = await movieModel.find();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/movie/:id", async (req, res) => {
  try {
    const movie = await movieModel.findById(req.params.id);
    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/post", async (req, res) => {
  try {
    const movie = new movieModel({
      title: req.body.title,
      description: req.body.description,
      year: req.body.year,
      actor: req.body.actor,
      actress: req.body.actress,
      director: req.body.director,
      languages: req.body.languages,
    });

    const savedMovie = await movie.save();
    res.status(201).json(savedMovie);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.patch("/movie/:id", async (req, res) => {
  try {
    const updatedMovie = await movieModel.updateOne(
      { _id: req.params.id },
      { $set: { title: req.body.title } }
    );
    res.status(200).json(updatedMovie);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.delete("/movie/:id", async (req, res) => {
  try {
    const removedMovie = await movieModel.deleteOne({ _id: req.params.id });
    res.status(200).json(removedMovie);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
