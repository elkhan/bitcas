const mongoose = require("mongoose");

let currencySchema = new mongoose.Schema({
  name: {
    type: String,
    required: "Code field is required"
  },
  value: {
    type: Number
  }
});

let Currency = mongoose.model("Currency", currencySchema);

module.exports = Currency;
