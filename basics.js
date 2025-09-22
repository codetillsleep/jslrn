/* this file is mostly one time read as its all basics */

// classic print :)
console.log("this logs in the console");
/* data types */

/*

1. String
2. Number
3. Boolean
4. Bigint

5. undefined - exists but defination is not there will be there in future
6. null - empty not 0   


7. Objects

8. Symbol
*/

// no,string,boolean
let score = 102;
let name = "saksham";
let isLoggedin = false;
let isPaid = true;

// Object
let skills = ["MERN", "AWS", "Docker"];
let user = { firstname: "saksham", lastname: "sharma" };

let getscore = score;

console.log(score);
console.log(name);
console.log(isLoggedin);
console.log(skills);
console.log(getscore);
// change value of a variable  and diff b/w let and const
let gameName = "Darksouls";

gameName = "Eldenring";

console.log(gameName);

const username = "sleeptillash";

// username = "saksham";
// console.log(username);
// ----> this will throw an error cannot change value of a  constant variable

/* operations in js */

/*add,sub,mult,divide,comparion, increment etc, */

let addition = 4 + 5;
let sub = 5 - 4;
let total = (addition * sub) / 3;
let remainder = total % 2;
console.log("This is the total value:", total);
console.log("This remainder of total / 2 is :", remainder);

let myscore = 99;

console.log("post incremented myscore:", myscore++);
console.log("pre incremented myscore:", ++myscore); // this will equalt to 101 due to previous post increment

console.log(" myscore vals isSame:", myscore == 99);
console.log(" myscore vals isnotSame:", myscore != 99);

/*logical operators*/

/* 
&& -> and
|| -> or


*/

console.log("false and true as input of && op:", isLoggedin && isPaid); //both needs to be true other wise its false whatever the case
console.log("false and true as input of || op:", isLoggedin || isPaid); //just one needs to be true for output to be true

/* data types */

/* 
1. primitive
string 
boolean
number
null
undefined
Symbol


2. non primitive
 objects
 sub cat => array,funcitons, etc.
*/

// NUMBER
let balance = 120;
let anotherBalance = new Number(120); // CREATES A COMPLEX DATATYPE(or objects)

console.log(typeof balance); // gives type of the variable
console.log(typeof anotherBalance);

//BOOLEAN
let isActive = true;
let isReallyactive = new Boolean(true); // not recommended way

console.log(typeof isActive);
console.log(typeof isReallyactive);

// NULL,UNDEFINED AND NOT DEFINED
let firstname;
console.log(firstname); //will give undefined becasue its not defined and not 0 thats why we dont get 0 for it
//or we could just assign it  = undefined results the same
// but null
firstname = null;
console.log(firstname); // will give null cause its actually null

//  and  this is not defined will throw an error =>

// console.log(lastname); uncomment to try

//STRING
let myString = "hello";
let myStringone = "nihao";
let usernameTwo = "saksham";

/*backtics replaced the classic " "+" " concat of strings*/
let greetMessage = `Hello ${usernameTwo} !`;
console.log(greetMessage);

//SYMBOL  it makes sure there is uniqueness
let sym1 = Symbol("saksham");
let sym2 = Symbol("saksham");
console.log(sym1 == sym2);
console.log(sym1);

// NON PRIMITIVES OBJECTS
