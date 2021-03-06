/*
* Example HTTP2 client
*
*/
// Dependencies

var http2 = require('http2');

// Create client
var client = http2.connect('http://localhost:6000');

// Create a request
var req = client.request({
    ':path': '/'
});

// When a message is received, add the peices of it together until you reach the end
var str='';
req.on('data', function(chunk){
    str+=chunk;
});

// When the messag ends, log it out

req.on('end', function(){
    console.log(str);
});

// End the request
req.end();