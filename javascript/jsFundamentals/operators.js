//2 types of operators are there uniry ,binary 

//unary operators apply to one operand
//binary needs 2 operands

//binary addition '+' //

//it is supported to string conversions supremely
// and it does work or concatination if any of the operands is a string
let a='2';
let b='4';
console.log(a+b);   //"24"

console.log(NaN+"2");   //"NaN2"

console.log(true+'2');  //'true2'

console.log(2+2+'1');   //'41'

console.log('1'+2+2);   //'122'

console.log('1'+2/"  2");    //"11"

//accept '+' all other arithmetic operators love numeric conversions for the purpose of math calculations

//Numeric connversion with unary '+'

console.log(+NaN)          //NaN
console.log(+undefined)   //NaN
console.log(+null)       //0

// unary '+' does the same thing as"Number(...)" but it is ashorter form

console.log(+"1" + +"4");    //5

console.log((+"cake") ** +" ")  //NaN**0=>1   //NaN**NaN is errous calculation

//OPERATOR PRECEDANCE//

// Precedence	            Name	            Sign
// 16	                    in/decrement	    ++/--
// 15	                    unary plus	        +
// 15	                    unary negation	    -
// 14	                    exponentiation	    **
// 13	                    multiplication	    *
// 13	                    division	        /
// 12	                    addition	        +
// 12	                    subtraction	        -
// 2	                    modifyAndAssign	    …=
// 2	                    assignment	        =
// .	                    comma	            ,

//Assignment operator '='//

//Assignment operator first assigns the value evealuated at RHS and returns a value

console.log(a=5*3);        //  15 

let c=1;
let d=2;
console.log(3-(a=2+'1'));   // -18   !! a="21" => !! 3-"21" =-18 .

//Chaining assignments //

let e,f,g;
e=f=g=3+3;   //e=6    ,f=6      ,g=6
// it is same as 
// g=3+3;
// f=g;
// e=g;

//chaining assignments evaluate from right to left

//Modify-in-place//
var n;
n=n+5;
console.log(n);  //undefined are evaluated to NaN

// let n=1;    //syntax error  identifier n has already been declared
var n=1;
n+=5;
console.log(n);     //6

console.log(n%=2)   //0

// Short "modify-and-assign " operator exists for all arithmetic and bitwise operators
n=2
console.log(n*=3+5);  //16
 
// these have very low precedence.

// Increment and Decrement //

let cnt=7;
console.log(cnt++); //7
console.log(++cnt);  //9

// post in/decrement in/decreases value by 1 and returns old value
// pre  in/decrement in/decreases value by 1 and returns new value

// console.log(++5);   // SyntaxError: Invalid left-hand side expression in prefix operation

// The operators ++/-- can be used inside expressions as well. Their precedence is higher than most other arithmetical operations.

let vim = 1;
console.log( 2 * ++vim);   // 4

console.log(2*vim++)        //2  postincrement returns old value


//BITWISE OPERATORS //
// "&"      // "|"      // "^"      // "~"      // "<<"     // ">>"     // ">>>" ZERO-FILL RIGHT SHIFT

// COMMA //
//  comma ','  has least precedence lower than '=' and returns the last expression and ignores other stuff

console.log(a=(1+2,3+4)) // 7
console.log(a=1+2,3+4) //3 7 two returns are happening 

x = 1+2, 3+4; 

console.log(x); //3

y= 4+5, x+4;  // => (y=4+5),x+4  
console.log(y);  //9;
console.log(x);  //3;


// the user inputs are always in strings so in order to process the data the numbers are need to be converted to number first
