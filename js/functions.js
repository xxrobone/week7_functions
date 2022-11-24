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

// exercise 6 // exercise 7 // exercise 8
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
  para2.textContent = input2;

  div.append(para2);
}
exercise6('Here I AM!', exercise2('Milo', 'Waegar'));
exercise6('', exercise2('Milo'));
exercise6(exercise2());

//exercise 9 // exercise 10 adding exercise 2 with names
function exercise9() {
  for (let i = 0; i < names.length; i++) {
    console.log(exercise2(names[i]));
  }
}
exercise9();

// exercise11
function exercise11() {
  if (Array.isArray(names)) {
    for (let i = 0; i < names.length; i++) {
      console.log(
        `%c ${exercise2(names[i])}`,
        'color: #990099; background: #f8f8f8'
      );
      let div = document.querySelector('#exercise11');
      let para = document.createElement('p');
      para.style.color = 'green';
      para.style.backgroundColor = '#f8f8f8';
      para.style.borderRadius = '5px';
      para.style.textAlign = 'center';
      para.innerText = exercise2(names[i]);
      div.appendChild(para);
    }
  } else {
    console.log(
      ' %c OBS! This is not an array, please use and array',
      'color: black; background: tomato'
    );
  }
}
exercise11();

// exercise 13
function exercise13() {
  for (let i = 0; i < names.length; i++) {
    console.log(
      `%c ${names[i].toUpperCase()}`,
      'color: yellow; background: #121212'
    );
  }
}
exercise13();

// exercise 14
function exercise14() {
  for (let i = 0; i < names.length; i++) {
    console.log(`%c ${names[i].length}`, 'color: red; background: black');
  }
}
exercise14();

// exercise 15
function exercise15() {
  for (let i = 0; i < names.length; i++) {
    let str = 'includes an S';
    if (names[i].includes('s')) {
      console.log(`%c ${names[i]} ${str}`, 'color: pink; background: red');
    } else {
      console.log(`%c ${names[i]}`, 'color: pink; background: orangered');
    }
  }
}
exercise15();

// exercise 16 using forEach instead of for loop
function exercise16(input) {
  if (Array.isArray(input)) {
    input.forEach(function (value) {
      let div = document.querySelector('#exercise16');
      let para = document.createElement('p');
      para.textContent = value + ' this name has no a';
      para.style.color = 'tomato';
      if (value.toLowerCase().includes('a')) {
        para.textContent =
          value +
          ' / ' +
          'the letter a is at index: ' +
          value.toLowerCase().indexOf('a');
        para.style.color = 'lightgreen';
      } else {
        console.log('These names have no A´s: ' + value);
      }
      div.append(para);
    });
  }
}
exercise16(names);

// exercise 17
// regex

function exersice17(input) {
  let onlyLetters = /^[A-Za-z]*$/;
  let onlyNumbers = /^[0-9]*$/;
  let threeLettersFollowedByThreeNumbers = /^[A-Za-z]{3}[0-9]{3}$/;
}
/* 
function exercise18() {
  let userInput = prompt('Enter 5 letters');
  let pattern = /[A-Ö]{5}/i;
  if (userInput.match(pattern) && userInput.length === 5) {
    alert('Passed');
  } else {
    alert("didn't pass");
  }
}
exercise18(); */

// testing so that array is an array :D
function test() {
  if (Array.isArray(names)) {
    names.forEach(function (value) {
      console.log(value);
    });
  } else {
    console.log('not an array');
  }
}
test(names);
