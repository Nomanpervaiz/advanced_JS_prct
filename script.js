// Advanced Javascript (All ES Versions)
// Variable Scoping
// Closure
// Template literals
// Destructuring
// Default parameters
// Rest parameter
// Spread Operator
// Arrow functions
// Enhanced object literals
// Iterators & For..of
// Generators
// Modules
// Array methods
// Higher-order function
// CallBack
// Promises
// Exponentiation Operator
// Classes
// Ternary Operator
// Optional chaining



// ________________________________________________________________________________
// Variable Scoping
// var
// let
// const
// var is hoisted and initialized
// var is function scoped
// let and const are block scoped
// let and const are not function scoped
// let and const are hoisted but not initialized
// const is immutable




// ________________________________________________________________________________
// closure 
// inclosure we can exicising abc function varible in soo function  
function abc() {
    let a = "im abc"
    // window scope
    // abc() scope
    function foo() {
        // window scope
        // abc() scope
        // def() scope
        function choo() {
            // window scope
            // abc() scope
            // def() scope
            // choo() scope
            function soo() {
                // window scope
                // abc() scope
                // def() scope
                // choo() scope
                // soo() scope
                console.log(a);
            }
            soo()
        }
        choo()
    }
    foo()
}
abc()
console.log("______________________________________________________________");



// Template literals
// backtick
let a = "noman"
console.log(`hi my name is ${a}`);
console.log("______________________________________________________________");



// Destructuring
let myObj = {
    myName : "noman",
    myAge : 22,
    profession : "coding",
    myFamily :{
        myFather : "Pervaiz",
        myBorthers : "i have two brothers"
    }
}
// also we can desturcture object in object 
let {myName,myAge,profession,myFamily:{myFather,myBorthers} } = myObj
console.log("name ==>", myName, "age ==>" , myAge,"profession ==>",profession,"fathername ==> ",myFather , "Brothers ==> ",myBorthers);
console.log("______________________________________________________________");



// Default parameters 
function myFunc(myName,age=22) {
    console.log("Name =>",myName, "|","age =>", age);
}
myFunc("noman")
console.log("______________________________________________________________");


// Rest parameter
function rest(name,...detail) {
    console.log(name);
    console.log(detail);
}
rest("noman","pervaiz","22 age","human")
console.log("______________________________________________________________");

// Spread Operator
// merge objects
let personalDetail = {
    name : "noman",
    age : 22
}
let publicDetail = {
    Gender : "male",
    profession : "coding"
}
let merging = {...personalDetail,...publicDetail}
console.log(merging);
// merging arrays
let myDetail = ["noman","pervaiz"]
let myDetail2 = ["22 age", "Male"]
let mergingArray = [...myDetail,...myDetail2]
console.log(mergingArray);
console.log("______________________________________________________________");



// Arrow functions
// we can shorter the code with arrow function 
const myArrowFunc = ()=>{ 
    return "my self arrow function"
}
console.log(myArrowFunc())
// oneLine function for only one statement
const myArrowFunc2 = (functionName)=> `my self ${functionName}`
console.log(myArrowFunc2("arrow function"))
// To access the arguments passed to an arrow function, you can use the rest parameter syntax (...)
const logNumbers = (...args) => {
    console.log(args)
}
logNumbers(8, 24)
// arrow function can not support hositing if we call arrow function before initialized it will give arrow 
// function is not defined error
console.log("______________________________________________________________");



// Enhanced object literals
let name1="two"
let age1=26
let salary1=5500
let emp1={
    name1,
    age1,
    salary1
}
console.log(emp1)
console.log("______________________________________________________________");



// Iterator 
// function that work like for loop
// _______________________________________________________________________


// Generator 
// Thats how generator will work 
function* generator() {
    yield 1;
    yield 2;
    yield 3;
}
const gen = generator()
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log("______________________________________________________________");



// Modules
import { myfunction,abc as alpha,foo } from "./script2.js";
myfunction();
alpha()
foo()
console.log("______________________________________________________________");


