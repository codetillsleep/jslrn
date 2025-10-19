// /*prototypes */
// let computer = { cpu: 12, gpu: 8 };
// let lenovo = { screen: "HD", __proto__: computer };
// let tomHardware = {};

// console.log(`lenovo`, lenovo.__proto__);

// let genericCar = { tyres: 4 };
// let tesla = { driver: "AI" };
// Object.setPrototypeOf(tesla, genericCar);
// console.log(`tesla`, Object.getPrototypeOf(tesla));

// /* constructor function */
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// function Car(make, model) {
//   this.make = make;
//   this.model = model;
// }

// let myCar = new Car("Toyota", "Camry");
// console.log(myCar);

// let myNewcar = new Car("Tata", "safari");
// console.log(myNewcar);

// function Tea(type) {
//   this.type = type;
//   this.describe = function () {
//     return `this is a cup of ${this.type}`;
//   };
// }
// let lemonTea = new Tea("lemon tea");
// console.log(lemonTea.describe());

// /*constructor function and prototypes */

// function Animal(species) {
//   this.species = species;
// }
// Animal.prototype.sound = function () {
//   return `${this.species} makes a sound`;
// };
// let dog = new Animal("Dog");
// console.log(dog.sound());

// function Drink(name) {
//   if (!new.target) {
//     throw new Error("Drink must be called with new keyword");
//   }
//   this.name = name;
// }
// let tea = new Drink("tea");
// // let coffee = Drink("coffee");

// let car = {
//   make: "Toyota",
//   model: "camry",
//   year: "2020",
//   start: function () {
//     return `${this.make} car got started in ${this.year}`;
//   },
// };
// console.log(car.start());

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// let john = new Person("John", 20);
// console.log(john);

// function Animal(type) {
//   this.type = type;
// }
// Animal.prototype.speak = function () {
//   return `${this.type} makes a sound`;
// };
// Array.prototype.wuwu = function () {
//   return `Custom method ${this}`;
// };
// let myArray = [1, 2, 3];
// console.log(myArray.wuwu());
/*class */
// class Vehical {
//   constructor(make, model) {
//     this.make = make;
//     this.model = model;
//   }
//   start() {
//     return `${this.model} is car from ${this.make} `;
//   }
// }

// class Car extends Vehical {
//   drive() {
//     return `${this.make}: This is an inheritance example`;
//   }
// }

// let myCar = new Car("Toyota", "Corolla");
// console.log(myCar.start());
// console.log(myCar.drive());

// Encapsulation

// class BankAccount {
//   #balance = 0;
//   deposit(amount) {
//     this.#balance += amount;
//     return this.#balance;
//   }
//   getBalance() {
//     return `$ ${this.#balance}`;
//   }
// }

// let account = new BankAccount();
// console.log(account.getBalance());

// //Abstraction

// class CoffeeMachine {
//   start() {
//     //call DB
//     //filter value
//     return `starting the machine`;
//   }
//   brewCoffee() {
//     // complex cal
//     return `brewing coffee`;
//   }
//   pressStartButton() {
//     let message1 = this.start();
//     let message2 = this.brewCoffee();
//     return `${message1}\n${message2}`;
//   }
// }
// let myMachine = new CoffeeMachine();
// // console.log(myMachine.start());
// // console.log(myMachine.brewCoffee());
// console.log(myMachine.pressStartButton());

// polymorphism
class Bird {
  fly() {
    return `Flying...`;
  }
}

class Penguin extends Bird {
  fly() {
    return `Penguins cant fly`;
  }
}
let bird = new Bird();
let penguin = new Penguin();
console.log(bird.fly());
console.log(penguin.fly());

// static method

class Calculator {
  static add(a, b) {
    return a + b;
  }
}

console.log(Calculator.add(5, 3));

// getters and setters
function Animal() {
  function speak() {
    return `Animal speaking`;
  }
}

function Dog() {
  function bark() {
    return `Woof!`;
  }
}
