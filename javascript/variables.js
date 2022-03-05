// variables used to store values ,when variable declared memory allocated and value undefined or null stored .

// then in code execution phase the variable value is assigned.

// using let to ceate a varible and assign a value to it

let messege="Good things first";

let text;

text="!text cannot start with a digit , !text cannot contain space, !text can contain digits, uderscore(_) and $ ,! use camelCase for multiword variable(identifiers)"

console.log('\n'+text+'\n'+messege);

// variables can be created using let, var, const and nothing(incase of nonstrict mode).

// let can be reassigned and cannot be redeclared its block scoped

// var can be redeclared re assigned it is function scoped

// const cannot be redeclared and  reassigned and initialised without assignment,bcz once it is initialised it cannot be reassigned

// const test;/*SyntaxError: Missing initializer in const declaration*/

// let messege;/*SyntaxError: Identifier 'messege' has already been declared*/

// let 9am;/*SyntaxError: Invalid or unexpected token*/

let $="Dollor Bigg";

let _="uder Score";
 
// let .="Dot";/*SyntaxError: Unexpected token '='*/

// let .ab;/*ReferenceError: let is not defined*/

// .ab="SyntaxError : Unexpected token '.'";

// Using UPPERCASE CONST Declared variables to make const variables which are difficult to remember  for example ColorCodes Different URLS and Tokens ,Cookies
const COLOR_RED='#ff0000';
const COLOR_GREEN="#00FF00";
const COLOR_BLUE="#0000FF";

let color=COLOR_BLUE;
console.log(color);