const languages = ["JS", "python", "C#", "C++"];

// console.log(languages);

// accessing elements inside of an array
// console.log(languages[2]);

// incase you want to use the values that you accessed
const firstElement = languages[0]; // first element
const lastElement = languages[languages.length - 1]; // last element
console.log(firstElement, lastElement);

let aboutMe = `my favourite language is ${firstElement} and my other one is ${lastElement}`;
console.log(aboutMe);

let aboutMe2 =
  "my favourite language is " +
  firstElement +
  " and my other one is " +
  lastElement;
console.log(aboutMe2);

languages[2] = "Rust";

console.log(languages.sort());

// let i;
// let lanLength = languages.length;

// for (i = 0; i < lanLength; i++) {
//   console.log(languages[i]);
// }

// for (let a = 0; a < languages.length; a++) {
//   console.log("\n", languages[a]);
// }

// languages.forEach((lang) => {
//   console.log(lang);
// });

// languages.forEach(function (lang) {
//   console.log(lang);
// });

const cars = ["volvo", "peagout", "mercedes"];

// cars.map((car) => {
//   console.log(car);
// });

// array methods
let arrayLen = languages.length;
console.log(arrayLen);
console.log(languages.toString());
console.log(languages.join(" "));

// pop and push deals with adding and removing items from the end of an array
console.log(languages.pop());
console.log(languages);
console.log(languages.push("Java"));
console.log(languages);

// shift and unshift deals with adding and removing items from the end of an array
console.log(languages.shift());
console.log(languages);
console.log(languages.unshift("Ruby"));
console.log(languages);

// delete is a terrible way of removing elements from an array because it leaves "undefined" holes in your array
// let deleteItem = delete languages[2];

// console.log(deleteItem);
// console.log(languages);
// console.log(languages.length);

// languages.forEach((lang) => {
//   console.log(lang);
// });

// for (let a = 0; a < languages.length; a++) {
//   console.log("\n", languages[a]);
// }

let newLang = ["igbo", "yoruba"];

console.log(languages + cars);
// or
// console.log(languages.concat(cars, newLang));
let newArr = languages.concat(cars, newLang);
// console.log(newArr);

for (let a = 0; a < newArr.length; a++) {
  //   if (newArr[a] === "Rust") {
  //     continue;
  //   }

  if (newArr[a] === "volvo") {
    break;
  }

  console.log(newArr[a]);
}

// flat()
// const myArr = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];
// console.log(myArr.flat());

// splice and slice
// The splice() method adds new items to an array.

// The first parameter (2) defines the position where new elements should be added (spliced in).
// The second parameter (0) defines how many elements should be removed.
// The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
// The splice() method returns an array with the deleted items.

let laptops = ["HP", "Lenovo", "Dell", "MacBook"];

// let addNewLap = laptops.splice(1, 0, "Golang", "Dart");
// let addNewLap = laptops.splice(1, 2);
// console.log("spliced array", addNewLap);

// console.log("array after splicing", laptops);

// The slice() method slices out a piece of an array.
// let addNewLap = laptops.slice(1);
let addNewLap = laptops.slice(1, 3);
console.log("sliced array", addNewLap);

console.log("array after slicing", laptops);
