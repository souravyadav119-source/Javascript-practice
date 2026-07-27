//  Remove Duplicates from an Array (Without Set)

function removeDuplicates(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        let found = false;

    
        for (let j = 0; j < result.length; j++) {
            if (result[j] === current) {
                found = true;
                break;
            }
        }

        
        if (!found) {
            result.push(current);
        }
    }

    return result;
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
console.log(removeDuplicates([10, 10, 10]));          // [10]
console.log(removeDuplicates([5, 4, 3, 2, 1]));       // [5, 4, 3, 2, 1]
console.log(removeDuplicates([1, 2, 3, 2, 1, 4]));    // [1, 2, 3, 4]