var fs = require("fs");

fs.readFile('text.txt', function(ferr, dataaynch){
    if(ferr) return console.error(ferr);
    console.log(dataaynch.toString());
});
console.log("Execution ends");