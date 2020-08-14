var loremIpsum = {
    "name": "lorem-ipsum",
    "version": "0.1.1",
    "dependencies": {
        "optimist": {
            "version": "0.3.7",
            "dependencies": {
                "wordwrap": {
                    "version": "0.0.2"
                }
            }
        },
        "inflection": {
            "version": "1.2.6"
        }
    }
}

function getDependencies(tree, set) {
    const firstLevel = typeof(set) === 'undefined'
    set = set || new Set();

    if (tree && tree.dependencies){

        for (const key of Object.keys(tree.dependencies)) {
            const dependency = tree.dependencies[key];
            const version = dependency.version;

            set.add(`${key}@${version}`)
            getDependencies(dependency, set);
        }
    }
    if (firstLevel) return Array.from(set).sort()
    return set;
}

module.exports = getDependencies