// circumference/area of a circle

let radius = 100;

// circumference
const circumference = () => {
  // 2 * pi * r
  let pi = Math.PI;

  let radius = prompt("please enter a number: ");

  radius = Number(radius);

  return 2 * pi * radius;
};

// console.log(pi);
console.log(
  `the circumference of the circle for the radius you entered is ${circumference()}`
);

// console.log(circumference());

// console.log(Math.SQRT2);

// raise to power
console.log(8 ** 2);
console.log(Math.pow(8, 2));
console.log(Math.sqrt(64));

const points = [40, 100, 1, 5, 25, 10];
// console.log(Math.max(points));
// console.log(Math.min(points));
// console.log(parseInt(points.toString()));

// let arrToNum = Number(points.join(""));

// console.log(Math.max(arrToNum));

// produces random numbers between 0 and 1
console.log(Math.random());

// produce random number between 0 to 10
const randNum = Math.floor(Math.random() * 10);
console.log(randNum);

const randNum2 = Math.floor(Math.random() * 10) + 1;
console.log(randNum2);
