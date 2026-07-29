// Find the minimum element in array 

function minimumelement(arr){
    let minimum = arr[0]

    for(let i= 0; i < arr.length; i++){
        let current = arr[i];
    
        if(current < minimum){
            minimum = current;
        }
    }
    return minimum;
}


console.log(minimumelement([10,30,2,30,50,1]));
console.log(minimumelement([100,3,20,3000,500,1.5]));
