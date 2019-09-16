var equivalencies = {
    "'" : "&apos;",
    '"' : "&quot;",
    "<" : "&lt;",
    ">" : "&gt;",
    "&" : "&amp;"
};

console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);




function html(splitString, name, phrase) {
    let newItems = ["", ""];

    [name, phrase].forEach((item, index) => {
        item.split('').forEach((char) => {
            newItems[index] += equivalencies[char] || char;
        });
    });

    let output = splitString.reduce((accumulator, next, index) =>{
        if (index < splitString.length)
            accumulator += newItems[index - 1];
        accumulator += next;
        return accumulator;
    });

    return output;
}
