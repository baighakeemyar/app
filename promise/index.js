var fs = require("fs")

fs.readFile('/home/hakym/Node_Examples/app/text.txt', (err, data) => {
    if (err) { console.log(err); }
    console.log(data);
});
//if the readFile function returned a promise, the logic would be  written as below
//var fileReadandPromise = fs.readFile();
//fileReadandPromise.then(console.log, console.error);