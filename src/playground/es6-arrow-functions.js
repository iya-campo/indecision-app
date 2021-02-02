console.log("<< ARROW FUNCTIONS 1 >>");

// // ES5
// const square = function (x) {
//   return x * x;
// };
// console.log("Square of 8: " + square(8));

// // ES6
// const squareArrow = (x) => {
//   return x * x;
// };
// console.log("Arrow Square of 9: " + squareArrow(9));

// // Concise - doesn't require a 'return'
// const squareArrowConcise = (x) => x * x;

// console.log("Arrow Square of 4: " + squareArrowConcise(4));

// Challenge
const getFirstNameA = (fullName) => {
  return fullName.split(" ")[0];
};

const getFirstNameB = (fullName) => fullName.split(" ")[0];

const fullName = "Mike Wazowski";
console.log("A. First Name: " + getFirstNameA(fullName));
console.log("B. First Name: " + getFirstNameB(fullName));
