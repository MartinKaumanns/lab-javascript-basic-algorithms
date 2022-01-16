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

// Bonus 1:
let loremIpsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi augue, vulputate at vestibulum nec, egestas at arcu. Aliquam ut lectus eu elit volutpat interdum. Vestibulum dignissim quis neque quis ornare. Cras volutpat sem suscipit arcu interdum, nec aliquet purus finibus. Proin ac ultrices odio, eget sodales ligula. In pulvinar purus arcu, id vulputate mi vestibulum ut. Etiam iaculis congue nisi, lacinia interdum lorem aliquam at. Nullam aliquam libero nisi, in sollicitudin sapien molestie in. Integer magna turpis, tempor nec varius non, interdum quis nulla. Nam et iaculis leo. Mauris sapien turpis, lacinia eget euismod nec, vehicula in ante. Etiam porttitor pharetra ipsum, in aliquam libero tempus et. Curabitur eu volutpat lorem, in malesuada arcu. Cras eu augue et nibh porta scelerisque ut vel erat. Nunc urna leo, efficitur at convallis non, auctor et tellus. Praesent consequat risus velit, ut aliquet nisl aliquam semper. Praesent ante lacus, ultrices non lectus non, accumsan posuere lacus. Sed rutrum, dui nec dignissim rhoncus, lacus ex venenatis est, in tempor ante risus a felis. Etiam semper, diam eu tincidunt feugiat, ante dui lobortis urna, aliquam pulvinar arcu tellus ut erat. Morbi accumsan bibendum ante, id ullamcorper orci facilisis eu. Curabitur feugiat risus purus, eget aliquam enim tempus vitae. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi facilisis purus sit amet elit tristique imperdiet. Etiam fringilla velit ac lacus faucibus, eget ultricies dui iaculis. Nunc quis urna ac nibh suscipit malesuada. Nulla in nunc lorem. Cras lacinia volutpat leo et scelerisque. Sed fringilla feugiat felis, id commodo risus faucibus eget. In ut ligula et nisi tincidunt lobortis. Nulla mollis sapien at enim fringilla, vel varius nulla sagittis. Integer nibh sem, pulvinar sed odio in, blandit malesuada felis. Nullam consectetur urna tincidunt fermentum lobortis. Aenean tortor tellus, egestas non ultrices vel, pharetra sit amet arcu. Integer ac augue elit. Quisque iaculis, urna id congue egestas, libero augue euismod augue, eu pellentesque neque tortor eu lectus. Aenean pulvinar tellus et magna ornare, in viverra turpis feugiat. Sed iaculis metus id ipsum interdum malesuada id non diam. Nulla nisi nunc, condimentum rhoncus orci nec, pharetra luctus lacus. Pellentesque dui est, facilisis sed cursus et, porttitor id nisi. Sed vestibulum elit interdum ante fringilla, ullamcorper ultricies nulla rutrum. Phasellus a dolor id dolor condimentum fermentum sed a sapien. Phasellus luctus massa fringilla, ultricies arcu eu, luctus magna. Proin non finibus turpis, ac ullamcorper massa. Cras libero quam, tempor sed lacus vitae, luctus varius lectus. Pellentesque accumsan in mi ut rhoncus.";

console.log(loremIpsum.split(" ").length);

// console.log(loremIpsum.includes('et'));

let etCount = 0;
let loremIpsumWords = loremIpsum.split(" ");

for (let i = 0; i < loremIpsum.split(" ").length; i++) {
  // console.log(loremIpsum.split(' ')[i]);
  if (loremIpsumWords[i] === "et") {
    etCount += 1;
  }
}
console.log(etCount);

// Bonus 2:

const message = "No 'x' in Nixon";

let shortStr = "";
let shortStrRev = "";

function potentialPal(palin) {
  // 1st step: convert string to string without spaces and interpunctions

  for (let i = 0; i < palin.length; i++) {
    if (
      palin[i] !== " " &&
      palin[i] !== "," &&
      palin[i] !== "!" &&
      palin[i] !== "?" &&
      palin[i] !== '""' &&
      palin[i] !== "'"
    ) {
      shortStr += palin[i];
    }
  }
  // 2nd step: equalize all characters y making the string all caps
  shortStr = shortStr.toUpperCase();

  // 3rd step: invert order and save in second vsriable
  for (let j = shortStr.length - 1; j >= 0; j--) {
    shortStrRev += shortStr[j];
  }
}
potentialPal(message);

// 4th step: compare strings if both are equal it's a palindrome, if not it isn't!
if (shortStr === shortStrRev) {
  console.log(`This is a palindrome!`);
} else {
  console.log("This is interesting but not a palindrome!");
}
