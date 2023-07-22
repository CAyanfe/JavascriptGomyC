// if, if_else, if_elseif_else, switch

let votingAge = 1;

// if_else
if (votingAge >= 18) {
  console.log("you are old enough to vote");
} else {
  console.log("you can't vote");
}

let score = 90;
console.log(score);

// if_else_if_else
// if (score >= 80 && score <= 100) {
//   console.log("you got an A");
// } else if (score >= 70 && score <= 79) {
//   console.log("you got an B");
// } else if (score >= 50 && score <= 69) {
//   console.log("you got an C");
// } else if (score >= 40 && score <= 49) {
//   console.log("you got an D");
// } else {
//   console.log("you got an F");
// }

// switch
switch (score) {
  case score >= 80 && score <= 100:
    console.log("you got an A");
    break;

  case score >= 70 && score <= 79:
    console.log("you got an B");
    break;

  case score >= 50 && score <= 69:
    console.log("you got an C");
    break;

  case score >= 40 && score <= 49:
    console.log("you got an D");
    break;

  default:
    console.log("you got an F");
    break;
}

switch ("flute") {
  case "trumpet":
    console.log("I play the trumpet");
    break;
  case "flute":
    console.log("I play the flute");
    break;
  case "oboe":
    console.log("I play the oboe");
    break;
  default:
    console.log("I don't play an instrument. Sorry");
    break;
}
