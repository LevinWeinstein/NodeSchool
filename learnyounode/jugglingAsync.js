/*
  This problem is the same as the previous problem (HTTP COLLECT) in that
  you need to use http.get(). However, this time you will be provided with
  three URLs as the first three command-line arguments.

  You must collect the complete content provided to you by each of the URLs
  and print it to the console (stdout). You don't need to print out the
  length, just the data as a String; one line per URL. The catch is that you
  must print them out in the same order as the URLs are provided to you as
  command-line arguments.
*/

var http = require('http');
var _ = require('underscore')

function handleUrl(urls, strings, which){
    http.get(urls[which], function (response) {
        response.setEncoding("utf8");
        response.on("err", console.error);
        response.on("data", function(data){
            strings[which] += data;
        });
        response.on("end", printAfter);
    });
}


if (process.argv.length >= 5){
    var urls = [process.argv[2], process.argv[3], process.argv[4]];
    var outputs = ["", "", ""];
    
    var printAfter = _.after(3, function(){
        for (let i = 0; i < 3; i++){
            console.log(outputs[i])
        }
    });

    for (let i = 0; i < 3; i++) {
        handleUrl(urls, outputs, i);
    }
}

