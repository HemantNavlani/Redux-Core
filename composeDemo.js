import { compose } from 'redux'

function removeSpaces(string){
    return string.split(" ").join("")
}

// console.log(removeSpaces("abc def ghi"))

function repeatString(string){
    return string.repeat(2);//can also use string+string
}


function convertToUpper(string){
    return string.toUpperCase();
}
// console.log(convertToUpper("abcd"))


const input = "abc def ghi"


// const output = convertToUpper(repeatString(removeSpaces(input)))  //h(g(f(x)))
// console.log(output)

const composedFunction = compose(removeSpaces,repeatString,convertToUpper)

// console.log(composedFunction)

console.log(composedFunction(input))