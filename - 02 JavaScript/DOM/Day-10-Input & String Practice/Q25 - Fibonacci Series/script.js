let number = 10;

let a = 0;
let b = 1;
let next;

for (let i = 1; i <= number; i++) {

    console.log(a);

    next = a + b;

    a = b;
    b = next;

}