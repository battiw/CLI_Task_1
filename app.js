let fs = require ( 'fs' )
const { stdout, stdin, stderr } = require ( 'process' )

const objParams = require ( "./argumentsParsing" );

const TransformStreamCE = require ( './transformCE' );
const transformCE = new TransformStreamCE();

if ( objParams.input !== undefined && objParams.output !== undefined ) {
        const readStream = fs.createReadStream( 'input.txt', 'utf-8' );
        const writeStream = fs.createWriteStream('output.txt',  {flags: 'a+'});
        readStream.pipe(transformCE).pipe(writeStream );

} else  if ( objParams.input !== undefined && objParams.output === undefined ) {
        const readStream = fs.createReadStream( 'input.txt', 'utf-8' );
        readStream.pipe(transformCE).pipe(stdout);

} else if ( objParams.input === undefined && objParams.output !== undefined ) {
        const writeStream = fs.createWriteStream( 'output.txt', {flags: 'a+'});
        stdin.pipe(transformCE).pipe(writeStream);

} else if ( objParams.input === undefined && objParams.output === undefined ) {
        stdin.pipe(transformCE).pipe(stdout);

} else {
        stderr.write( 'parameters are set incorrectly' );
};