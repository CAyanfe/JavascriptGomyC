let num = 100;
console.log(typeof num);

let convertNum = num.toString();
console.log(typeof convertNum);

let decNum = 10.475686;
let expo = decNum.toExponential(3);
console.log(1, typeof expo);

let decNumFixed = decNum.toFixed(2);
console.log(decNumFixed);
console.log(typeof decNumFixed);

let decNumPrec = decNum.toPrecision(5);
decNumPrec = Number(decNumPrec);
console.log(2, decNumPrec);
console.log(typeof decNumPrec);

// console.log(expo.valueOf());

// console.log(Number.isInteger(num));
