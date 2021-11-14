const Transform = require( "stream" ).Transform,
   util = require("util");

const handlerArguments = require( "./handlerArguments" );

const TransformStreamCoding = function () {
   Transform.call( this, {objectMode: true} );
};
util.inherits( TransformStreamCoding, Transform );

TransformStreamCoding.prototype._transform = function ( chunk, encoding, callback ) {
   chunk = chunk.toString();
   let text = handlerArguments( chunk );
   this.push( text );
   callback();
};
module.exports = TransformStreamCoding;