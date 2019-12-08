const duckcount = (...args) => {
	return args.reduce((acc, next) => {
		return Object.prototype.hasOwnProperty.call(next, 'quack') ? acc + 1 : acc;
	}, 0);
}

module.exports = duckcount;
