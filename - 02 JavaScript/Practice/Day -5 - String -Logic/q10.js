// Toggle case



function togglecase(str) {
    let result = ""


    for (let i = 0; i < str.length; i++) {
        let ch = str[i]
        
        if(ch >= "A" && ch <= "Z" ){
            result+= ch.toLowerCase()
        } 

        else{
            result+= ch.toUpperCase();
        }
    }

    return result;
}

console.log(togglecase("JaVaScRiPt"));

