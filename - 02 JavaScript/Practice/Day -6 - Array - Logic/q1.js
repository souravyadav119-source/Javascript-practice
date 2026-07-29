// Sum of array 

function  sumArry(arr){
    let sum = 0;

    for(let i = 0; i < arr.length; i++){
        sum+= arr[i];
    }

    return sum;

}


console.log(sumArry([10,20,30,40,50]));
console.log(sumArry([1,2,3,4,5]));
console.log(sumArry([100,200]));
