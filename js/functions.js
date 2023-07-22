// functions: traditional and arrow(ES6)
// FUNCTION DECLARATION
function addNum() {
  let a = 10;
  let b = 20;
  //   console.log(a + b);
  return a + b;
}

// call or invoke a function: it must be called exactly as it was created. for example, this has no parameters
// addNum();
console.log(addNum());

// Parameters are variables listed as a part of the function definition.
// Arguments are values passed to the function when it is invoked.
function multiplyNum(a, b) {
  // a and b are parameters
  console.log(a * b);
}

// call or invoke a function: it must be called exactly as it was created. for example, this was created with parameters, so must have arguments when it is called or invoked
multiplyNum(2, 3); // 2 and 3 are arguments

// FUNCTION EXPRESSION
const addNums = function () {
  let a = 10;
  let b = 20;
  console.log("ii", a + b);
};

addNums();

// arrow function
const addNumz = () => {
  let a = 10;
  let b = 20;
  console.log("iii", a + b);
};

addNumz();

let car; // variable declaration
let cars = "Toyota"; // expression
