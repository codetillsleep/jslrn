// // async nature of js
// console.log("hello");

// function sayHello() {
//   console.log("hello again");
// }
// setTimeout(() => {
//   sayHello();
// }, 4000);

// for (let index = 0; index < 10; index++) {
//   console.log(index);
// }
//clouser
// function outer() {
//   let counter = 4;
//   return function () {
//     counter++;
//     return counter;
//   };
// }

// let increment = outer();
// console.log(increment());
// console.log(increment());
// console.log(increment());
// console.log(increment());

//promises and promise chaining
// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let success = true;
//       if (success) {
//         resolve("Data Fetched Successfully");
//       } else {
//         reject("Error Fetching Data");
//       }
//     }, 3000);
//   });
// }

// fetchData()
//   .then((data) => {
//     console.log(data);
//     return data.toLowerCase();
//   })
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => console.error(error));

//prototypal inheritance
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function () {
  console.log(`hello my name is ${this.name}`);
};
let saksham = new Person("saksham");
saksham.greet();
