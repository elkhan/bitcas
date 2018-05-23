const axios = require("axios");
const config = require("../config");
const db = require("../models");

module.exports = pingWithInterval = () => {
  db.Currency.find({}, (err, currencies) => {
    if (err) {
      console.log(err);
    } else {
      currencies.map(currency => {
        setInterval(() => {
          axios
            .get(config.url + currency.name + config.money)
            .then(result => {
              console.log(result.data);
            })
            .catch(err => {
              console.log(err);
            });
        }, 300000);
      });
    }
  });
};
