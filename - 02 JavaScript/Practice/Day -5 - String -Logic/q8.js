// Count Uppercase Letters

function isUpperCase(ch){
    return (ch >= "A" && ch <= "Z")
}


function countuppercase(str){
    let count = 0;

    for(  let i = 0; i < str.length; i++){
        if(isUpperCase(str[i])){
            count++;
        }
    }
    return count ;
}


console.log(countuppercase("JaVaScRiPt"));   // 5
console.log(countuppercase("HELLO"));        // 5
console.log(countuppercase("javascript"));   // 0
console.log(countuppercase("HeLLo"));        // 3