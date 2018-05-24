const express = require("express");
const db = require("../models");
const axios = require("axios");
const config = require("../config");
/* eslint new-cap: 0 */
const router = express.Router();

router.get("/", (req, res) => {
  db.Currency.find()
    .then(currencies => {
      res.json(currencies);
    })
    .catch(error => res.send(error));
});

// FIXME: Midleware!!
router.post("/", (req, res) => {
  let name = JSON.parse(req.body.name);
  axios
    .get(config.url + name + config.money)
    .then(result => {
      for (const sym in result.data) {
        if (result.data.hasOwnProperty(sym)) {
          db.Currency.create({
            name: name,
            value: result.data[sym]
          })
            .then(currency => {
              res.status(201).json(currency);
            })
            .catch(error => {
              res.send(error);
            });
        }
      }
    })
    .catch(err => {
      console.log(err);
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
      res.send(req.params.name);
    })
    .catch(err => {
      res.send(err);
    });
});

module.exports = router;
