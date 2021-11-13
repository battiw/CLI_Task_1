let fs = require ( 'fs' )
const { stdout, stdin, stderr } = require ( 'process' )

const objParams = require ( "./argumentsParsing" );

const TransformStreamCE = require ( './transformCE' );
const transformCE = new TransformStreamCE();

if ( objParams.input !== null && objParams.output !== null ) {

        const readStream = fs.createReadStream( 'input.txt', 'utf-8' );
        const writeStream = fs.createWriteStream( 'output.txt' );
        readStream.pipe(transformCE).pipe(writeStream);

} else  if ( objParams.input !== null && objParams.output === null ) {
        const readStream = fs.createReadStream( 'input.txt', 'utf-8' );
        readStream.pipe(transformCE).pipe(stdout);

} else if ( objParams.input === null && objParams.output !== null ) {
        const writeStream = fs.createWriteStream( 'output.txt' );
        stdin.pipe(transformCE).pipe(writeStream);

} else if ( objParams.input === null && objParams.output === null ) {
        stdin.pipe(transformCE).pipe(stdout);

} else {
        stderr.write( 'parameters are set incorrectly' );
};