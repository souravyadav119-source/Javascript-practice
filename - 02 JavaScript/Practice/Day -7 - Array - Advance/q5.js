// Sum of Even Number in Array 

function Evensum(arr){
    let sum = 0;

    for(let i=0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            sum+= arr[i];
        }
    }
    return sum; 
}

console.log(Evensum([1,2,3,4,5,6]));     
console.log(Evensum([10,15,20,25,30]));   
console.log(Evensum([1,3,5,7]));          
console.log(Evensum([2,4,6,8]));          