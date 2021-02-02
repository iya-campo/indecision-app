console.log("<< ARROW FUNCTIONS 2 >>");

// Arguments Object - no longer bound with arrow functions
const add = (a, b) => {
  //   console.log(arguments);
  return a + b;
};

console.log("Add: " + add(55, 1, 1001));

// This keyword - also no longer bound
const user = {
  name: "Floofin",
  cities: ["Angono", "Makati", "Taguig"],
  printPlacesLived() {
    // console.log(this.name);
    // console.log(this.cities);
    // const that = this;

    // this.cities.forEach((city) => {
    //   console.log(this.name + " has lived in " + city + ".");
    // });

    return this.cities.map((city) => this.name + " has traveled to " + city + "!");
  },
};

console.log(user.printPlacesLived());

// Challenge
const multiplier = {
  numbers: [1, 2, 3],
  multiplyBy: 5,
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy);
  },
};

console.log(multiplier.multiply());
