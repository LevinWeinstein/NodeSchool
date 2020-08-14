function Spy(target, method) {
    const oldMethod = target[method];

    var result = {
        count: 0
    }

    target[method] = (...args) => {
        result.count += 1
        return oldMethod(...args);
    }

    target[method].bind(result);
    return result;
}

module.exports = Spy
