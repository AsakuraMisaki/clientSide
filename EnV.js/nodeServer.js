//node

var express = require("express");
var fs = require("fs");
var path = require("path");
//var mysql = require("mysql");

var server = express();
server.use(express.static("."));



server.get("/test", function(req, res, next){
	console.log(req.originalUrl);
	next();
});

server.get("/myApk", function(req, res){
	console.log(req.originalUrl);
	res.sendFile("D:\\GitHub\\Projects\\Android\\" + req.query.name + "\\app\\release\\app-release.apk");
});


server.listen(80);
