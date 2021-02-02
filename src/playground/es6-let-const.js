console.log("<< CONST and LET >>");

var nameVar = "Floofinstein";
var nameVar = "Furufin";
console.log("nameVar", nameVar);

let nameLet = "Jen";
nameLet = "Julie";
console.log("nameLet", nameLet);

const nameConst = "Frank";
console.log("nameConst", nameConst);

function getPetName() {
  const petName = "Hal";
  return petName;
}

const petName = getPetName();
console.log(petName);

// Block Scoping
const fullName = "Furufin Stein";
let firstName;

if (fullName) {
  firstName = fullName.split(" ")[0];
  console.log(firstName);
}

console.log(firstName);
