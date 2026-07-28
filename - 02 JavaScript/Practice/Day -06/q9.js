//  Remove Duplicates from an Array (Without Set)
function removeDuplicates(arr){
    let result =  [] 

    for(let i=0; i < arr.length; i++){
        let current = 0;
        let found = 0;
    }

    for(let j=0; j < arr.length; j++){
        if(result === current){
            found = true;
            break;
        }
    }

    if(!result){
        result.push(current)
    }

}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
console.log(removeDuplicates([10, 10, 10]));          // [10]
console.log(removeDuplicates([5, 4, 3, 2, 1]));       // [5, 4, 3, 2, 1]
console.log(removeDuplicates([1, 2, 3, 2, 1, 4]));    // [1, 2, 3, 4]