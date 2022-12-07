// import required modules
var http = require('http');
var fs = require('fs');

// create server
http.createServer(function (req, res) {
    // read file using fs build-in module
        fs.readFile('index1.html', function(err, data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
    
}).listen(8084);