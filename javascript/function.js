function hello() {
  console.log("hello");
}

hello();

function log(message) {
  console.log(message);
}
log("Hi");

function obj(object) {
  object.name = "Mooseong";
}
const a = {
  name: "moo",
};
obj(a);
console.log(a);

// 3. Default parameters
function showMessage(message, from = "unknown") {
  console.log(`message: ${message} by from : ${from}`);
}
showMessage("Hi");

// 4. Rest parameters
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
  args.forEach((arg) => console.log(arg));
}
printAll("message", "coding");

// 5. anymous function  함수 이름이 없는 함수

const print = function () {
  console.log("안녕하세요");
};
const Hello = print;
Hello();

// 6. Callback function
function RandowQuiz(a, b, c) {
  if (a === "LOVE YOU") {
    b();
  } else {
    c();
  }
}

const b = function () {
  console.log("yes");
};

const c = function () {
  console.log("No");
};

RandowQuiz("LOVE YOU", b, c);
RandowQuiz(" YOU", b, c);

// 7. Arrow function

const Yujin = function () {
  console.log("love");
};
const yujin = () => console.log("love");

const add = function (a, b) {
  return a + b;
};
const add = (a, b) => a + b;

//선언형 함수
function abc() {}
// 함수표현식 // 익명함수
const abcd = function () {};
// 화살표함수 : 익명함수
const abcd = () => {
  // 정확히는 return문 밖에 없을때 괄호 생략가능, 아니면 return x
};
