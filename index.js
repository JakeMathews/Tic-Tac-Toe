let http = require("http");
//let fs = require("fs");
let path = require("path");
let express = require("express");
let bodyParser = require("body-parser");
let app = express();
let port = 8000;

//var router = express.Router([options]);

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({
		extended: false
	})
app.use(express.static(__dirname + '/public'));
//app.use('/static', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	res.sendFile("index.html", {
		root: path.join(__dirname, "/public")
	});
});

app.post('/local', urlencodedParser, function(req, res) {
	// Recieve user data to create game here
	res.status(200).send({
		location: "local"
	});
});

app.get("/local", function(req, res) {
	// Create the game and send the game file
	res.sendFile("index.html", {
		root: path.join(__dirname, "/public")
	});
});

let serv = app.listen(port, function() {
	console.log("Tic-Tac-Toe server listening on port " + port + "!");
});

function close() {
	serv.close();
}
