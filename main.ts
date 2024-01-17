console.log("hello world")

//? Type Annotaacion
let myVar: number = 3 // questa variabile potrà contenere solo numeri
myVar += 10
console.log(myVar)

//? Interfaccia
interface MyInterface{
    myNumber: number
    myString: string
}

let myInterface: MyInterface = {
    myNumber: 12,
    myString: "Hello"
}

console.log("num "+ myInterface.myNumber)
console.log("str "+ myInterface.myString)