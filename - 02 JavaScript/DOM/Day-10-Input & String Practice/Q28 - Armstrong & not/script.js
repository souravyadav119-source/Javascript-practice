let number = 153;

let originalNumber = number;
let sum = 0;

while (number > 0){
   let digit = number % 10;

   sum+=digit ** 3;
   
   number = Math.floor(number / 10);
}

if(sum === originalNumber){
    console.log(originalNumber + 'is an Armstrong Number');
} 
else{
     console.log(originalNumber + 'is not an Armstrong Number');    
}