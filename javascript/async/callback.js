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
printImmediately(() => console.log("Hello"));

// Asynchrounus callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log("안녕하세요"), 2000);

// Callback Hell example
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "ellie" && password === "dream") ||
        (id === "mooseong" && password === "dream")
      ) {
        onSuccess(id);
      } else {
        onError(new Error(
          'not found'));
      }
    }, 2000);
  }
  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "ellie") {
        onSuccess({
          name: 'ellie',
          role: "admin"
        })
      } else {
        onError(new Error('no access'));
      }
    }, 1000)

  }
}

const userStorage = new UserStorage();
const id = prompt("아이디를 입력해주세요");
const password = prompt("비밀번호를 입력해주세요");
userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(
      user,
      userWithRoles => {
        alert(`Hello ${userWithRoles.name}`)
      },
      error => {
        console.log("error 발생");
      }
    );
  },
  error => {
    console.log("error 발생");
  }
)