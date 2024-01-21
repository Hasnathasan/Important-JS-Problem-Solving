let num1 = 4;
let num2 = 5;
console.log(num1, num2);


// Approch 1
// let temp = num1;
// num1 = num2;
// num2 = temp;
// console.log(num1, num2);

// Approch 2 destruturing

[num1, num2] = [num2, num1];
console.log(num1, num2);