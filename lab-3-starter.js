/*
Lab 3 - simple TDD with math functions
Starter file
Create the following functions as per the instructions below.
Read the test cases carefully and write the functions accordingly.
NOTE: The name of the functions have
to match the exported names mentioned at the end of this file
in order to pass the test cases.
To run the test cases, run the following command on your terminal:
node --test
*/

//add function
const add = (x,y) => {
  return x+y ; 
};

//subtract function
const subtract=(x,y) => {
  return x-y; 
};

//multiply function
const multiply = (x,y) => {
   return x*y; 
};

//divide function
const divide = (x,y) => {
  if (y===0) {
    throw new Error ("The value of y is Zero");
  }
  return x/y; 
};

//modulas function
const modulas = (x,y) => {
  return x%y; 
};

//power function
const power = (x,y) => {
  return Math.pow (x,y); 
};

//square function
const square = (x) => {
  return x*x; 
};

//floor function
const floor = (x) => {
  return Math.floor(x); 
};

//ceiling function
const ceiling = (x ) => {
  return Math.ceil (x); 
};

////////////////////////////////////////

//export functions
//Please do not change the following line.

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  modulas,
  power,
  square,
  floor,
  ceiling,
}
