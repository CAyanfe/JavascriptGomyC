let todayDate = new Date();

console.log(todayDate.getDate());
console.log(todayDate.getFullYear());
console.log(todayDate.getMonth());
console.log(todayDate.getTime());

console.log(
  `${todayDate.getDate()}/${todayDate.getMonth()}/${todayDate.getFullYear()}`
);

console.log(todayDate.setDate(15));
