const alphabet = require("./alphabet")

module.exports = function (text){

let alpLen = alphabet.length-1

let outArr=[]

// преобразование строки в массив (converting string to array)
let strArr = text.split('')

// перебор входящего массива (iterating over the incoming array)
strArr.forEach((item)=>{
    
        // поиск в исходном массиве элемента из входящего массива (search in the original array for an element from the input array)
        let result = alphabet.find((item1)=>item1===item)
        let resultindex = alphabet.findIndex((item1)=>item1===item)
                
   if (result && resultindex!==alpLen && resultindex+26!==alpLen){
        let ou = alphabet[resultindex+1]
        outArr.push(ou)
   } else if (alpLen==resultindex){
        let ou1 = alphabet[26]
        outArr.push(ou1)
   } else if (alpLen==resultindex+26){
       let ou2 = alphabet[0]
       outArr.push(ou2)
   } else {
       outArr.push(item)
   }
})

// конвертация выводного массива в строку (convert output array to string)
console.log(outArr.join(""))
return outArr.join("")
}
