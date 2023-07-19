// create web server
// 1. import http
const http = require('http');
// 2. create web server
const server = http.createServer((req, res) => {
    // 3.1 set header
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    // 3.2 send response
    res.write('<html>');
    res.write('<head><title>My first page</title></head>');
    res.write('<body><h1>Hello from my Node.js server!</h1></body>');
    res.write('</html>');
    res.end();
});
// 3. listen to incoming requests
