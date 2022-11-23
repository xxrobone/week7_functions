// Don't touch this array
let names = ['Alex', 'Sam', 'John', 'Lucia', 'Marco', 'Kristina'];
let rndName = names[Math.floor(Math.random() * names.length)];

// Your code here

// exercise 1
function exercise1() {
  console.log('Hi! My name is Alex');
}
exercise1();

// exercise 2 // exercise 3 (add an argument/ value) // exercise 4 (add lastname) // exercise 5 (add name + sson as parameter/ value for lastname)
function exercise2(name = 'Alex', lastname = name + 'sson') {
  return `Hi! My name is ${name} ${lastname}`;
}

console.log(exercise2('Milo'));

// exercise 4
