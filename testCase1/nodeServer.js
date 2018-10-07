//node

var express = require("express");
var fs = require("fs");
var path = require("path");
//var mysql = require("mysql");

var server = express();
server.use(express.static("."));

server.get("/test", function(req, res){
	console.log(req.originalUrl);
	res.send("HelloWorld");
});

server.listen(80);
