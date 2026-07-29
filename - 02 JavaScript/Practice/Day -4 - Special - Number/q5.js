// perfect number 

function perfect(num){
let sum = 0;

for(let i=1; i<num; i++){
      if(num % i === 0){
        sum+=i
      }
}
if(sum===num){
    console.log("Perfect number");
} else{
    console.log("Not Perfect number");
}

return(sum)
} 

perfect(7);
perfect(9);
perfect(15);
