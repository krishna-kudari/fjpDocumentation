//there are 8 basic datatypes in javascript //
//Javascript is a dynamically typed language => anytime an identifier can shift between values 0f differnt datatypes.

//number                    //bigint                           
//string                    //boolean
//null                      //undefined
//symbol                    //object

//NUMBER//
let val=1;
let abra=-15553673;

// number datatype can store vlaues upto 2^53-1 to -2^53-1

// number can contain both numbers and floating points.

console.log(typeof val==="string"); //false bcz typeof val is number.

console.log(typeof typeof val==="string"); //true bcz typeof returns a string value

//apart from these // Infinity  // -Infinity  //Nan(not a number) are special values of these datatypes

console.log(typeof (0/0)); //number
console.log(0/0); //NaN

console.group(typeof(1/0));// number
console.log(1/0); //INfinity

console.log(typeof('nonsense clculation'*10) ); //number
console.log(typeof 'nonsense clculation'*10) //NaN // bcz overall its multiplication of string returned by typeof function and number 10 .it is an errous calculation.

NaNn=9; //bcz currently strict mode is off so variables can be declares using nothing and they are defaulted as "var";
console.log(`${NaNn=NaN/0}`)// Nan

//only way to manipulate NaN.
console.log("NaN"**0); // 1 //bcz ** is precedance from right to left and anything power zero is equals 1
 
//BIGINT//

let bignumber=121319149614961177073n;
console.log(typeof bignumber)//bigint

// bigint numbers  end with 'n' however small or big they may

let bigSmallNumber=-0n;
// console.log(typeof(bigSmallNumber))

// //STRING//

let string ="";
console.log(typeof string); //string // Anything inside quotes is a string 

// //three types of quotes are used in javascript
// // double quotes ""                     // single quotes ' '          both are equal for javascript engine              

// // backticks ` ` used to embed values of variables and calculations.

let ice='cream';
let candy=`vanilla milk ${ice+" spicy"} hot`;  //vanilla milk cream spicy hot
console.log(candy);

// // BOOLEAN//

console.log( typeof Boolean); //function some inbuilt
console.log(typeof true)      //boolean bcz boolean can contian only two values those are true and false.

const hurt=true;
console.log(hurt+"cool");   //truecool  // whenever there is chance javascript converts other values to string for concatination

let algebra=Infinity;
let metaphor=``;
console.log((metaphor+algebra)/Infinity);  // Nan(not a number)    // whenever there is chance javascript converts other values to string for concatination
// if brackets removed it will be a number =NaN

algebra=NaN;
metaphor=``;
console.log(metaphor+algebra);  // NaN(string)   // whenever there is chance javascript converts other values to string for concatination

algebra=NaN;
metaphor=`s`;
console.log((metaphor+algebra)**0);  // 1   // whenever there is chance javascript converts other values to string for concatination


console.log( typeof console.log()) //undefined // bcz  console.log() returns nothing => typeof nothing is undefined =. again it's a string


// NULL//

// null are special datatypes these do not belong to any of the above

//in javascript null is reference to a [non-existing object] or null pointer

//it is just a special value that represents "nothing" "empty" or "value unknown"

console.log(typeof null);  //object

console.log(typeof (null + "1")); //string  // oh god strings are like thanos

let space=null;
console.log(space**null); //1 //null as numeric conversion becomes zero

space=null;
console.log(space**Infinity); //0  //null as numeric conversion becomes zero

space=null;
console.log(Infinity/Infinity); //NaN //errous calculation or math error generally gives NaN

// UNDEFINED //

// the meaning of undefined is "value is not assigned";

//the value is declared but not assigned then it is undefined

var x;

console.log(x+"1") // undefined1 //string  //=>remove 1 its undefined

//OBJECT AND SYMBOLS//
console.log(typeof Object) //function

// objects are special type of  that is capable binding all the datatypes functions arrays classes

// console.log(datatype)  //reference error not defined
console.log(typeof datatype)  //undefined

console.log(typeof(console.log)) //function //console is an object and log is its method/functio inside it

console.log(Symbol(2)); //symbol(2)

// symbols are used to create unique identifiers for objects.
