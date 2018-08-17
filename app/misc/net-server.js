/*
* Example TCP (Net) Server
* Listens to port 6000 and sends the word "pong" to clients
*
*/

// Dependencies
var net = require('net');

// Create the server
var server = net.createServer(function(connection){
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