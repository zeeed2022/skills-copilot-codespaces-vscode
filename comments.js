// create web server and listen on port 3000
// run this file using node comments.js
// then open browser and go to localhost:3000
// you can use nodemon to watch for changes and restart server automatically
// nodemon comments.js

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/comments");

var commentSchema = new mongoose.Schema({
    title: String,


});
