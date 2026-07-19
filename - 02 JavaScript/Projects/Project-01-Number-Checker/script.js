const input = document.getElementById("numberInput");
const button = document.getElementById("checkBtn");
const result = document.getElementById("result");


//  Helper function 

function factorial(num){
  let product = 1;

  while(num > 0){
  product*= num;
  num--
  }

return product;
}


//  Strong number


function strongno(num){
 let original = num;
 let sum = 0;


while(num > 0){
let digit = num % 10;
num = Math.floor(num / 10);
sum+= factorial(digit);
}

return sum === original;
}


// Perfect Number



function perfectno(num){
  let sum = 0;

  for(let i=1;i < num; i++){
    if( num % i === 0){
    sum+=i;
    }
  }
 return sum === num;

}



// Spy number

function Spynumber(num){
 let product = 1;
  let sum = 0;

  while(num > 0){
   let digit = num % 10;
   num = Math.floor(num /10);
   product*= digit;
   sum+=digit;
  }

  return product === sum;
}

// Harshad Number


function harshadnumber(num){
  let original = num;
  let sum = 0;

  while(num > 0){

    let digit = num % 10;
    num = Math.floor(num / 10);
    sum+= digit;
  }

  return original % sum === 0;
}


// Neon Number

function neonumber(num){
let square = num * num;
let sum = 0;


while(square > 0){

  let digit = square % 10;
  square = Math.floor(square / 10);
  sum+=digit;
}
return sum === num;
}

// Perfetct Square Number

function perfectsquare(num){
  let root = Math.sqrt(num);
  return Number.isInteger(root);
}

// Count digit 

function count(num){
  let count = 0;
while(num > 0){
  count++;


  num = Math.floor(num / 10);
}

return count;
}

//  Automorphic number

function automorphicnumber(num){
 let square = num * num ;
 let digits = count(num);
 let lastdigits = square % (10 ** digits);
 return lastdigits === num;  
}





button.addEventListener("click",function() {

   if (input.value === "") {
        result.innerHTML = "⚠ Please enter a number";
        return;
    }


    let num = Number(input.value);

    result.innerHTML = "" ;

  if(strongno(num)){
    result.innerHTML += "Strong Number <br>"
  };

  if(perfectno(num)){
    result.innerHTML += "Perfect Number <br>"
  };
  
  
  if(Spynumber(num)){
    result.innerHTML += "Spy Number <br>"
  };

  if(harshadnumber(num)){
    result.innerHTML+= "Harshad number <br>"
  }

  if(neonumber(num)){
    result.innerHTML+= "Neon number <br>"
  }

  if(perfectsquare(num)){
    result.innerHTML+= "Perfect Square Number <br>"
  }
   
  if(automorphicnumber(num)){
    result.innerHTML+= "Automorphic Number <br>"
  }


  if(result.innerHTML ===""){
    result.innerHTML = "No Special Number"
  }

})