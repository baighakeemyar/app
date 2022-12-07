var http = require('http');
var fs = require('fs');

// create server
http.createServer(function (req, res) {
    // read file using fs build-in module
    fs.readFile('index.html', function(err, data) {
     if (err) {
        res.writeHead(404, {'Content-Type': 'text/html'});
        return res.end("404 Not Found");
      }
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end();
    });
  }).listen(8088); 
  console.log("server is running at localhost:8088");