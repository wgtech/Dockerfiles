const http = require('http');
const os = require('os');

console.log("Kubia server is starting...");

// var handler = function (request, response) {
//     console.log("Received request from " + request.connection.remoteAddress);
//     response.writeHead(200);
//     response.end("You've hit " + os.hostname() + "\n");
    
//     var www = http.createServer(handler);
//     www.listen(8080);
// };

http.createServer(function (request, response) {
    console.log("Received request from " + request.connection.remoteAddress);
    response.writeHead(200);
    response.write("You've hit " + os.hostname() + "\n");
    response.end();
}).listen(8080);