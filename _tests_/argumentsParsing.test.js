const argumentsResultObject = require( "../argumentsParsing" );

let config = "-c";
let config1 = "--config";
let configIncorrect = "";
let cipher = 'C1-A-R0';
let cipherRotIncorrect = 'C1-A-R5';
let cipherAtbashIncorrect = 'C1-A1-R0';
let cipherCaesarIncorrect = 'C5-A-R0';
let cipherNotDefined = 'C5-A-R0';

test("should return an object with correct configuration -с", () => {
    expect( argumentsResultObject.argumentsParsingExport( config, cipher )).toEqual({ config: '-c', cipher: 'C1-A-R0' });
});

test("should return a correctly configured object with --config", () => {
    expect( argumentsResultObject.argumentsParsingExport( config1, cipher )).toEqual({ config: '-c', cipher: 'C1-A-R0' });
});
test("must confirm that the configuration value is defined", () => {
    expect( argumentsResultObject.argumentsParsingExport( config, cipher )).toBeDefined();
});


describe( 'entering invalid function arguments', () => {
    it('should exit the process if incorrect configuration', () => {
      const Process = process;
      const Mock = jest.fn();
      global.process = { ...Process, exit: Mock };
      argumentsResultObject.argumentsParsingExport(configIncorrect, cipher);
      expect(Mock).toHaveBeenCalledWith(1);
      // global.process = Process;
    });

    it('should exit process on condition match', () => {
        const Process = process;
        const Mock = jest.fn();
        global.process = { ...Process, exit: Mock };
        argumentsResultObject.argumentsParsingExport(config, cipherRotIncorrect);
        expect(Mock).toHaveBeenCalledWith(1);
        // global.process = Process;
      });

      it('should exit process on condition match', () => {
        const Process = process;
        const Mock = jest.fn();
        global.process = { ...Process, exit: Mock };
        argumentsResultObject.argumentsParsingExport(config, cipherAtbashIncorrect);
        expect(Mock).toHaveBeenCalledWith(1);
        // global.process = Process;
      });

      it('should exit process on condition match', () => {
        const Process = process;
        const Mock = jest.fn();
        global.process = { ...Process, exit: Mock };
        argumentsResultObject.argumentsParsingExport(config, cipherCaesarIncorrect);
        expect(Mock).toHaveBeenCalledWith(1);
        // global.process = Process;
      });

      it('should exit the process if the cipher is undefined', () => {
        const Process = process;
        const Mock = jest.fn();
        global.process = { ...Process, exit: Mock };
        argumentsResultObject.argumentsParsingExport(config, cipherNotDefined);
        expect(Mock).toHaveBeenCalledWith(1);
        // global.process = Process;
      });
  });
