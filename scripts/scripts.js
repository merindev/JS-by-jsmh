//This is a demo

console.log("Hello lets start over again");

//Javascript variable

let person = {
    name: "Merin",
    age: 26
}
console.log(typeof person);

let typeofVariable = {
    boolean: true,
    string: "Head",
    number: 25
};

console.log(typeof typeofVariable.boolean)

let dynamicArray =["Merin","Jerin","Serin"]
dynamicArray[3] = "Brothers in arms"
console.log(dynamicArray)

//Javascript functions

function greetUser(firstName,lastName){
    console.log(firstName + " " + lastName)
}
greetUser("Risalat Hasan","Merin")

//Javascript operator

let compare = 1
console.log(compare>0)
console.log(compare>=1)
console.log(compare<=1)
console.log(compare<0)

let customer = 90;
let typeofCustomer = customer >100 ? 'Gold':'Silver'
console.log(typeofCustomer);

let increment = 10;
increment += 10;
console.log(increment);

let highIncome = false;
let goodCredit = true;
let eligibleForloan = highIncome && goodCredit;
let refusedLoan =!eligibleForloan;
console.log("Loan eligibility is "+eligibleForloan);
console.log("Loan refused is "+ refusedLoan)

let defaultColor = undefined;
let selectedColor = "blue";
let currentColor = defaultColor || selectedColor
console.log(currentColor);
let colorA = "red";
let colorB = "blue";
let colorC = colorA;
colorA = colorB
colorB = colorC
console.log(colorA)
console.log(colorB)