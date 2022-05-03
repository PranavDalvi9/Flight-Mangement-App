const express = require("express");

const router = express.Router();

const Airport = require("../models/Airport");

router.post("", async (req, res) => {
  try {
    const airport = await Airport.create(req.body);
    return res.status(200).send(airport);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.get("", async (req, res) => {
  try {
    const airport = await Airport.find().lean().exec();
    return res.status(200).send(airport);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const airport = await Airport.findByIdAndDelete(req.params.id)
      .lean()
      .exec();
    return res.status(200).send(airport);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

module.exports = router;