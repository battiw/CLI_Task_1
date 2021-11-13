const alphabet = require( "./alphabet" );

module.exports = function (text) {

let alpLen = alphabet.length-1;

let outArr=[];

// преобразование строки в массив (converting string to array)
let strArr = text.split( '' );

// перебор входящего массива (iterating over the incoming array)
strArr.forEach(( item ) => {
    
        // поиск в исходном массиве элемента из входящего массива (search in the original array for an element from the input array)
        let result = alphabet.find(( item1 ) => item1 === item );
        let resultindex = alphabet.findIndex(( item1 ) => item1 === item ); 
                
   if ( result && resultindex !== alpLen && resultindex+26 !== alpLen ) {
        let letter1 = alphabet[resultindex+1];
        outArr.push( letter1 );
   } else if ( alpLen == resultindex ) {
        let letter2 = alphabet[26];
        outArr.push( letter2 );
   } else if ( alpLen == resultindex+26 ) {
       let letter3 = alphabet[0];
       outArr.push( letter3 );
   } else {
       outArr.push( item );
   };
});

// конвертация выводного массива в строку (convert output array to string)
return outArr.join("");
};
