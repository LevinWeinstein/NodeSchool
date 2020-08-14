// include the Lo-Dash library
var _ = require("lodash");

var worker = function ({name, login}) {
    const sayHi = _.template("Hello <%= name %> (logins: <%= login.length %>)") 
    return sayHi({name, login})
};

// export the worker function as a nodejs module
module.exports = worker;
