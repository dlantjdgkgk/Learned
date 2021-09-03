// JSON

// 1. Object to JSON

let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['APPLE', 'BANANA']);
console.log(json);

const Rabbit = {
  name: 'mooseong',
  color: 'white',
  size: null,
  birthdate: new Date(),
  jump: () => {
    console.log(`${this.name} can jump`);
  } // jump 함수는 object에 포함이 안돼있어서 출력해도 안나온다.
}
json = JSON.stringify(Rabbit);
console.log(json);

json = JSON.stringify(Rabbit, ['name', 'color']); // 이렇게 배열의 property 만 전달해서 원하는 값만 추출 가능
console.log(json);

json = JSON.stringify(Rabbit, (key, value) => {
  console.log(`key : ${key} , value: ${value}`);
  return key === 'name' ? 'ellie' : value;
})
console.log(json);

// 2. JSON to object
json = JSON.stringify(Rabbit);
const obj = JSON.parse(json);
console.log(obj);
// obj.jump(); 이게 되지않는 이유는 처음에 obj에서 JSON 형식으로 바꿀때 객체에 함수가 
// 포함되지 않기 때문에 JSON 형식에서 obj 형식으로 바꿀때에도 함수가 포함되지 않는다.
const obj2 = JSON.parse(json, (key, value) => {
  console.log(`key : ${key} , value: ${value}`);
  return key === 'birthdate' ? new Date(value) : value;
})
console.log(obj2);
Rabbit.jump();
console.log(Rabbit.birthdate.getDate());
console.log(obj2.birthdate);