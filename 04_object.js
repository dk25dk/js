// const tinderUser = new Object(); // singletone object
//   const tinderUser ={}

//   tinderUser.id = "234ghr";
//   tinderUser.name = "nancy";
//   tinderUser.isLoggedIn = false;

// console.log(tinderUser);



// we can create multipale nested object 

const newUser ={
    id: '123',
    email:"nancy133@gmail.com",

    fullName:{
        userfullname:{
            firstName:'Nancy',
            lastName:'Drew',
        }
    }
}

// console.log(newUser.fullName);


// how to combine object

const obj1 = {1:"a" , 2:"b"};
const obj2 = {3:"a", 4:"b"};

// const obj3 = {obj1 , obj2};
// console.log(obj3);

const obj3 = Object.assign(obj1, obj2);
 console.log(obj3);

 const obj4 = {...obj1 , ...obj2};
 console.log(obj4);