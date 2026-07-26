//  Count Even Numbers in an Array

function counteven(arr) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            count++
        }
    }

    return count;
}

console.log(counteven([2, 4, 6, 8]));        //4

console.log(counteven([1, 3, 5]));                       // 0

console.log(counteven([1, 2, 3, 4, 5]));    // 2