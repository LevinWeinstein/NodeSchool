/*
**  ## HTTP CLIENT (Exercise 7 of 13)
**
**  Write a program that performs an HTTP GET request to a URL provided to you
**  as the first command-line argument. Write the String contents of each
**  "data" event from the response to a new line on the console (stdout).
*/

//Unlike other functions,  http.get's callback signature is
// 
// function callback(response) { ... }
// 
// instead of
//
// function callback(err, response) { ... }
//
// which makes sense I guess since http will send a set of error headers
// as a response and not as an error

//response is a node stream object, which will emit events.
// the three events that are of most interest are:
// "data", "error", and "end". You listen to an event like so:
//
//     response.on("data", function(data) { })
//


http = require('http')

function performRequest(){
    if (process.argv.length < 3)
        return ;
    
    url = process.argv[2];
    var req = http.get(url, (response) => {
        response.on("data", function (data) {
            console.log(data.toString());
        });

        response.on("error", function (err) {
            console.log("Response Error: " + err.message);
            return ;
        });

        response.on("end", function () {
            // Put a message here if you want to do something
            // when the request ends
            return ;
        });
    });

    req.on('error', function (err) {
        console.log('Request Error:' + err.message);
    });
}

performRequest();


/* WOW: The above is my raw first try. ^^
** It's crazy what you can do with node ~ below is the mentor's
** IDEAL solution. See the difference:
**
** var http = require('http')
** http.get(process.argv[2], function(response) {
**    response.setEncoding('utf8')
**    response.on('data', console.log)
**    response.on('error', console.error)
** }).on('error', console.error)
*/
