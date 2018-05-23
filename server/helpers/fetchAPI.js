const axios = require("axios");
const config = require("../config");

module.exports = pingWithInterval = () => {
  const crypto = ["BTC", "ETC", "LTC"];
  setInterval(() => {
    for (const item of crypto) {
      axios
        .get(config.url + item + config.money)
        .then(result => {
          console.log(result.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, 300000);
};
