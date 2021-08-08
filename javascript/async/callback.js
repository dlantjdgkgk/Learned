'use strict';

// JavaScript is synchronous.
// synchronous : 정해진 순서에 맞게 코드가 실행
// asynchronous : 비동기적으로 코드가 언제 실행될지 예측 불가능
// hositing : var , function declared. 변수나 함수가 선언되면 맨위로 올라간다.

console.log(1);
setTimeout(() => console.log(2), 1000); // 비동기적인 실행 방법
console.log(3);

// Synchronus callback
function printImmediately(print) {
  print();
}
printImmediately(
  function () {
    console.log('sad')
  });
// Asynchrounus callback