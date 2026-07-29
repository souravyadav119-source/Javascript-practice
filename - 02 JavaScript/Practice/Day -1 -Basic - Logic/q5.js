// Q5 Palindrome Number
// Check karo ki number palindrome hai ya nahi.
function isPalindrome(num){
    let original = num;
    let reverse = 0;


    while(num!==0){
        let digit = num % 10;
        reverse = reverse *10 + digit;
        num = Math.floor(num / 10);
    }

    if(reverse === original){
        console.log("Palindrome");
    } else{
        console.log("Not Palindrome");       
    }
}

isPalindrome(121)


