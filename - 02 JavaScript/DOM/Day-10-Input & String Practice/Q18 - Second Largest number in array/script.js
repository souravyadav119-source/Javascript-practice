let numbers = [12, 45, 23, 67, 89, 34, 56];

let largest = -Infinity;
let secondLargest = -Infinity;

for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] > largest) {

        secondLargest = largest;
        largest = numbers[i];

    }
    else if (numbers[i] > secondLargest && numbers[i] !== largest) {

        secondLargest = numbers[i];

    }

}

console.log("Largest Number:", largest);
console.log("Second Largest:", secondLargest);