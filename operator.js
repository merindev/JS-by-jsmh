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