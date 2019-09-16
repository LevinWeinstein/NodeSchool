var equivalencies = {
    "'" : "&apos;",
    '"' : "&quot;",
    "<" : "&lt;",
    ">" : "&gt;",
    "&" : "&amp;"
}

console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);




function html(splitString, name, phrase) {
    let newItems = ["", ""];
    let output = "";

    [name, phrase].forEach((item, index) => {
        item.split('').forEach((char) => {
            newItems[index] += equivalencies[char] || char;
            //console.log(equivalencies[char]);
        });
    });

    splitString.forEach((item, index) =>{
        output += item;
        if (index != splitString.length - 1)
            output += newItems[index];
    })
    return output;
}
