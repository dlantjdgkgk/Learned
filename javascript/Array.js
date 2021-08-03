'use strict';

const fruits = ['🍕', '🍔'];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

for (let fruit of fruits) {
  console.log(fruit);
}

fruits.forEach(fruit => console.log(fruit));

// push : 배열에 원소 입력 // pop : 배열에서 원소 삭제
// unshift : 배열에서 첫번째 인덱스부터 원소 삽입
// shift : 배열에서 첫번째 인덱스부터 원소 삭제
// splice : remove an item by index position
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1, '🍟', '🌭');
console.log(fruits);
// combine two arrays
const fruits2 = ['🥖', '🧀'];
const newfruit = fruits.concat(fruits2);
console.log(newfruit);

// searching
// indexOf : 배열의 몇번째 인덱스에 들어가있는지 확인하기
// includes : 배열에 원소가 들어가있으면 true를 반환
console.clear();
console.log(newfruit.indexOf('🥖'));