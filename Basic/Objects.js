//TODO: There are two ways to creat object Singleton(use constructor) & Literles.

//TODO || "Singlteon"

//* Object.create();
const naruto = new Object();

//TODO || Object Literals

//* const naruto = {}
const mySymbol = Symbol("key"); 

const JSuser = {
    name : "Shyam",
    [mySymbol] : "key1",
    age: 21,
    email : "shyam@gamil.com",
    location : "Delhi",
    isLoggedIn : false  
}
// console.log(JSuser.email);     // shyam@gamil.com
// console.log(JSuser["email"]);  // shyam@gamil.com
// console.log(JSuser[mySymbol]); // Symbol calling
// console.log(JSuser);

JSuser.greeting = function(){
    console.log(`Hello ${this.name}, This is Siri`);
}
// console.log(JSuser.greeting());

//* Object.freeze(JSuser); // fresze object so after it can't change
JSuser.email = "Shyam@apple.com";
// console.log(JSuser);

let userName = { 1 : "Shyam Katariya"};
let userAge = { 2 : 21 }
let userCollage = { 3 : "ADIT"}

let userDetail = {...userName,...userCollage,...userAge}
// console.log(userDetail);

//* Object to Arrayformat
// console.log(Object.keys(JSuser));
// console.log(Object.values(JSuser));
// console.log(Object.entries(JSuser));
// console.log(JSuser.hasOwnProperty('email'));

const User = {
    name : "Shyam",
    [mySymbol] : "key1",
    age: 21,
    private_email : "shyam@gamil.com",
    location : "Delhi",
    isLoggedIn : false  
}

//* User.email [in distructuring]
const {private_email : email} = User
console.log(email);