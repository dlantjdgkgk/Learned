// class User {
//   constructor(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }

//   get age() {
//     return this_age;
//   }
//   set age(value) {
//     // if(value<0){
//     //   throw Error("age can not be negative");
//     // }
//     this_age = value < 0 ? 0 : value;
//   }
// }

// const mooseong = new User('MOO', 'SEONG', 15);
// console.log(mooseong.age);

// 상속
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing this ${this.color}`);
  }

  getArea() {
    return this.width * this.height;
  }
}
class box extends Shape {}

class triangle extends Shape {

  draw() {
    super.draw();
    console.log(`안녕하세요`);
  }
  getArea() {
    console.log(super.getArea());
    return (this.width * this.height) / 2;
  }
}

const boxing = new box(20, 20, 'blue');
boxing.draw();
console.log(boxing.getArea());
const tryang = new triangle(20, 20, 'blue');
tryang.draw();
console.log(tryang.getArea());