    var inputs = process.argv.slice(2);
var result = inputs.map((str) => str[0])
        .reduce((total, next) => total + next);

console.log(`[${inputs}] becomes "${result}"`);
