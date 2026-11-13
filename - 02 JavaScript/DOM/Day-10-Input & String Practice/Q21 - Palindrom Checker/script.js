let str = 'madam';
let reverse = '';


for (let i = str.length - 1; i>=0; i--){
    reverse +=str[i];
}

if(str === reverse){
    console.log(str + ' is a Palindrom');
} else{
    console.log(str + ' is not a Palindrom');
}