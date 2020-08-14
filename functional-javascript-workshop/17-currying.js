function curryN(fn, n) {
    if (typeof(n) === 'undefined'){
        n = fn.length;
    }
    console.log(n)
    if (n == 0){
        return fn();
    }
    return arg => curryN(fn.bind(fn, arg), n - 1)
    // SOLUTION GOES HERE
}

module.exports = curryN