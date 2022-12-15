const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question('Task description: ', (answer) => {
    let description = answer;

    r1.close();
});