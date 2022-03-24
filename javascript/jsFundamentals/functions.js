//functions are first class citizens
function sound() {
    console.log("aaaa ooo eee ");
}
sound();   //undefined

function sound(param1,param2,param3){
    console.log(param2);        //mew
}

sound("bow-Bow","mew")

function sound(param1="kuhoo-kuhoo",param2="kaw-kaw",param3 ="Krow"){
    console.log(param2);        //kaw-kaw
}

sound();

//A function can access an outer variable as well.
//The function has full access to the outer variable. It can modify it as well.
// The outer variable is only used if there’s no local one.

//A function with an empty return or without it returns undefined

// function expressions // 
let dowork=function(){
      console.log("why");
};
console.log(dowork());     //undefined   nothing returned
console.log(dowork);        //[Function: dowork]

//function is value which describes a task or action

//function declared can be called before they declared but function expressions cannot be ,they throws an error bcz they are variables which contain some vaalue describing some action.
//A Function Expression is created when the execution reaches it and is usable only from that moment.

//in strict mode the function declared inside a block are invisible outside of it
"use strict";
let moon="chand";

if(moon=="chand"){

   let  tare =function tare(){
        console.log(`${this.tare}thod laoon`)          //  TypeError: Cannot read properties of undefined (reading 'tare')
    };
    tare();
}

tare();                         // ReferenceError: tare is not defined

//Callback functions //

function ask(question,yes,no){
    if(question) yes();
    else no();
}

function showok(){
    console.log("hooo")
    return "meee";
}
function shownotok(){
    return false;
}
console.log(ask("what do you think?",showok,shownotok));        //hooo '\n\ undefined bcz ask not returning anything
console.log(showok())                                           // "hooo" '\n' meee bcz showok is returning meee

// Arrow Functions //
let sum = (num1, num2) => num1 + num2;
console.log(sum(9, 8)); //17
let calculation = (a, b, c) => {
  if (a < b) return a ** c;
  else console.log(`${a} is bigger man that's too lengthy`);
};

console.log(calculation(2, 3, 4)); //16

//when only parameter is present  perenthesis can be ommitted
for (let i = 0; i < 31; i++) {
  let pow = (n) => n ** 2;
//   console.log(pow(i));
}

//Arrow functions can beused in the same way as function expressions
let age =19;
let welcome=age>20?()=>console.log("come in"):()=>console.log("try next year boy");
welcome();                  //"try next year boy"
