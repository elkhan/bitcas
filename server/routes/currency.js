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
  let name = req.body.name;
  db.Currency.create({ name })
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

router.delete("/:name", (req, res) => {
  db.Currency.remove({ name: req.params.name })
    .then(() => {
      res.send({ message: "Deleted" });
    })
    .catch(err => {
      res.send(err);
    });
});

module.exports = router;
