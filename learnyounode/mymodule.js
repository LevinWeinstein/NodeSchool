var fs = require('fs');
var path = require('path');

module.exports = function(dirname, extension, callback){

    fs.readdir(dirname, (err, list) =>{
        if (err) return callback(err);
        var arr = [];
        list.forEach(function (file) {
            if (path.extname(file) === '.' + extension){
                arr.push(file);
            }
        })
        callback(null, arr);
    })
};
