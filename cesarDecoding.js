// let textInput = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
// let textInput = "BCDEFGHIJKLMNOPQRSTUVWXYZAbcdefghijklmnopqrstuvwxyza"

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
                
// console.log(resultindex)

if (resultindex>=1 && resultindex<=25){
        let ou = alphabet[resultindex-1]
        outArr.push(ou)
     } else if (resultindex == 0){
        let ou1 = alphabet[resultindex+25]
        outArr.push(ou1)
     } else if (resultindex>26 && resultindex<=51){
       let ou2 = alphabet[resultindex-1]
       outArr.push(ou2)
     } else if (resultindex == 26){
     let ou3 = alphabet[resultindex+25]
     outArr.push(ou3)
     } else {
       outArr.push(item)
     }
})

// конвертация выводного массива в строку (convert output array to string)
console.log(outArr.join(""))
return outArr.join("")
}