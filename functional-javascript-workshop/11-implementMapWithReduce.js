module.exports = function arrayMap(arr, fn, thisArg) {
    return arr.reduce((acc, next, index, arr) => {
        acc.push(fn.call(thisArg, next, index, arr));
        return acc;
    }, [])
}