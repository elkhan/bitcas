const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.connect("mongodb://localhost/bitcoin");

mongoose.Promise = Promise;

module.exports.Currency = require("./currency");
