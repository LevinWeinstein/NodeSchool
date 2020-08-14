// include the Lo-Dash library
var _ = require("lodash");

var worker = function (arr) {
    return _.chain(arr)
            .map(x => x.toUpperCase() + 'CHAINED')
            .sort()
            .value()
};

// export the worker function as a nodejs module
module.exports = worker;