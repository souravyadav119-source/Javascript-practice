const input = document.getElementById("numberInput");
const button = document.getElementById("checkBtn");
const result = document.getElementById("result");
const resetBtn = document.getElementById("resetBtn");

//  Helper function 

function factorial(num) {
  let product = 1;

  while (num > 0) {
    product *= num;
    num--
  }

  return product;
}


//  Strong number


function isStrongNumber(num) {
  let original = num;
  let sum = 0;


  while (num > 0) {
    let digit = num % 10;
    num = Math.floor(num / 10);
    sum += factorial(digit);
  }

  return sum === original;
}


// Perfect Number



function isPerfectNumber(num) {
  let sum = 0;

  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }
  return sum === num;

}



// Spy number

function isSpyNumber(num) {
  let product = 1;
  let sum = 0;

  while (num > 0) {
    let digit = num % 10;
    num = Math.floor(num / 10);
    product *= digit;
    sum += digit;
  }

  return product === sum;
}

// Harshad Number


function isHarshadNumber(num) {
  let original = num;
  let sum = 0;

  while (num > 0) {

    let digit = num % 10;
    num = Math.floor(num / 10);
    sum += digit;
  }

  return original % sum === 0;
}


// Neon Number

function isNeoNumber(num) {
  let square = num * num;
  let sum = 0;


  while (square > 0) {

    let digit = square % 10;
    square = Math.floor(square / 10);
    sum += digit;
  }
  return sum === num;
}

// Perfetct Square Number

function isPerfectSquare(num) {
  let root = Math.sqrt(num);
  return Number.isInteger(root);
}

// Count digit 

function count(num) {

  if (num === 0) {
    return 1;
  }

  let count = 0;
  while (num > 0) {
    count++;


    num = Math.floor(num / 10);
  }

  return count;
}

//  Automorphic number

function isAutomorphicNumber(num) {
  let square = num * num;
  let digits = count(num);
  let lastdigits = square % (10 ** digits);
  return lastdigits === num;
}





button.addEventListener("click", function () {

  if (input.value.trim() === "") {
    result.innerHTML = "⚠ Please enter a number";
    return;
  };


  let num = Number(input.value);

  result.innerHTML = "";

  if (isStrongNumber(num)) {
    result.innerHTML += "Strong Number <br>";
  }

  if (isPerfectNumber(num)) {
    result.innerHTML += "Perfect Number <br>";
  }


  if (isSpyNumber(num)) {
    result.innerHTML += "Spy Number <br>";
  }

  if (isHarshadNumber(num)) {
    result.innerHTML += "Harshad Number <br>";
  }

  if (isNeoNumber(num)) {
    result.innerHTML += "Neon Number <br>";
  }

  if (isPerfectSquare(num)) {
    result.innerHTML += "Perfect Square Number <br>";
  }

  if (isAutomorphicNumber(num)) {
    result.innerHTML += "Automorphic Number <br>";
  }


  if (result.innerHTML === "") {
    result.innerHTML = "No special property found"
  }

})

resetBtn.addEventListener("click", function () {
  input.value = "";
  result.innerHTML = "";
  input.focus();
});



// Enter key support

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    button.click();
  }
});