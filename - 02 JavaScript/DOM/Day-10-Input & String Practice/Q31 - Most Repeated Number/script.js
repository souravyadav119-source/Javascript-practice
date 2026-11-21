let numbers = [2, 5, 3, 2, 8, 2, 5, 5, 5, 1];

let frequency = {};

for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];


    if (frequency[num]) {
        frequency[num]++;
    } else {
        frequency[num] = 1;
    }
}

let maxCount = 0;
let mostRepeated;

for (let num in frequency) {
    if (frequency[num] > maxCount) {
        maxCount = frequency[num];
        mostRepeated = num;
    }
}

console.log(Number(mostRepeated));
