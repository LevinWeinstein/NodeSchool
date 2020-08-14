// include the Lo-Dash library
var _ = require("lodash");

var worker = function (payroll) {
    const average = _.meanBy(payroll, 'income')
    let underperform = _.filter(payroll, player => player.income <= average)
    let overperform = _.filter(payroll, player => player.income > average)
    
    underperform = _.sortBy(underperform, 'income')
    overperform = _.sortBy(overperform, 'income')
    return { average, underperform, overperform }
    // do work; return stuff
};

// export the worker function as a nodejs module
module.exports = worker;