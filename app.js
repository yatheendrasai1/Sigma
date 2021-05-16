const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const config = require('dotenv').config()
const port = process.env.PORT;
var db = require("./models/db.js");
var routerDirectory = require("./routes");
app.use(bodyParser.json({
  extended: true
}));

app.use('/', routerDirectory);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})