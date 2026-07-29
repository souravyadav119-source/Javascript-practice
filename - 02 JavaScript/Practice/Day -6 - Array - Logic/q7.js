//  Find kargest number in Array

function largestnumber(arr){
    let largest = arr[0];

    for(let i = 0; i < arr.length; i++){
    
        if(arr[i] > largest){
      largest = arr[i];
        }
    }
return largest
}

console.log(largestnumber([10, 25, 8, 99, 45])); // 99
console.log(largestnumber([-5, -10, -2]));       // -2
console.log(largestnumber([7]));                 // 7   