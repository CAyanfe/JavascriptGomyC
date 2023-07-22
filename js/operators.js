// arithmetic operators: +(for both addition and CONCATENATION[addition of 2 strings]), -, *, /, %, **, ++, --
let total = 1;
total = ++total;
console.log(total);

console.log("My name is " + "Chidinma");
console.log("My name is" + " " + "Chidinma");

let theirName = "google";
theirName += "." + "com";
console.log(theirName);

// instead of using concationation, you can use TEMPLATE LITERAL
myName = "Dayo";
console.log(`my name is ${myName}`);

// assignment operators: =, +=, -=, *=, /=, %=
let sum = 10;
// sum = sum + 20;
sum += 30;
sum -= 30;
sum *= 30;
sum /= 30;
sum %= 30;
console.log(sum);

// comparison operators: ==, ===, !==, !===, >, >=, <, <=
// returns true or false and decisions are made by the program based on the result (which is either true or false)
// == checks loosely only based on value while === checks strictly based on both value and data type
console.log("5" === 5);

// logical operators: AND(&&), OR(||)
// works with a combination of multiple comparison - helps you check different groups of comparison operators
console.log(10 > 20 && 10 < 20); // for this to be true, both value must be true
console.log(10 > 20 || 10 < 20); // for this to be true, at least one value must be true
console.log(!(10 > 20 || 10 < 20)); // the enitre result is negated
console.log(!(10 > 20) && 10 < 20); // the first set is negated
console.log(!!(10 > 20) && 10 < 20); // the first set is negated
