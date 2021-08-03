// 1. string concatenation
// console.log('my' + 'cat');
// console.log('1' + 2);
// console.log(`string literals : 1 + 2 = ${1 + 2}`);

for (let i = 0; i < 11; i++) {
  if (i % 2 === 1) {
    continue;
  }
  console.log(`짝수의 값 : ${i}`);
}