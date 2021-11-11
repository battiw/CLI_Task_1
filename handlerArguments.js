const cesarEncoding = require("./cesarEncoding")
const cesarDecoding = require("./cesarDecoding")
const argumentsParsing = require("./argumentsParsing")

module.exports = function(text){
let newtext= text;
let newarr = argumentsParsing.cipher.split('-')
for (element of newarr){

    console.log(`TEST ELEM ${element}`);

    if (element === "C1"){

        newtext = cesarEncoding(newtext);
        console.log(`TEST 1: ${newtext}`);

    } else if (element === "C0"){
        
        newtext = cesarDecoding(newtext);
        console.log(`TEST 2 ${newtext}`);
}

}
return newtext;
}