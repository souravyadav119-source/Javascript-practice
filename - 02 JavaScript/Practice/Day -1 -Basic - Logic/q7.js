// Factorial nikalna hai 
   
// function factorial(num){
//     fact =  1;
//     for(let i = 1 ; i <= num; i++){
//         fact = fact * i;
//     }
//     console.log(fact);
// }
// factorial(5);


function factorial(num){
    fact = 1; 

    while(num > 0){
    fact = fact * num;
    num--
    }
    console.log(fact);
}

factorial(8)