let duration = 10;

const waitPromise = new Promise((resolve, reject) =>
{
    if (duration >= 0){
        resolve("working");
    } else {
        reject(new Error("Not working"));
    }
});

waitPromise.then((result) => {
    console.log("sucess: ", result);
}).catch((error) => {
    console.log("Error: ", error);
});