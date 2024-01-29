// const promiseOne = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log('Ayscn taks is complet');
//         resolve();
//     }, 2000)
// });

// promiseOne
//     .then(function () {
//         console.log("I am the first then function");
//     })


// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve();
//     },3000)
// }).then(function(){
//     console.log("Async 2 reslove");
// })

// const promiseThree = new Promise(function(reslove , reject){
//     setTimeout(function(){
//         reslove({username:"dilip" , age:34}) // we pass any value either array , object anyting
//     },1000)
// })
// promiseThree.then(function(user){
//     console.log(`My Name is ${user.username}. My age is ${user.age}`);
// })

const promisefour = new Promise(function (reslove, reject) {
    setTimeout(function () {
        let error = false;
        if (!error) {
            reslove({ username: "dilip", password: "123" })
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 2000)
})
promisefour
    .then((data) => {

        console.log(data);
        return data.username
    }).then((myusername) => {
        console.log(`The username is ${myusername}`)
    }).catch(function (error) {
        console.log(error);
    }).finally(() => {
        console.log("The promise is either resolve or reject");
    })