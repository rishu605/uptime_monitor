/*
* Example REPL Server
* Take in the word fizzand log out buzz
*
*/

// Dependencies
var e=repl = require('repl');

// Start the REPL
repl.start({
    'prompt': '>',
    'eval': function(str){
        // Evaluate function for incoming inputs
        console.log("At the evaluation stage: ", str);

        // If the user said fizz, say buzz back to them
        if(str.indexOf('fizz') > -1){
            console.log("buzz");
        }
    }
});