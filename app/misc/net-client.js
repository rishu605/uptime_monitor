/*
* Example TCP (Net) client
* Connects to port 6000 and sends the word "ping"
*
*/

// Dependencies

var net = require('net');

// Define the message to send
var outboundMessage = 'ping';

// Create the client
var client = net.createConnection({'port': 6000}, function(){
    // Send the message
    console.log(outboundMessage);
});

// When the server writes back, log what it says and then kill the client
client.on('data', function(inboundMessage){
    var messageString = inboundMessage.toString();
    console.log(messageString);
    client.end();
});

