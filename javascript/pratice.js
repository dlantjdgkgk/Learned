function calculate(command, a, b) {

  switch (command) {
    case 'add':
      return a + b;
    case 'substract':
      return a - b;
    case 'multiply':
      return a * b;
    default:
      throw new Error('안됩니다');
  }
}

console.log(calculate('add', 3, 4));