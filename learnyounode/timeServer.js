/*  Write a TCP time server!

  Your server should listen to TCP connections on the port provided by the
  first argument to your program. For each connection you must write the
  current date & 24 hour time in the format:

     "YYYY-MM-DD hh:mm"

  followed by a newline character. Month, day, hour and minute must be
  zero-filled to 2 integers. For example:

     "2013-07-06 17:42"

  After sending the string, close the connection.
*/

var net = require('net')
var util = require('util')

if (process.argv.length < 3){
    process.exit();
}

var port = parseInt(process.argv[2], 10)
var server = net.createServer(function (socket) {
    date = new Date();

    str = '';
    str += date.getFullYear();
    str += '-' + (date.getMonth() + 1).toString().padStart(2, '0');
    str += '-' + date.getDate().toString().padStart(2, '0');
    str += ' ' + date.getHours().toString().padStart(2, '0');
    str += ':' + date.getMinutes().toString().padStart(2, '0');
    str += '\n';
    socket.write(str);
    socket.destroy();
})

server.listen(port)
