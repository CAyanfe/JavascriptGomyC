let sentence = "       hi, I'm new          ";
let sentence2 = 'his name is "Jhonny" ';
// console.log(sentence, "\n", sentence2);
console.log(sentence.trim());
console.log(sentence2);

let newSentence = sentence.toUpperCase();
let newSentence2 = sentence2.toLowerCase();
console.log(newSentence);
console.log(newSentence2);

// let anotherSen = sentence2.replace("name", "job");
let anotherSen = sentence2.concat(sentence);
console.log(anotherSen.length);

// start at position 5 and stop at a position of 10
// let wordExtract = sentence2.slice(5, 10);

// start at position of 5 and give the rest of the string
let wordExtract = sentence2.slice(5);

// start at position of 3 and return 4 characters
// let wordExtract = sentence2.substr(5, 4);
console.log(wordExtract);

// padStart and padEnd
// let padSen = sentence2.padStart(70, "his job");
let padSen = sentence2.padEnd(70, "his job");
console.log(padSen.split("?"));

let uname = "James";
let sortUname = uname.split(",");

console.log(sortUname.sort());
