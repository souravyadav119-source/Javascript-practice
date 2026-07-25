//  Reverse array (without reverse())
 function reverseArray(arr){
     let result = [];

     for(let i = arr.length-1; i>=0; i--){
        result.push(arr[i]);                
     }
     return result ;
 }


 console.log(reverseArray([10,20,30,40,50]));
 