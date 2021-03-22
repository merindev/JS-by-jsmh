let j = 0;
do {
    if(j%2 !== 0){
        console.log(j)
    }
    j++ ;
}
 while(j <= 10)

 const person = {
     name: "Merin",
     age: 26
}
for(let key in person){
    console.log(key,person[key]);
}

let colors =["Red","Green","Blue","Yellow"]
for(let index in colors){
    console.log(index,colors[index]);
}
let number = 0;
do {
    if(number%2 !== 0){
        console.log(number)
    }
    number++
}
while(number <=20)

let classes =["Six","Seven","Eight"];
for(let code in classes){
    console.log(code,classes[code])
}

let testingNumbers = ["One","Two","Three"];
for(testingNumber of testingNumbers){
    console.log(testingNumber)
}

let breakLoop = 0;
while(breakLoop < 20){
    if(breakLoop === 10) break;
    console.log(breakLoop);
    breakLoop++
}