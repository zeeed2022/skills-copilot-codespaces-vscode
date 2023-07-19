// create web server with node.js
// run node comments.js

// include http module
var http = require('http');
// include url module
var url = require('url');

// include querystring module
var querystring = require('querystring');

// create http server
http.createServer(function (req, res) {
	// set the response http header with http status and content type
	res.writeHead(200, {'Content-Type': 'text/plain'});
	
	// get the url path
	var path = url.parse(req.url).pathname;
	
	// get the query string
	var query = url.parse(req.url).query;
	
	// get the query string parameters as json object
	var params = querystring.parse(query);
	
	// check if the path is /comments
	if (path == '/comments') {
		// check if the http method is post
		if (req.method == 'POST') {
			// get the post data
			var postdata = '';
			req.on('data', function(chunk) {
				postdata += chunk;
			});
			req.on('end', function() {
				// parse the post data json object
				var postobj = querystring.parse(postdata);
				// get the comment value
				var comment = postobj.comment;
				// write the comment to the response
				res.write('Your comment is: ' + comment);
				// end the response
				res.end();
			});
		}
	}
	
	// check if the path is /comments
	if (path == '/comments') {
		// check if the http method is get
		if (req.method == 'GET') {
			// get the comment value
			var comment = params.comment;
			// write the comment to the response
			res.write('Your comment is: ' + comment);
			// end the response
			res.end();
		}
	}
	
}).listen(8080);

// log message to console
console.log('Server running at http://localhost:8080/');

// test the web server
// open http://localhost:8080/comments?comment=hello in browser
// open http://localhost:8080/comments in browser
// open http://localhost:8080/comments in browser and enter some text in the form and submit