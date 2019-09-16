module.exports = function makeImportant(string, length=string.length){
        return string + '!'.repeat(length);
}
