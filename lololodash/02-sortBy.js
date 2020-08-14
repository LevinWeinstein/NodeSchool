var _ = require("lodash");

var worker = function (arr) {
    return _.sortBy(arr, entry => -entry.quantity)
};

// export the worker function as a nodejs module
module.exports = worker;