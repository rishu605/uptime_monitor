/*
* Example TLS Server
* Listens to port 6000 and sends the word "pong" to clients
*
*/

// Dependencies
var tls = require('tls');
var fs = require('fs');
var path = require('path');


// Server Options
var options = {
    'key': fs.readFileSync(path.join(__dirname,'./../https/key.pem')),
    'cert': fs.readFileSync(path.join(__dirname,'./../https/cert.pem'))
}

// Create the server
var server = tls.createServer(options, function(connection){
    // Send the word pong
    var outboundMessage = 'pong';
    connection.write(outboundMessage);

    // When the client writes something, we want to log it out
    connection.on('data', function(inboundMessage){
        var messageString = inboundMessage.toString();
        console.log(inboundMessage);
    });
});

// Listen
server.listen(6000);