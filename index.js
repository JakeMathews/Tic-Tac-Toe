let http = require("http");
//let fs = require("fs");
let path = require("path");
let express = require("express");
let app = express();

//var router = express.Router([options]);

app.use('/static', express.static('public'));

app.get('/', function (req, res) {
  res.sendFile("index.html", { root: path.join(__dirname, "/public")});
});

app.listen(8000, function () {
  console.log("Tic-Tac-Toe server listening on port 8000!");
});
