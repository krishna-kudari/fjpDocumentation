// "use strict";                                                // it will work only if it is on the top of the file.
// x = 6;
// console.log(x);                                             //6


// y = 9;
// console.log(y);                                             //9

console.log(this);                                          //{}
console.log(this.name);                                     // undefined

// console.log(x);
// x= 8;                                                       // ReferenceError: x is not defined iincase of non-strcit mode.

// Type 1----------------------------------------------------
function  type1(){
    console.log(this.name)
}
var name = "js";
type1();                                                    // js in browser & undefined in node.

//Type 2-----------------------------------------------------
function type2(){
    console.log(this.lname);
}
var obj = {
    lname : "kumar",
    type2
}
var lname = "verma";
obj.type2();                                                // kumar 
type2()                                                     // verma in browser and undefined in node.


// Type 3----------------------------------------------------
var food = "pizza";
var obj2 = {
    food :"pasta",
    func(){
        console.log(this.food);
    }
}

var f = obj2.func;
console.log(f);                                             // function[]
f();                                                        // pizza  //   the function get access of the environment from which it is called.

var length = 1;
function square(){
    let cb = function(){
        console.log(this.length*this.length);
    }
    setTimeout(cb , 2000);
}
var obj = {
    length : 3,
    square
}
obj.square()                                                // 1  //bcz when square is called gec is formed and by the time cb runs gec is already erased and this is reference to  global object now.

