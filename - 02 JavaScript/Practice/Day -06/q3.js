// Smallest number 

function smallestelemnt(arr){
    let smallest = arr[0];

    for(let i = 0; i < arr.length; i++){
     if(arr[i] < smallest){
        smallest = arr[i]
     }
    }

    return smallest;
}

console.log(smallestelemnt([10,20,30,40,50,70]));
console.log(smallestelemnt([1000,2000,30,-40,-500,700]));
console.log(smallestelemnt([1000,2000,300,4,-5,-70]));