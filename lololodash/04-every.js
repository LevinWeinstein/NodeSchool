// include the Lo-Dash library
var _ = require("lodash");

var worker = function (collection) {

    const hot  =_.filter(Object.keys(collection), item => {
        return _.every(collection[item], value => value > 19)
    })

    const warm = _.filter(Object.keys(collection), item => {
        return _.some(collection[item], value => value > 19) && 
              !_.every(collection[item], value => value > 19)
    })

    return { hot, warm }
    // do work; return stuff
};

// export the worker function as a nodejs module
module.exports = worker;