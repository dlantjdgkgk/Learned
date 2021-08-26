"use strict";

// Promise is a JavaScript object for asynchronus operation.
// State : pending -> fullfilled or rejected
// Proudcer vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
  // doing some heavy work ( network, read files)
  console.log("안녕하세요");
});
