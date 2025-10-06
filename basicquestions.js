// <------------------------->  somechallenges  <----------------------------------------->
/*


// <--------------------------------->  Arrays  <----------------------------------------->


1. Declare an array named colors that contains the strings "blue","red","green"and "orange"
access the first element of the array and store it in a variable `firstcolor`.
*/
let colors = ["blue", "red", "green", "orange"];

const firstcolor = colors[0];
console.log(firstcolor);
/*
2. now change the  third element to "pink"
*/
colors[2] = "pink";
console.log(colors);

/*
3. now add "teal" to the list of array using length and "gray" using push method 
*/
colors[colors.length] = "teal";
colors.push("gray");
console.log(colors);

/*
 remove last element using pop and store it in a variable named lastcolor
 */
colors.pop();
const lastcolor = colors.pop();
console.log(colors);
console.log("last color is", lastcolor);
/* 
create a softcopy of colors named scpcolors
*/
let scpcolors = colors;
colors.pop();
console.log("this is soft copy of colors:", colors);
/* 
create a hardcopy of colors named hrdcolors
*/
let hrdcolors = [...colors];
colors.pop(); //will not pop in hrdcolors but will do in colors since hrdcopy is a hardcopy
console.log("this is hardcopy:", hrdcolors);
/*
add hrdcolors and colors into concolors
*/
let concolors = hrdcolors.concat(colors);
console.log("this is joined colors:", concolors);

/*
log length of concolors and store in lencolors
*/

let lencolors = concolors.length;
console.log(lencolors);

/*
check if "Blue" is in colors if it is store the result in isBlueInColors in variable pnkColor
*/
console.log(colors);
let isBlueInColors = colors.includes("blue");
console.log(isBlueInColors);

// <---------------------------------->  Loops  <----------------------------------------->
// create a lopp that counts from 30 to 1 and stores the the numbers in an array named 'countdown'
let countdown = [];
i = 30;
while (i != 0) {
  countdown.push(i);
  i--;
}
console.log(countdown);
// use dowhile to propmt a user to enter a color until they enter "stop" store each color in an array called 'pcolors' use in browser console wont run here since node cant run "prompt".
// let pcolors = [];
// let k;
// do {
//   k = prompt(`enter color(type 'stop' to stop):`);
//   pcolors.push(k);
// } while (k != "stop");
// console.log(pcolors);

// write a loop that multiplies each element of an array `[5,4,2,3]` by 2 and stores the result in new array named "mularr"

let arr3 = [5, 4, 2, 3];
let mularr = [];
for (i = 0; i != arr3.length; i++) {
  mularr[i] = arr3[i] * 2;
}
console.log(mularr);
