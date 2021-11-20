const argumentsResultObject = require( "./argumentsParsing" );




test("q", () => {
let config = "-c";
let cipher =  'C1-A-R0';

    expect(argumentsResultObject.argumentsParsing(config, cipher)).toEqual({ config: '-c', cipher: 'C1-A-R0' })
})

