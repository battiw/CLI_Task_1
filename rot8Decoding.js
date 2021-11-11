// let textInput = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
// let textInput = "IJKLMNOPQRSTUVWXYZABCDEFGHijklmnopqrstuvwxyzabcdefgh"
let textInput = "Ib dmzw mwa mb ikkcaiuca mb qcabw wlqw lqovqaaquwa lckquca, ..."

const alphabet = require("./alphabet")

let alpLen = alphabet.length-1

let outArr=[]

// преобразование строки в массив (converting string to array)
let strArr = textInput.split('')

// перебор входящего массива (iterating over the incoming array)
strArr.forEach((item)=>{
    
        // поиск в исходном массиве элемента из входящего массива (search in the original array for an element from the input array)
        let result = alphabet.find((item1)=>item1===item)
        let resultindex = alphabet.findIndex((item1)=>item1===item)

    if (resultindex>=0 && resultindex<8){
        let ou9 = alphabet[resultindex+18]
        outArr.push(ou9)
    } else if (resultindex>=8 && resultindex<=18){
        let ou = alphabet[resultindex-8]
        outArr.push(ou) 
    } else if (resultindex>18 && resultindex<26){
        let ou1 = alphabet[resultindex-8]
        outArr.push(ou1)

    } else if (resultindex>=26 && resultindex<=33){
        let ou2 = alphabet[resultindex+18]
        outArr.push(ou2)
    } else if (resultindex>=34 && resultindex<=43){
        let ou3 = alphabet[resultindex-8]
        outArr.push(ou3)
    } else if (resultindex>=44 && resultindex<=51){
        let ou8 = alphabet[resultindex-8]
        outArr.push(ou8)
    } else {
        outArr.push(item)
    }
})

// конвертация выводного массива в строку (convert output array to string)
console.log(outArr.join(""))
