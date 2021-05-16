const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5171;
var db = require("./models/db.js");
var routerDirectory = require("./routes");
app.use(bodyParser.json({
  extended: true
}));

app.use('/', routerDirectory);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})