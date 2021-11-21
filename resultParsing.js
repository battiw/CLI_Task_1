const funParsing = require("./argumentsParsing");

let config = process.argv[2];
let cipher = process.argv[3];

module.exports.resultParsing = funParsing.argumentsParsing(config, cipher);
