let userArray = process.argv.slice(2);

let outputObject = {};
[,outputObject.username, outputObject.email] = userArray;

console.log(outputObject); 
