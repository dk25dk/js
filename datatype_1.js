"use strict"; // trerat all JS code as newer version

//primitve data tpye
//Number age = 23;
// String name = "dilip";

//Boolean => true / false;
//bignt => store long value
//undefined
//null => it is tpyeof would be object null standlon value

//Non-primitive data type
//Object

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//  Stack (primitive ) , Heap(Non-primitive)

// in stack memory origonal not be chnage it give copy 

// in heap memory change original value it give original value refrancne

/*
let myinstName = "Dilipdk@";
let secoendNamne = myinstName;
secoendNamne = "kumar@dk";
console.log(myinstName);
console.log(secoendNamne);
*/

let useName = {
    email:"1234@gmail.com",
    password: 1234,
}
let userNameChange = useName;
userNameChange.password= '2345';

console.log(useName);
console.log(userNameChange);