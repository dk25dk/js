const score = 400
// console.log(score);
console.log(score.toString().length);

const balance = new Number(2345.3456789); 
// console.log(balance);

//  console.log(balance.toString() .length);
 // The toString method is used when we want to convert an object into a string, and the length property gives us the number of characters in
//  console.log(balance.toFixed(3));
 //1. The `toFixed()` method formats a number with specified digits after the decimal and returns a string.

 const num = 23.7266;
//  console.log(num.toPrecision(5));// output => 24
 //An integer specifying the number of significant digits. and it givb round value 
 const handred = 100000;
//  console.log(handred.toLocaleString('en-IN')); // output is 1,00,000
 //The toLocaleString() method converts a number into a locale-specific representation, using the current or specified locale.

//=================================================

// console.log(Math);

// console.log(Math.abs(-4));
//For example, the absolute value of -5 is the same as the absolute value of 5.

// console.log(Math.round(4.2));
/*The Math object has many useful methods for working with numbers:*/
// console.log(Math.ceil(5.2));
// //Math.ceil always take heighr value

// console.log(Math.floor(7.9));
//Math.floor always takes lower value

// console.log(Math.random()); it give value always 0 to 1
// console.log(Math.random()*10 + 1);
// it give decimal value in random for ex --> 9.0 , 4.5

// console.log(Math.floor(Math.random()*10) + 1);
//it gives round value in random

// const min = 10;
// const max = 20;

// console.log(Math.floor(Math.random() * (max - min + 1)) + 1);
// it gives rang  value what i want my rang value is 10 to 20 