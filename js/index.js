// Iteration 1: Names and Input

const hacker1 = "Leni";
const hacker2 = "Karla";

let hackers = [hacker1, hacker2];

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `${hacker1} has the longest Name, it has ${hacker1.length} characters`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that ${hacker2} has the longest Name, it has ${hacker2.length} characters`
  );
} else {
  console.log(
    `Wow, both have equally long names, ${hacker2.length} characters!`
  );
}

// Iteration 3: Loops

function nameWithSpaces(hackerName) {
  const hackerNameWithSpaces = hackerName.split("").join(" ").toUpperCase();
  console.log(hackerNameWithSpaces);
}
nameWithSpaces(hacker1);

function nameReserve(hackerName) {
  const hackerNameReversed = hackerName
    .split("")
    .reverse()
    .join("")
    .toUpperCase();
  console.log(hackerNameReversed);
}
nameReserve(hacker2);

if (hacker1 > hacker2) {
  console.log(`${hacker1}'s name goes first.`);
} else if (hacker1 < hacker2) {
  console.log(`Yo, ${hacker2} goes first definitely.`);
} else {
  console.log("What?! You both have the same name?");
}
