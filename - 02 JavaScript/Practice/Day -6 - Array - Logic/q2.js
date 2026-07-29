// Largest element in array

function largestelement(arr) {
    let largest = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]
        }
    }

    return largest;
}

console.log(largestelement([10, 20, 30, 40, 50]));
console.log(largestelement([10, 200, 30, 400, 500]));
console.log(largestelement([10, 20, 300, 40, 50]));
console.log(largestelement([-10, -20, -5]));