"use strict";

// Promise is a JavaScript object for asynchronus operation.
// State : pending -> fullfilled or rejected
// Proudcer vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
  // doing some heavy work ( network, read files)
  console.log("안녕하세요");
  setTimeout(() => {
    resolve("ellie");
    reject(new Error("no network")); // 여기서 promise.then을 쓰면 성공적인 케이스만
    // 다루기 때문에 Uncaught 오류가 발생한다. 그렇기 때문에 catch을 이용한다
  }, 2000);
});

// 2. Consumers: then, catch, finally
promise
  .then((value) => console.log(value)) // 성공
  .catch((error) => console.log(error)) // 실패
  .finally(() => console.log("finally")); // 성공,실패 여부 상관없이 기능을 마지막으로 실행하고 싶을때 finally을 쓴다

// 3. Promise chaining

const FetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

FetchNumber.then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => num * 4)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

// 4. Error Handing
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("닭"), 1000);
  });

const getEGG = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`Error! => 계란`)), 1000); // 오류 출력
  });

const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg}=> 식사`), 1000);
  });

getHen()
  .then((hen) => getEGG(hen))
  .catch((error) => {
    return "강아지";
  }) // 이렇게 getEGG에서 오류가 발생시 .catch을 통해 중간에 대체가 가능하다.
  .then((egg) => cook(egg))
  .then((meal) => console.log(meal))
  .catch((error) => console.log(error));
