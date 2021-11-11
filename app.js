let fs = require ('fs')
const { stderr } = require('process')

const objParams = require("./argumentsParsing")

const { pipeline } = require('stream');

const TransformStreamCE = require('./transformCE');
const transformCE = new TransformStreamCE();



console.log(objParams)

let nodePath = process.argv[0]
let appPath = process.argv[1]
let config = process.argv[2]
let cipher = process.argv[3]
let input = process.argv[4]
let inputText = process.argv[5]
let output = process.argv[6]
let outputText = process.argv[7]



// process.stdout.write("hELLO dIMA");
// process.stdin("hELLO dIMA");

// console.log('nodePath->' + nodePath);
// console.log();
// console.log('appPath->' + appPath);
// console.log();
// console.log('config->' + config);
// console.log();
// console.log('cipher->' + cipher);
// console.log('cipher->' + typeof cipher);
// console.log('cipher->' + cipher[0]);
// console.log();
// console.log('input->' + input);
// console.log();
// console.log('inputText->' + inputText);
// console.log();
// console.log('output->' + output);
// console.log();
// console.log('outputText->' + outputText);
// console.log();
// console.log("END");

if (objParams.input !==null && objParams.output !==null){

const input = fs.createReadStream('input.txt', 'utf-8');
const output = fs.createWriteStream('output.txt');

let cipStr = objParams.cipher.split('-')
console.log(`cipher: ${cipStr}`)
console.log(`cipher: ${typeof cipStr}`)
console.log(`cipher: ${ cipStr.length}`)

cipStr.forEach(function(item){

if (item[0]=='C' && item[1]=='1'){
    input.pipe(transformCE).pipe(output);
} 

})




// pipeline(
//     input,
//     transform,
//     output,
//     err => {
//         if (err) {
//            console.log('ERROR')
//         }
//     }
// );


console.log(`cipher: ${objParams.cipher}`)
console.log(`cipher: ${typeof objParams.cipher}`)

} else if (objParams.input !==0 && objParams.output ==0){


} else if (objParams.input ==0 && objParams.output !==0){


}else if (objParams.input ==0 && objParams.output ==0){
    
} else {


}

// $ node my_ciphering_cli -c "C1-C1-R0-A" -i "./input.txt" -o "./output.txt"

// const{ stdin, stdout} = process

// process.on('exit', code=>{
//     if (config === '-c'){
//         stdout.write(`OKeushki ${code}` )
//     } else {
        
//         stderr.write(`configuration parameter entered incorrectly\n ${code}`)
//     }
// })

// создание потока вывода
// let lgfdl= "jfiofd\n"
// process.stdout.write(lgfdl)



        



// создаем поток чтения из файла, на который вешаем исполнения события оп и выводим кусками в консоль
// let redableStream = fs.createReadStream("input.txt", "utf8")
// redableStream.on('data', function(chunk){
//     console.log(chunk)
//     })



// // также можно создаем поток для записи  и в дальнейшем на поток для чтения вешаем исполнения события и кусками записываем в поток для записи
// let writeableStream = fs.createWriteStream('output.txt')
// redableStream.pipe(writeableStream)
    


// создаем поток чтения из файла, на который вешаем исполнения события оп и выводим кусками в консоль
// let redableStream = fs.createReadStream("input.txt", "utf8")
// redableStream.on('data', function(chunk){
//     console.log(chunk)
//     })

// создаем поток для записи  и в дальнейшем на поток для чтения вешаем исполнения события и кусками записываем в поток для записи
// let writeableStream = fs.createWriteStream('output.txt')
// redableStream.on('data', function (chunk){
//     writeableStream.write(chunk)
// })



// также можно создаем поток для записи  и в дальнейшем на поток для чтения вешаем исполнения события и кусками записываем в поток для записи
// let writeableStream = fs.createWriteStream('output.txt')
// redableStream.pipe(writeableStream)




