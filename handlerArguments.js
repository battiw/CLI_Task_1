const cesarEncoding = require( "./cesarEncoding" );
const cesarDecoding = require( "./cesarDecoding" );
const atbachEncoding = require( "./atbachEncoding" );
const rot8Encoding = require( "./rot8Encoding" );
const rot8Decoding = require( "./rot8Decoding" );
const argumentsParsing = require( "./argumentsParsing" );

module.exports = function( text ) {
let newtext = text;
let newarr = argumentsParsing.cipher.split( '-' );
for ( element of newarr ) {

    if ( element === "C1" ) {

        newtext = cesarEncoding(newtext);
        // console.log(`TEST 1: ${newtext}`);

    } else if ( element === "C0" ) {
        
        newtext = cesarDecoding( newtext );
        // console.log(`TEST 2 ${newtext}`);
     
    } else if ( element === "R1" ) {
        
        newtext = rot8Encoding( newtext );
        // console.log(`TEST 3 ${newtext}`);

    } else if ( element === "R0" ) {
        
        newtext = rot8Decoding( newtext );
        // console.log(`TEST 4 ${newtext}`);

    } else if ( element === "A" ) {
        newtext = atbachEncoding( newtext );
        // console.log(`TEST 5 ${newtext}`);
    };

};
return newtext;
};