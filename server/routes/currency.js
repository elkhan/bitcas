const express = require("express");
const request = require("request");
const db = require("../models");
/* eslint new-cap: 0 */
const router = express.Router();
const val = "EUR";
const url = `https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=${val}`;

router.get("/", (req, res) => {
  db.Currency.find()
    .then(currencies => {
      res.json(currencies);
    })
    .catch(error => res.send(error));
});

router.post("/", (req, res) => {
  let currency = {};
  request(url, (err, res, body) => {
    if (err) {
      res.send(err);
    } else {
      let currencies = JSON.parse(body);
      for (name in currencies) {
        currency.name = name;
        currency.value = currencies[name];
        db.Currency.create(currency);
      }
    }
  });
});

router.get("/:name", (req, res) => {
  db.Currency.find(req.params.name)
    .then(currency => {
      res.json(currency);
    })
    .catch(error => res.send(error));
});

module.exports = router;
