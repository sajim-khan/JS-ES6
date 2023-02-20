const fish = {
    name: 'Hilsa fish',
    address : 'Chandpure',
    contact : '121325465',
    color : 'silver',
    price : 3000,
}

// const phone = fish.phone;
// const color = fish.color;
// const price = fish.price;

const {contact} = fish;
console.log(contact);

const {age} = {name : 'Alia', age : 34, contact : '121325465'}
console.log(age);

// Array destructuring
const [first, second ] = [213,234,4,34,45];
console.log(second); //Output : 234
// another Example
const actor = ['amir', 'james', 'salman']
const [one, two, third] = actor;
console.log(third); //Output :salman


// example
function getName() {
    return ['Sajim', 'Khan'];
}
const [firstName, secondName] = getName()
console.log(firstName); //Output : Sajim