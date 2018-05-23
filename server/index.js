const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");
const config = require("./config");

/* eslint new-cap: 0 */
const router = express.Router();
const app = express();

app.use(cors());
app.use(bodyParser.json());
// In case of sending post request from client
app.use(bodyParser.urlencoded({ extended: true }));

const currencyRoutes = require("./routes/currency");

app.use("/api/currency", currencyRoutes);

const val = "EUR";

app.use("/fetch", (req, res) => {
  axios
    .get(config.url + val)
    .then(result => {
      console.log(result.data);
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/", (req, res) => {
  res.send({ its: "Working" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Listening on port: ", PORT);
});
