// Don't touch this array
let names = ['Alex', 'Sam', 'John', 'Lucia', 'Marco', 'Kristina'];
let rndName = names[Math.floor(Math.random() * names.length)];

// Your code here

// exercise 1
function exercise1() {
  console.log('Hi! My name is Alex');
}
exercise1();

// exercise 2 // exercise 3 (add an argument/ value) // exercise 4 (add lastname)
// exercise 5 (add name + sson as parameter/ value for lastname)
function exercise2(name = 'Alex', lastname = name + 'sson') {
  return `Hi! My name is ${name} ${lastname}`;
}

console.log(exercise2('Milo'));

// exercise 6 // exercise 7
function exercise6(input, input2) {
  let div = document.querySelector('#exercise6');
  let para = document.createElement('p');
  para.style.color = 'black';
  para.style.backgroundColor = '#f8f8f8';
  para.style.borderRadius = '5px';
  para.style.textAlign = 'center';
  para.innerText = input;
  div.appendChild(para);

  let para2 = document.createElement('p');
  para2.style.color = '#fafafa';
  para2.style.backgroundColor = '#282828';
  para2.style.borderRadius = '5px';
  para2.style.textAlign = 'center';
  para2.innerText = input;
  para2.textContent = input2;

  div.append(para2);
}
exercise6('Here I AM!', exercise2('Milo', 'Waegar'));
exercise6('', exercise2('Milo'));
exercise6(exercise2());

// exercise 7
