// Count odd numbers in array

function countodd(arr) {
    let countnumber = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            countnumber++;
        }
    }

    return countnumber
}

console.log(countodd([10,20,30,40,50,60]));
console.log(countodd([10,21,30,41,50,61]));
