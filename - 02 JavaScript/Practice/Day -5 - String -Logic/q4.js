// Count Consonants

function Countconsonants(str) {
    str = str.toLowerCase();
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        let chr = str[i];

        if (chr >= "a" && chr <= "z") {
            if (
                chr !== "a" &&
                chr !== "e" &&
                chr !== "i" &&
                chr !== "o" &&
                chr !== "u"
            ) {
                count++
            }
        }
    }
    return count;



}

console.log(Countconsonants("javascript"));
console.log(Countconsonants("hello 1234"));
console.log(Countconsonants("madam"));
console.log(Countconsonants("rohit"));