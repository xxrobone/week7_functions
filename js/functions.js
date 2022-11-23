// Don't touch this array
let names = ['Alex', 'Sam', 'John', 'Lucia', 'Marco', 'Kristina'];

// Your code here

// exercise 1
function exercise1() {
  console.log('Hi! My name is Alex');
}
exercise1();

// exercise 2

let name = names[Math.floor(Math.random() * names.length)];
function exercise2(input) {
  return `Hi! My name is ${input}`;
}

console.log(exercise2(name));
