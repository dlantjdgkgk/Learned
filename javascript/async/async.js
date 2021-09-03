// async & await
// clear style of using promise :)

// 1. async
function fetchUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("mooseong");
    }, 1000);
  });
}

const user = fetchUser();
user.then(console.log(user));
