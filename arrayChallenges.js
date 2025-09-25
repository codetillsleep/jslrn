// <------------------------->  somechallenges  <----------------------------------------->
/*




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
