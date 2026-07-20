// Reverse a String 

function reversestring(str){
    let reverse = "";

 for(let i = str.length - 1; i >= 0; i--){
reverse += str[i];
 }
//  console.log(reverse);
return reverse;
}

// reversestring("javascript")

console.log(reversestring("javascript"));
