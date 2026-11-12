let numbers = [10, 20, 10, 30, 20, 10, 40, 30];

let frequency = {};

for (let i = 0; i < numbers.length; i++) {

    let num = numbers[i];

    if (frequency[num]) {
        frequency[num]++;
    }
    else {
        frequency[num] = 1;
    }

}

for (let num in frequency) {
    console.log(num, "appears", frequency[num], "times");
}