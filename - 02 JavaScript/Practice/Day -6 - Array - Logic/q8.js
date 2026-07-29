// Second largest element

function secondlargestnumber(arr) {
    let largest = arr[0];
    let secondlargest = arr[0];
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];


        if (current > largest) {
            secondlargest = largest
            largest = current
        }         
        else if (current < largest && current > secondlargest) {
            secondlargest = current
        }
    }

    return secondlargest;
}

console.log(secondlargestnumber([10, 20, 30, 40, 50, 90, 70]));   
console.log(secondlargestnumber([5, 2, 8, 1]));                  
console.log(secondlargestnumber([-10, -2, -5])); 
 