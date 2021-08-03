'use strict';

// variable  => {} 안에서만 name이 정의되면{} 밖에서는 사용 불가 
// 그러나 global을 쓰면 어디서나 가능하다.

let globalName = 'global name'; {
  let name = 'Ellie';
  console.log(name);
  name = 'Hello';
  console.log(name);
}

// const
const count = 17;
const size = 17.1;
console.log(`value = ${count} , type = ${typeof count}`);
console.log(`value = ${size} , type : ${typeof size}`);

// string
const alphabet = 'c';
const mooseong = 'mooseong';
const greeting = 'Hello' + mooseong;
console.log(greeting);
console.log(`value = ${greeting} , type : ${typeof greeting}`);
const helloMoo = `handsome ${mooseong}`; // template literals (string)
console.log(`value = ${helloMoo} , type : ${typeof helloMoo}`);

// symbol, create unique identifiers for objects
// const symbol1 = Symbol('id');
// const symbol2 = Symbol('id');
// console.log(symbol1 === symbol2); // false

// const symbol1 = Symbol.for('id');
// const symbol2 = Symbol.for('id');
// console.log(symbol1 === symbol2); // true

// console.log(`value = ${Symbol1.description}`); // 이렇게 string 으로 변환하고 사용