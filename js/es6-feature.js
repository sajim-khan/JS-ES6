function add (num1, num2) {
    const result = num1 + num2;
    return result;
}

console.log(add(10,20));

// Example 2
function add (num1, num2 =0) {
    const result = num1 + num2;
    return result;
}

console.log(add(10));

// Example 3
function myName (first, second='khan') {
    const result = first + ' ' + second;
    return result;
}

//console.log(myName('My name is :',('Sajim Khan')));
console.log(myName('Sajim'));

