const express = require("express");
const db = require("../models");
/* eslint new-cap: 0 */
const router = express.Router();

router.get("/", (req, res) => {
  db.Currency.find()
    .then(currencies => {
      res.json(currencies);
    })
    .catch(error => res.send(error));
});

router.post("/", (req, res) => {
  db.Currency.create(req.body)
    .then(currency => {
      res.status(201).json(currency);
    })
    .catch(error => {
      res.send(error);
    });
});

router.get("/:name", (req, res) => {
  db.Currency.findOne({ name: req.params.name })
    .then(currency => {
      res.json(currency);
    })
    .catch(error => res.send(error));
});

module.exports = router;
