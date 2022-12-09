var http = require('http');
var fs = require('fs');

// create server
http.createServer(function (req, res) {
    // read file using fs build-in module
    fs.appendFile('text.txt','This is asynch \n', function(ferr){
      if(ferr) return console.error(ferr);
      console.log("saved");
  });
    fs.readFile('index.html', function(err, dataaynch) {
     if (err) {
        res.writeHead(404, {'Content-Type': 'text/html'});
        return res.end("404 Not Found");
      }
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(dataaynch);
      return res.end();
      
    });
    console.log("running");
    
  }).listen(8088); 
  console.log("server is running at localhost:8088");

 