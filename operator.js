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

let testNumber = max(1111,112)
console.log(testNumber)
function max(a,b){
    return(a>b) ? a:b
}
let geoMetry = landsacpe(1000,500)
console.log(geoMetry)
function landsacpe(width,height){
    return(width>height)
}

const output = fizBuzz(true)
console.log(output)
function fizBuzz(input){
    if(input % 3 == 0 && input % 5 == 0) 
    return 'FizBuzz'
    if(input % 3 == 0)
    return 'Fiz'
    if(input % 5 == 0)
    return 'Buzz'
    if(input !== number)
    return 'NaN'
}

checkSpeed(10)
function checkSpeed(speed){
    const speedLimit = 70;
    const kmPerminuite = 5;
    if(speed<speedLimit){
        console.log("Speed is Okay!!!");
    }
    else{
        let points = Math.floor((speed-speedLimit)/kmPerminuite)
        if(points>=12){
            console.log("License is suspended!!!");
        }
        else{
            console.log('Points:',points);
        }
    }
}