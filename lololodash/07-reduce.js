// include the Lo-Dash library
var _ = require("lodash");

var worker = function (object) {
    return _
        .chain(object)
        .reduce(
            (acc, {article, quantity}) => {
                acc[article] = acc[article] + quantity || quantity
                return acc
            },
            {}
        )
        .map((total_orders, article) => ({total_orders, article: +article}))
        .sortBy(item => -item.total_orders)
};

// export the worker function as a nodejs module
module.exports = worker;