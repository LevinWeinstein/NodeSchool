var _ = require("lodash");

var size = function (item) {
    if (item >= 1.0) {
        return 'big'
    } else if (item >= 0.5) {
        return 'med'
    } else {
        return 'small'
    }
}

var worker = function (arr) {
    return _.forEach(arr, item => {
        item.size = size(item.population)
    })
};

// export the worker function as a nodejs module
module.exports = worker;