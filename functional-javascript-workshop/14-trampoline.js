function repeat(operation, num) {
    // Modify this so it doesn't cause a stack overflow!
    if (num <= 0) return
    operation()
    return () => repeat(operation, --num)
}

function trampoline(fn) {
    return (...args) => {
        let result = fn.apply(null, args);

        while (typeof(result) === 'function'){
            result = result();
        }
        return result;
    }
}

module.exports = function (operation, num) {
    // You probably want to call your trampoline here!
    return trampoline(repeat)(operation, num)
}
