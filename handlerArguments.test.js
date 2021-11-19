const caesarEncoding = require( "./caesarEncoding" );
const caesarDecoding = require( "./caesarDecoding" );
const atbashEncoding = require( "./atbashEncoding" );
const rot8Encoding = require( "./rot8Encoding" );
const rot8Decoding = require( "./rot8Decoding" );


const handlerArguments = require( "./handlerArguments" );

// let  text = `This is secret. Message about "_" symbol!`
 let text2 = {cipher:'A'};

test("q", () => {
   
expect(handlerArguments.newarr(text2)).toEqual(["A"])

})