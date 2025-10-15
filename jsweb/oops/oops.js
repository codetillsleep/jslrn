/*prototypes */
let computer = { cpu: 12, gpu: 8 };
let lenovo = { screen: "HD", __proto__: computer };
let tomHardware = {};

console.log(`lenovo`, lenovo.__proto__);

let genericCar = { tyres: 4 };
let tesla = { driver: "AI" };
Object.setPrototypeOf(tesla, genericCar);
console.log(`tesla`, Object.getPrototypeOf(tesla));

/* constructor function */
function Person(name, age) {
  this.name = name;
  this.age = age;
}
function Car(make, model) {
  this.make = make;
  this.model = model;
}

let myCar = new Car("Toyota", "Camry");
console.log(myCar);

let myNewcar = new Car("Tata", "safari");
console.log(myNewcar);

function Tea(type) {
  this.type = type;
  this.describe = function () {
    return `this is a cup of ${this.type}`;
  };
}
let lemonTea = new Tea("lemon tea");
console.log(lemonTea.describe());

/*constructor function and prototypes */

function Animal(species) {
  this.species = species;
}
Animal.prototype.sound = function () {
  return `${this.species} makes a sound`;
};
let dog = new Animal("Dog");
console.log(dog.sound());

function Drink(name) {
  if (!new.target) {
    throw new Error("Drink must be called with new keyword");
  }
  this.name = name;
}
let tea = new Drink("tea");
let coffee = Drink("coffee");
