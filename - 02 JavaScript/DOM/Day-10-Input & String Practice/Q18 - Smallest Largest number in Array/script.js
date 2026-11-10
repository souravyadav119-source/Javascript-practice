let number = [12, 45, 23, 67, 89, 34, 56];

let largest = -Infinity;
let secondLargest = -Infinity;


for (let i = 0; i < number.length; i++) {
    if (number[i] > largest) {
        secondLargest = largest;
        largest = number[i];
    }

    else if (number[i] > secondLargest && number[i] !== largest) {
        secondLargest = number[i];
    }
}

console.log("Largest Number", largest);
console.log("Second Largest", secondLargest);


