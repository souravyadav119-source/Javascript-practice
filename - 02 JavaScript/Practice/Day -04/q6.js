// Automorphic number 
function count(num) {
    let count = 0;

    while (num > count) {
        count++;
        num = Math.floor(num / 10);
    }

    return (count);
}

function automorphicnumber(num) {

    let square = num * num;


    let digit = count(num);
 
 
    let lastdigit = square % (10 ** digit)
 
    if (lastdigit === num) {
        console.log("Automorphic number");
    } else {
        console.log("Not Automorphic number");

    }
}

automorphicnumber(9);
automorphicnumber(7);
automorphicnumber(25);
automorphicnumber(625);