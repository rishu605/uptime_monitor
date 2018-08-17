/*
* Example TLS client
* Connects to port 6000 and sends the word "ping"
*
*/

// Dependencies
var tls = require('tls');
var fs = require('fs');
var path = require('path');


// Server Options
var options = {
    'ca': fs.readFileSync(path.join(__dirname,'./../https/cert.pem'))
}

// Define the message to send
var outboundMessage = 'ping';

// Create the client
var client = tls.connect(6000, options, function(){
    // Send the message
    console.log(outboundMessage);
});

// When the server writes back, log what it says and then kill the client
client.on('data', function(inboundMessage){
    var messageString = inboundMessage.toString();
    console.log(messageString);
    client.end();
});

