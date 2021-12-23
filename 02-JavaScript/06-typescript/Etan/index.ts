let a: number = 'what';
let b: number = 5;

const whatAge = (x: number, y: number) => {
  try {
    let sum = x + y;
    let avrg = sum / 2;
    return `the avrage of ages is ${avrg}`;
  } catch (error) {console.log('wrong input')}
};
console.log(whatAge(a, b));
