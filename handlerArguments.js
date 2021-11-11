const cesarEncoding = require("./cesarEncoding")
const cesarDecoding = require("./cesarDecoding")
const argumentsParsing = require("./argumentsParsing")

module.exports = function(text ){
let newtext=''
let newarr = argumentsParsing.cipher.split('-')
for (element of newarr){

    console.log(`WARRRRRRRRR ${newarr}`)

    if (element === "C1"){

        newtext= cesarEncoding(text)
        console.log(`newtext: ${newtext}`)

    } else if(element === "C0"){

        newtext= cesarDecoding(text)
}

}
return newtext
}