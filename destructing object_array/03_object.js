// object dcelare two tpye 
// 1. litreal
// 2. constructr
 

 // singleton we can create any object to make constructor


 // object litreal


 // How to dcalre Symbole in object

//   const mySymbl = Symbol("key1");

 const UsOpen = {
    name: "dilip Kumar",
    age: 18,
    location: "Jharkahnd",
    email: "dilip1234@gmail.com",
    isLoggedIn:false,
    fisrtLogInDays: ["Wednesday", "Sanday"],
 }
//  console.log(UsOpen);

//  Object acces two tpye
  //  console.log(UsOpen.email);
  //  console.log(UsOpen["name"]);
//   console.log(typeof UsOpen.mySymbl); // if we print this type value give corret but datatype is string 
//   console.log(UsOpen[mySymbl]); // it is corret print 

  //How to Chnage the data 
  // Object.freeze(UsOpen.email);
  UsOpen.email = "Dilip23google.com";
  console.log(UsOpen);
   Object.freeze(UsOpen);
  // UsOpen.luckyname = 7;
  //  console.log(UsOpen);

// How can we lock the data no anyone  can chnge your data
// Object.freeze(UsOpen);
// UsOpen.email = "Dilip23microsoft.com";
// console.log(UsOpen);



//declare functon in object

// UsOpen.greeting = function(){
//     console.log("Hello Mr.");
// }

// UsOpen.greetingYTwo = function(){
//     console.log(`Helo mr. ${this.name}`);
// }
// console.log(UsOpen.greeting());
// console.log(UsOpen.greetingYTwo());


// const syml = Symbol("mySingutre");

// const EnterUser = {
//   name:"Dilip kumar rawani",
//   location:"india",
//   age:25,
//   registrationNo:123456,
//   Email:"dilip1234@gmail.com",
//   [syml]:"mySymbol",
// }

// console.log(EnterUser.Email);
// console.log(EnterUser["name"]);
// console.log(EnterUser[syml]);
 