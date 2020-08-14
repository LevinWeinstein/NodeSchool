var _ = require("lodash");

var worker = function (object) {
    return _.chain(object)
     .groupBy('username')
     .map((grouped, key) => ({
         username: key,
         comment_count: _.size(grouped)
     }))
     .sortBy(item => -item.comment_count)
};

// export the worker function as a nodejs module
module.exports = worker;