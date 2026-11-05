let numbers = [12,7,9,20,33,44,51,60];

let evenno = 0;
let oddno = 0;

for (let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 === 0){
        evenno++
    }
    else{
        oddno++
    }
}

console.log("even number:", evenno);
console.log("odd number:", oddno);

