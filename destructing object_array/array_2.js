const fruit = ["apple", "banana" , "pappys"];
const vegtable = ["leadyfingre" , "temto", "brinjal"];

// fruit.push(vegtable)
// console.log("Fruit array after adding vegetable to it: ", fruit[3]);// output  [ 'apple', 'banana', 'pappys', [ 'leadyfingre', 'temto', 'brinjal' ] ]

const allveg_and_fruit = fruit.concat(vegtable); // concat method create new array and return new value 
// console.log("all vegetables and fruits are index : ",  allveg_and_fruit[4] );
// console.log("all vegetables and fruits are : ",  allveg_and_fruit);

// spred 

// const allveg_and_fruit1 = [...fruit, ...vegtable]; // this is work concat type 
//  console.log(allveg_and_fruit1);

//flat method

// const array = [1,2,3,[4,5,[3,5]],7,[8,9,[10,11]]]

// const realArray = array.flat(5);

// console.log(realArray);

//+++++++++++++++++++++++++++++++++

// isArray and from

//isArray check it is array are not 
//  console.log(Array.isArray("Dilip"));

 //from is to convet array output is [ 'D', 'i', 'l', 'i', 'p' ]
//  console.log(Array.from("Dilip"));


// "Of mehtod " all single value to convert
//  let age = 23;
//  let age1 = 19;
//  let age3 = 20;
//  let age4=56;

//  let name = "dilip";
//  let name2 = "kumar";
//  let name3 = "rawani";

 console.log(Array.of(age,age1,age3,age4)); // Output is [ 'dilip', 'kumar', 'rawani' ]

//  console.log(Array.of(age,age1,age3));