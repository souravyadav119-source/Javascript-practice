// Q10  Largest Among Three Numbers Question
// Teen numbers diye gaye hain. Sabse bada (largest) number print karo.

function largest(a, b, c){
if( a>=b && a<=c){
    console.log(a +  " is the largest number");
}
else if( b >= c & b <= c){
    console.log(b + " is the largest number");
}
else {
    console.log(c + " is the largest number");
}
}

largest(10,15,25)