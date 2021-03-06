'use strict';

const fruits = ['π', 'π'];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

for (let fruit of fruits) {
  console.log(fruit);
}

fruits.forEach(fruit => console.log(fruit));

// push : λ°°μ΄μ μμ μλ ₯ // pop : λ°°μ΄μμ μμ μ­μ 
// unshift : λ°°μ΄μμ μ²«λ²μ§Έ μΈλ±μ€λΆν° μμ μ½μ
// shift : λ°°μ΄μμ μ²«λ²μ§Έ μΈλ±μ€λΆν° μμ μ­μ 
// splice : remove an item by index position

console.log(fruits);
console.clear();
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1, 'π', 'π­');
console.log(fruits);
// combine two arrays
const fruits2 = ['π₯', 'π§'];
const newfruit = fruits.concat(fruits2);
console.log(newfruit);

// searching
// indexOf : λ°°μ΄μ λͺλ²μ§Έ μΈλ±μ€μ λ€μ΄κ°μλμ§ νμΈνκΈ°
// includes : λ°°μ΄μ μμκ° λ€μ΄κ°μμΌλ©΄ trueλ₯Ό λ°ν
console.log(newfruit.indexOf('π₯'));