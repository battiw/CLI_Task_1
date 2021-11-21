const argumentsResultObject = require( "../argumentsParsing" );
const handlerArgumentsObject = require( "../handlerArguments" );

let text = `This is secret. Message about "_" symbol QAZWSXEDCRFVTGBYHNUJMIKOLP abxz!`;

let obj = {config: "-c", cipher:"A"}

test("should return an object with correct configuration -с", () => {
    expect(handlerArgumentsObject.handlerArgumentsExports (text, obj)).toEqual(`Gsrh rh hvxivg. Nvhhztv zylfg \"_\" hbnylo JZADHCVWXIUEGTYBSMFQNRPLOK zyca!`);
});

// describe( 'entering invalid function arguments', () => {
//     it('should exit the process if incorrect configuration', () => {
//       const Process = process;
//       const Mock = jest.fn();
//       global.process = { ...Process, exit: Mock };
//       handlerArguments(text, a);
//       expect(Mock).toHaveBeenCalledWith(1);
//       global.process = Process;
//     });
// )};