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

//Javascript opeartor

let hour = 23;

if (hour >= 6 && hour < 12){
    console.log("Good morning");
}
else if(hour >= 12 && hour <= 20){
    console.log("Good Afternoon");
}
else if(hour >= 20 && hour <= 23){
    console.log("Good Night");
}

//Switch & case

let role = "Registered";
switch(role){
    case 'Guest':
        {
            console.log("Guest user");
            break;
        }
    case 'Registered':
        {
            console.log("Registered User");
            break;
        }
    default:
        console.log("Unknown user")
}
if(role === "Guest"){
    console.log("Guest user")
}
else if(role === "Registered"){
    console.log("Registered user")
}
else {
    console.log("Unknown user")
}
for(let i = 10; i >= 0 ; i--){
   if(i%2 !== 0) console.log(i)
}