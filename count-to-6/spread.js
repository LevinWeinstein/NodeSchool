let args = process.argv.splice(2);

console.log(`The minimum of [${args}] is ${Math.min(...args)}`);
