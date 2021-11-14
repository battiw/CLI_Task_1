const caesarEncoding = require( "./caesarEncoding" );
const caesarDecoding = require( "./caesarDecoding" );
const atbashEncoding = require( "./atbashEncoding" );
const rot8Encoding = require( "./rot8Encoding" );
const rot8Decoding = require( "./rot8Decoding" );
const argumentsParsing = require( "./argumentsParsing" );

module.exports = function( text ) {
    let newtext = text;
    let newarr = argumentsParsing.cipher.split( '-' );

        for ( element of newarr ) {
            if ( element === "C1" ) {
                newtext = caesarEncoding(newtext);

            } else if ( element === "C0" ) {
                newtext = caesarDecoding( newtext );
            
            } else if ( element === "R1" ) {
                newtext = rot8Encoding( newtext );

            } else if ( element === "R0" ) {
                newtext = rot8Decoding( newtext );

            } else if ( element === "A" ) {
                newtext = atbashEncoding( newtext );
            };
        };
        return newtext;
};