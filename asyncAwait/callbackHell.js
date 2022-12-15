const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question('FUll Name: ', (answer) => {
    let Name = answer;

    r1.question('Age: ', (answer) => {
        let Age = answer;

        r1.question('Weight: ', (answer) => {
            let Weight = answer;
        
            r1.question('Height: ', (answer) => {
                let Height = answer;
            
                r1.question('Gender: ', (answer) => {
                    let Gender = answer;
                
                    r1.question('Profession: ', (answer) => {
                        let Profession = answer;
                        r1.close();
                        setTimeout(() => {
                            console.log("Done")
                        }, 2000);
                    });
                });
            });
        });
    });

});
