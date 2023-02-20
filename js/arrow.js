// More example
const add = (num1, num2) => num1 + num2;
const total = add(10,20);
console.log(total);

// Another Example 
const add1 = (num1, num2) => num1 + num2;
const getFullName  = (first, last) => first + ' ' + last;
const addAll = (num1, num2, num3, num4, num5, num6) => num1 + num2 + num3 + num4 + num5 + num6;
const multiply = (num1, num2) => num1 * num2;
const result = multiply(5, 6);
console.log(result);

// No parameter
const getPi = () => 3.1416;
// one parameter
const doubleIt = (num) => num * 2;
// one parameter simple version
const fiveTimes = (num) => num * 5;

const doMath = (a, b) => {
    const sum = a + b;
    const mul = a * b;
    const result = mul / sum;
    return result;
}
const result1 = doMath(5,6);
console.log(result1);