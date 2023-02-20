// date and time 
/*const date1 = new Date('2023-1-1');
const date2 = new Date('2023-2-20');

if (date1.getTime() < date2.getTime()) {
    console.log('January was before february');
}   else {
    console.log('February was after january');
}*/


// error in js

/*
// 1. range error : not in js

const numbers = [436,45,45,54,56]
console.log(numbers[7]);    // it will show undefine

// 2. reference error 
console.log(number);
const number = 10

// 3. syntax error
*/

// Try Catch Finally
/*try { console.log(djfhdj);
    //const myName  = 'sajim';
    
} catch(error){
    console.log('in catch');
    console.log(error); // if this line is comment out than reference error will not occur
}
finally{
    console.log('this is the last line');
}*/

// validation

const number1 = 10;
const number2 =  10;
const numbers = number1 + number2;
console.log(numbers)
if (typeof numbers === 'number'){
    console.log('value is a number');
} else {
    console.log('value is not a number');
}

// array and object check

const  numberArray =  [ 21,32,34,4,56,7]

console.log(Array.isArray(numberArray))

const friend = document.getElementById('friends');
const newFriend = document.createElement('div');
newFriend.innerHTML = `
<h3 class="friend-name">Friend-2</h3>
<p>Ratione facere quaerat explicabo earum molestiae at amet minima beatae!</p>
` 
friend.appendChild(newFriend);