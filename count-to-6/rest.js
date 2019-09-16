module.exports = function average(...numbers) {
  return numbers.reduce((x, y) => x + y, 0) / numbers.length;
}
