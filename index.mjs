// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);

  
/////// START - PART1 LAB ASSIGNMENT - START P1 ////////////////////

// Check if all numbers are divisible by 5. Cache the result in a variable.
let AllNoDivBy5 = n1%5;
AllNoDivBy5 = AllNoDivBy5 + n2%5;
AllNoDivBy5 = AllNoDivBy5 + n3%5;
AllNoDivBy5 = AllNoDivBy5 + n4%5;
//console.log(AllNoDivBy5);
//let isValid1 = (AllNoDivBy5 == 0);
// console.log(isValid1);
AllNoDivBy5 = n1%5 + n2%5 + n3%5 + n4%5 === 0
console.log(AllNoDivBy5);

// Check if the first number is larger than the last. Cache the result in a variable.
let FirstLargerThanLastNo = n1>n4;
//console.log(FirstLargerThanLastNo);
//isValid1 = FirstLargerThanLastNo;
console.log(FirstLargerThanLastNo);

//Accomplish the following arithmetic chain:
// Subtract the first number from the second number.
// Multiply the result by the third number.
// Find the remainder of dividing the result by the fourth number.
// Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in 
let subtratFirstFromSecondNo = n2-n1;
let Multithisby3rdNo = subtratFirstFromSecondNo * n3
let reminderdivby4thNo = Multithisby3rdNo%4;
//console.log(reminderdivby4thNo);
//isValid1 = (reminderdivby4thNo === 0);
console.log(reminderdivby4thNo === 0);

//Change the way that isOver25 calculates so that we do not need 
//to use the NOT operator (!) in other logic comparisons. 
//Rename the variable as appropriate.
//const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
let isOver25_mine = n1 > 25 && n2 > 25 && n3 > 25 && n4 > 25;
//console.log(isOver25_mine);
//isValid1 = (isOver25_mine);

// Finally, log the results.
console.log(isOver25_mine);

/////// END - PART1 LAB ASSIGNMENT - END P1 ///////////////////

///////////////////////////////////////////////////////////////

/////// START PART2 LAB ASSIGNMENT - START P2 ///////////////////

//How many gallons of fuel will you need for the entire trip?
const TripDistance = 1500;
const GasPricePerGallon = 3;

let Speed55 = 55; 
let Speed60 = 60;
let Speed75 = 23;

let MilesPerGalAtSpeed55 = 30;
let MilesPerGalAtSpeed60 = 28;
let MilesPerGalAtSpeed75 = 23;



/////// END - PART2 LAB ASSIGNMENT - END P2 ///////////////////

