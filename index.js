//Write first program in javascript

// console.log("Hello world");
// alert("this is alert");
// document.write("This document write");

//this is single comment
/*
this is 
multiline comment
*/

//variables
// let a = 5;
// let b = 6;

// console.log(a+b);


//Data types in javascript

/*
Primitive datatype :numbers,string,boolian, symbol,undifined,null
Reference datatype : array, objects
*/

//numbers

// let x = 55.5;
// let y = 70.6;

//string

let  string1 = "This string";
let strig2 = "This string2";
// console.log(string1);

//boolian

let a = true;
let b = false;
// console.log(a,b);

//undefined

// let und = undefined;
// let und;
// console.log(und);

let p = null;
// console.log(p);

//Reference datatype

//array

let ary = [23,45,"sumon",7.5,8]
// console.log(ary);

//objects
let Personalinfo = {
    name: "sumon",
    age:22,
    Roll : 3021


}
// console.log(Personalinfo);

//console api

// console.error("This is error");

// console.warn("This is error");

//console.clear() clear the all console

// Operators in javascript

//Arithmatic Operators
let e = 100;
let f = 25;

// console.log("The value of e + f is",e+f);
// console.log("The value of e - f is",e-f);
// console.log("The value of e * f is",e*f);
// console.log("The value of e / f is",e/f);


// Assignment Operator

let g = e;
g += 4;
g -= 4;
g *=4;
g /= 4;

// Comparison operator
let x = 45;
let y = 55;

// console.log(x == y);
// console.log(x >= y);
// console.log(x < y);
// console.log(x > y);


//Logical Operator

//Logical And
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

//Logical or
// console.log(true ||  true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

//Logical not
// console.log(!false);
// console.log(!true);


//Functions

function add(p,q){
    r = p +q;
    return r;
}

q1 = add(5,3);
q2 = add(10,5);
// console.log(q1,q2);

//conditional statement

let age = 10;

// if (age>17){
//     console.log("You are eligible for vote");
// }

// else if (age>15 && age<18){
//     console.log("Please wait few more years");
// }
// else{
//     console.log("You are not eligible");
// }


//loop in javascript

let ary1 = [1,2,3,4,5,6,7];

// for(let i=0; i<=ary1.length; i++){
//     if (i==4){
//         break;
//     }
//     console.log(i);
// }

// ary1.forEach(function(element){
//     console.log(element);
// })


var  d = 0;
// while(d <= ary1.length){
//     console.log(ary1[d]);
//     d ++;
// }

// do {
//     console.log(ary1[d])
//     d++;
// } while(d<= ary1.length)

//Array methods
let ary2 = ["sumon","galib","nerob","kamrul",12,32];

// console.log(ary2.length);

ary2.pop()
// console.log(ary2);
ary2.push("junaed");
// console.log(ary2);
ary2.shift()
// console.log(ary2);

let u = ary2.unshift(3)
// console.log(ary2);
// console.log(u);


//String methos

let mystr = "My name is sumon";
// console.log(mystr.length);

//string sliceing

let nevar = mystr.slice(5,7);

let nevar1 = mystr.slice(-7);
// console.log(nevar1);

let newvar2 = mystr.substr(4,7);

let newvar3 = mystr.substring(7,10);
// console.log(newvar3);

z = mystr.replace("sumon","galib");
console.log(z)

// // c = mystr.toUpperCase();
// c = mystr.toLowerCase();
// console.log(c);

let mydate = new Date();
// console.log(mydate);
// console.log(mydate.getTime());
// console.log(mydate.getHours());
// console.log(mydate.getMinutes());
// console.log(mydate.getDay());
// console.log(mydate.getFullYear());

//DOM Manipulation

let a1 = document.getElementById("content");
// console.log(a1);

let a2 = document.getElementsByClassName("firstcontainer");
// console.log(a2[0]);
// a2[0].style.background = "red";

a2[0].classList.add("bg-green");
a2[0].classList.add("bg-red");

// console.log(a1.innerHTML);
// console.log(a1.innerText);

// console.log(a2[0].innerHTML);

// console.log(a2[0].innerText);

let a3 = document.getElementsByTagName("div");
// console.log(a3)

createelemnt =  document.createElement('b');
createelemnt.innerText = "THis is new text";

a3[0].appendChild(createelemnt);

createelemnt1 =  document.createElement('h1');
createelemnt1.innerText = "THis is header";

a3[0].replaceChild(createelemnt1, createelemnt);

// a3[0].removeChild(createelemnt1);

//Selecting using query
sel =  document.querySelector(".firstcontainer");
// console.log(sel);
sel =  document.querySelectorAll(".firstcontainer");
// console.log(sel);

// function clicked(){
//     console.log("This button is clicked");
// }

// window.onload = function clicked(){
//      console.log("This Page has been loaded");
//     }


//Events

// content.addEventListener('click',function(){
//     document.querySelectorAll('.firstcontainer')[0].innerHTML = "<b> This is last one <b>"
//     console.log("clicked on first container");
// })

// content.addEventListener('mouseover',function(){
//     document.querySelectorAll('.firstcontainer')[0].innerHTML = "<b> This is last one <b>"
//     console.log("clicked on first container");
// })


// content.addEventListener('mouseout',function(){
    
//     console.log("clicked after mouseout");
// })


let var2 = document.querySelectorAll('.firstcontainer')[0].innerHTML;

// content.addEventListener('mouseup',function(){
//     document.querySelectorAll('.firstcontainer')[0].innerHTML = var2;
//     console.log("mouse up");
// })

// content.addEventListener('mousedown',function(){
//     document.querySelectorAll('.firstcontainer')[0].innerHTML = "<p> This is new one <p>";
// })

//Arrow function

// add2 =  (x,y) =>{
//     return x + y;
// }
// console.log(add2(3,4));

//settimeout setinterval

func1 = ()=>{
    console.log("hi hello")
}

// settime = setTimeout(func1, 5000);

// setint = setInterval(func1, 2000);

//Localstorage
// localStorage.setItem("name","sumon","age,22");
// localStorage.getItem('name')
// localStorage.removeItem('name');
// localStorage.clear()

//JSON

let var5 = {
    name:"sumon",
    Roll:31,

}

let ver = JSON.stringify(var5);
// console.log(ver);

parsed = JSON.parse(`{"name":"sumon","Roll":31}`);
console.log(parsed);

x1 = 456;

console.log(`this is a number ${x1}`);