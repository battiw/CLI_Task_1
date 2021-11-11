let textInput = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

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

    if (resultindex>=0 && resultindex<=12){
        let ou = alphabet[25-resultindex]
        outArr.push(ou) 
    
    } else if (resultindex>=13 && resultindex<=25){
        let ou1 = alphabet[25-resultindex]
        outArr.push(ou1) 
    
    } else if(resultindex>=26 && resultindex<=38){
        let ou2 = alphabet[51-(resultindex-26)]
        outArr.push(ou2) 
    } else if (resultindex>=39 && resultindex<=51){
        let ou3 = alphabet[51-(resultindex-26)]
        outArr.push(ou3) 
    } else {
        outArr.push(item)
    }
})

// конвертация выводного массива в строку (convert output array to string)
console.log(outArr.join(""))
