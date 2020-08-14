var _ = require("lodash");

var worker = function (object) {
    return _.filter(object, {active: true})
};

// export the worker function as a nodejs module
module.exports = worker;