require("dotenv").config();
const express = require("express");
const cors = require("cors");
const ussd = require("./controller/ussdController");
const app = express();

app.use(express.json(), cors(), express.urlencoded({ extended: true }));

app.post("/ussd", ussd);

const port = process.env.PORT || 2020;
app.listen(port, () => {
  console.log("Server started on port " + port);
});
