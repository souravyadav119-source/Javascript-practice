//  Count Lowercase Letters

function isLowerCase(ch){
    return (ch >= "a" && ch <= "z")
}

function countlowercase(str){
    let count = 0; 

    for( let i = 0; i < str.length; i++){
        if(isLowerCase(str[i])){
            count++
        }
    }
    return count
}

console.log(countlowercase("JaVaScRiPt"));   // 5
console.log(countlowercase("HELLO"));        // 0
console.log(countlowercase("javascript"));   // 10
console.log(countlowercase("HeLLo"));        // 2