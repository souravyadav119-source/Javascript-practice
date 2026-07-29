// Average fo array

function averageArray(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    let average = sum / arr.length

    return average;
}

console.log(averageArray([10, 20, 30, 40, 50, 60, 70, 80, 90]));
