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

// //prototypal inheritance
// function Person(name) {
//   this.name = name;
// }
// Person.prototype.greet = function () {
//   console.log(`hello my name is ${this.name}`);
// };
// let saksham = new Person("saksham");
// saksham.greet();

// // thiscontext

// const person = {
//   name: "saksham",
//   greet() {
//     console.log(`Hi I am ${this.name}`);
//   },
// };
// person.greet();
// // this context is lost here ==>
// const greetFunction = person.greet;
// greetFunction();
// // binding the context

// const boundGreet = person.greet.bind({ name: "John" });
// boundGreet();

// async and await
function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "saksham", url: "testurl.com" });
    }, 3000);
  });
}

async function getUserData() {
  try {
    console.log("fetching user data...");
    const userData = await fetchUserData();
    console.log("User Data fetched Successfully");

    console.log("User Data:", userData);
  } catch (error) {
    console.log("error fetching data", error);
  }
}

getUserData();

// modules and commonjs
//es6 modules

export function add(a, b) {
  return a + b;
}
export function subtract(a, b) {
  b - a;
}
export default function multiply(a, b) {
  b * a;
}
