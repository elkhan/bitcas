const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const pingWithInterval = require("./helpers/fetchAPI");

/* eslint new-cap: 0 */
const router = express.Router();
const app = express();

app.use(cors());
app.use(bodyParser.json());
// In case of sending post request from client
app.use(bodyParser.urlencoded({ extended: true }));

const currencyRoutes = require("./routes/currency");

app.use("/api/currency", currencyRoutes);

router.get("/", (req, res) => {
  res.send({ its: "Working" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  // TODO: Uncomment below
  // pingWithInterval();
  console.log("Listening on port: ", PORT);
});
