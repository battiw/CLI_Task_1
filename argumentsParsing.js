let fs = require ( 'fs' );
const { stdin, stdout, stderr } = require( 'process' );

let nodePath = process.argv[0];
let appPath = process.argv[1];
let config = process.argv[2];
let cipher = process.argv[3];
let input = process.argv[4];
let inputText = process.argv[5];
let output = process.argv[6];
let outputText = process.argv[7];

 // выводной объект с параметрами распарсиной строки консоли
let objParams = {};

let arrFlag = [];
let arrArg = [];
    // находим циклом аргументы и записываем в массив
     for ( let i = 0; i <= process.argv.length-1; i++ ) {
         let symbolStr = process.argv[i];
            if ( symbolStr.charAt(0) === '-' ) {
                arrFlag.push( symbolStr );
            };
            arrArg.push( symbolStr );
    };

// по элементу массива аргументов находим и вносим в циклом в массив и если в нем больше двух одинаковых элементов то stderr
arrFlag.forEach(( item ) => {
    let arrTemp = [];
        for ( let i = 0; i <= arrFlag.length; i++ ) {
        if ( item == arrFlag[i] ) {
            arrTemp.push( item[i] );
            if ( arrTemp.length >= 2 ) {
                stderr.write( 'duplicate element\n' );
                process.exit(1);
            };
        };
    };
});

// проверка на валидность конфигурации
if ( config === '-c' || config === '--config') {

    if( arrArg.length >=4 && arrArg.length <=8 ) {
        console.log("configuration is valid OK");
        objParams.config = '-c';
        let cipStr = cipher.split( '-' );
        let strCipher = '';

// перебераем строку с видами шифра и вводим ее параметром выводного объекта
for ( item of cipStr ) {    
        if ( item[0] === 'C' || item[0] === 'R' ) {
                if ( item[1] === '0' || item[1] === '1' ) {
                    strCipher = strCipher + '-' + item[0] + item[1];
                };
        } else if ( item[0] === 'A' && item[1] == null ) {
            strCipher = strCipher + '-' + item[0];
        } else {
                stderr.write( 'configuration cipher entered incorrectly\n' );
                process.exit(1);
        };
    };
    objParams.cipher = strCipher.slice(1); // удаляем первый "-"

// перебераем массив с аргументами и 
arrArg.forEach( function( item, index ) {
    console.log()
    if ( item == '-i' || item == '--input' ) {
        console.log("PROBLEM1")
        item = '-i';
        objParams.input = item;
    } else if ( item == '-o' || item == '--output' ) {
        item = '-o';
        objParams.output = item;
   } else if ( item.startsWith( './' ) && index==5 ) {
        objParams.inputText = item;
   } else if ( item.startsWith( './' ) && index==7 ) {
        objParams.outputText = item;
   } else if ( index !== 1 || index !== 0) {
   } else {
    stderr.write( 'configuration arguments entered incorrectly\n' );
    process.exit(1);
   };
});
    
} else {
stderr.write( 'exceeded number of parameters\n' );
process.exit(1);
};

} else {
stderr.write( 'configuration parameter entered incorrectly\n' );
process.exit(1);
};
module.exports = objParams;