// Create web server
// Run: node comments.js
// Test: http://localhost:3000/comments

var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');

// Create web server
http.createServer(function (req, res) {
    // Get file name
    var pathname = url.parse(req.url).pathname;
    console.log("Request for " + pathname + " received.");

    // Read file
    fs.readFile(pathname.substr(1), function (err, data) {
        if (err) {
            console.log(err);
            res.writeHead(404, {'Content-Type': 'text/html'});
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data.toString());
        }

        res.end();
    });
}).listen(3000);

console.log('Server running at http://localhost:3000/');