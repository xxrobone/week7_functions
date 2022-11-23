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

// exercise 6
function exercise6() {
  let div = document.querySelector('#exercise6');
  let para = document.createElement('p');
  para.style.color = 'black';
  para.style.backgroundColor = '#f8f8f8';
  para.style.borderRadius = '5px';
  para.style.textAlign = 'center';
  para.innerText = 'Here I AM!';

  div.appendChild(para);
}
exercise6();
