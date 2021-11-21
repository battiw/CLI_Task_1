const argumentsResultObject = require( "../argumentsParsing" );


let config = "-c" ;
let config1 = "--config" ;
let cipher =  'C1-A-R0';

test("q", () => {
    expect(argumentsResultObject.argumentsParsing(config, cipher)).toEqual({ config: '-c', cipher: 'C1-A-R0' })
});
test("q1", () => {
    expect(argumentsResultObject.argumentsParsing(config1, cipher)).toEqual({ config: '-c', cipher: 'C1-A-R0' })
});

