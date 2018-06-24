var http = require('http')
var map = require('through2-map')
var bl = require('bl')

if (process.argv[2].length < 3){
    console.error('Needs an argument');
    process.exit(1);

}

server = http.createServer(function (request, result){
    request.setEncoding('utf8');
    if (request.method == 'POST'){

        string = "";
        request.on('data', function(data){
            string += data;
        });

        request.on('end', function(){
            result.write(string.toUpperCase());
        });
    }
});

server.listen(Number(process.argv[2]));
