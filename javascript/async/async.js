// async & await
// clear style of using promise :)

// 1. async
// function fetchUser() {
//   return new Promise((resolve, reject) => {
//     resolve("안녕하세요");
//   });
// }
// const user = fetchUser();
// user.then(console.log);

// => 위에것에서 async만 붙이면

async function fetchUser() {
  return "무성";
}
const user = fetchUser();
user.then(console.log);

// 2. await  => await는 async가 붙은 함수안에서만 사용 가능하다
