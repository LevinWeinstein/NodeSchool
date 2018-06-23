/*
  Write an HTTP server that serves the same text file for each request it
  receives.

  Your server should listen on the port provided by the first argument to
  your program.

  You will be provided with the location of the file to serve as the second
  command-line argument. You must use the fs.createReadStream() method to
  stream the file contents to the response.
*/

var http = require('http')
var fs = require('fs')
var server = http.createServer(function (request, result){
    fs.readFile(process.argv[3], function(error, data){
        if (error){
            console.error(error);
            process.exit(1);
        }

        result.writeHead(200, {'content-type': 'text/plain'})
        result.write(data);
    })
})

server.listen(parseInt(process.argv[2]))
