let numbers = [0,5,0,3,8,2,1];

let result = [];


for(let i = 0; i < numbers.length; i++){
    if(numbers[i] !== 0){
        result.push(numbers[i]);
    }
}

let zeroCount = numbers.length - result.length;

for(let i = 0; i < zeroCount; i++){
    result.push(0);
}


console.log(result);
