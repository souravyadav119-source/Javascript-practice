let numbers = [12, 45, 23, 67, 34, 89, 10];

let largest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}

console.log(largest);