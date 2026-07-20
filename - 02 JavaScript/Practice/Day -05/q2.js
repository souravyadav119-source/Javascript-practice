// reverse string

function reversestring(str){
    let reverse = "";

    for(let i= str.length-1; i >= 0; i--){
        reverse += str[i];
    }
    return reverse;
}

// Palindrom string

function palindromestring(str){
    let reverse = reversestring(str);


    if(str === reverse){
        console.log("Palindrome String");        
    } else{
        console.log("Not Palindrome String");
    }
}


palindromestring("madam");
palindromestring("javascript");