// Array methods
// for each method 
let myArr = ["karachi","lahore","islamabad"]
console.log("===========> For Each method");
myArr.forEach((elem,index,all)=>{
    console.log("arrayvalues =>",elem);
    console.log("array index =>",index);
    console.log("whole array =>",all);
})
// map can do the same thing but it returns value
console.log("===========> MAP method");
let resultMap = myArr.map((elem,index,all)=>{
    console.log("arrayvalues =>",elem);
    console.log("array index =>",index);
    console.log("whole array =>",all);
})
console.log(resultMap);
console.log("______________________________________________________________");
// filter can do the same thing but it returns value
console.log("===========> Filter method");
let resultFilter = myArr.filter((elem,index,all)=>{
    console.log("arrayvalues =>",elem === "karachi");
    console.log("array index =>",index);
    console.log("whole array =>",all);
})
console.log(resultFilter);
console.log("______________________________________________________________");
// Find method to find any element and its index 
// reduce method for sum and 


// Higher-order function
// High order functions are those who take function as a parameter and return function
const highOrder =  (cb) =>{
    return cb()
}
const callBackFunc = ()=>{
    console.log(" im cb function");
}
highOrder(callBackFunc)
console.log("______________________________________________________________");


// CallBack 
const getData = (cb)=> {
    setTimeout(() => {
        cb()
    }, 0);
}
const data = ()=>{
    console.log("Main Data hoon");
    console.log("______________________________________________________________");
}
getData(data)


// Promises
// promise is a latest ecma_script feature to make handle asycronous code in javascript
// getData from api using .then and .catch 
// const getApiData  = ()=>{
//     return new Promise((resolve, reject) => {
//         fetch("https://api.openweathermap.org/data/2.5/weather?q=karachi&appid=9e52da91470a6a5a0172f98f5f8c3fd9")
//         .then((res)=>res.json())
//         .then((res)=>resolve(res))
//         .then((err)=>reject(err))
//     }) 
// }
// getApiData()
// .then((res)=> console.log("using .then -->",res))
// .catch((error)=>console.error(error))

// // we can also use asycn and await 
// const getApi = ()=>{
//     return new Promise(async(resolve, reject) => {
//         try {
//             await fetch("https://api.openweathermap.org/data/2.5/weather?q=karachi&appid=9e52da91470a6a5a0172f98f5f8c3fd9")
//              .then((res)=>res.json())
//              .then((res)=>resolve(res))
//              .then((err)=>reject(err))
            
//         } catch (error) {
//             console.log(error);
//         }
//     })
// }
// const asyncFunc = async ()=>{
//     try {
//         let dataJson = await getApi()
//         console.log("using async await -->",dataJson);
//             console.log("______________________________________________________________");
//         } catch (error) {
//             console.log(error);
//         }
//     }
//     asyncFunc()
    
    
    
    // Exponentiation Operator 
    // power opertor
// also we have javascript method Math.Pow() to do the same work 
let num = 2
let num1  = 4
let results = num**num1
console.log(results);
console.log("______________________________________________________________");



// Classes
class Students {
    constructor(studentName, fatherName) {
        this.studentName = studentName;
        this.studentFatherName = fatherName;
    }

    fullName() {
        return this.studentName + " " + this.studentFatherName;
    }
}
let student = new Students("Noman", "Pervaiz");
let studentFullName = student.fullName();
console.log(student);
console.log(studentFullName);
console.log("______________________________________________________________");



// Ternary Operator
let checkAge = myAge >= 22 ? "Adult" : "Child"
console.log(checkAge);
console.log("______________________________________________________________");


// Optional chaining
const detail = {
    myName : "Noman" , 
    FatherName : "Pervaiz" , 
    myLocation : {
        city : "Karachi",
        country : "Pakistan",
    } ,
}
let address  = detail.myLocation?.city
console.log(address);
console.log("______________________________________________________________");

