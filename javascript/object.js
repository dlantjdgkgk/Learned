function print(name, age) {
  console.log(name);
  console.log(age);
}

print('mooseong', 15);

function asdasd(person) {
  console.log(person.name)
  console.log(person.age)
}

const Mooseong = {
  name: 'moo',
  age: 15
};

// 2. computed properties
// key should be always string
console.log(Mooseong.name);
console.log(Mooseong['name']);
Mooseong['hasJob'] = true;

function printValue(obj, key) {
  console.log(obj.key); // 이렇게 하면 동적인 데이터를 받아올때 안된다
  console.log(obj[key]); // 이렇게 해야지 동적인 데이터 받아올수 있다.
}

printValue(Mooseong, 'name');

// 3. property value shorthand

const person1 = {
  name: 'yujin',
  age: 15
};
// 4. constructor function
function Human(name, age) {
  this.name = name;
  this.age = age;
}

const person2 = new Human('MOO', 15);

// 5. for..in vs for..of

for (key in Mooseong) {
  console.log(key);
}

const array = [1, 2, 3, 4, 5];
for (value of array) {
  console.log(value);
}

// 6. Fun cloning
// object.assign

const user = {
  name: 'sdas',
  age: 15
}

const user2 = {};
Object.assign(user2, user);
console.log(user2);

const user3 = Object.assign({}, user)
console.log(user3)