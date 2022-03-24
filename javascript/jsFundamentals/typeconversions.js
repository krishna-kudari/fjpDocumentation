// Type Conversions are pretty automatic in javascript //

// Basically three types of type conversions are there in Javascript
// String conversions                   // numeric conversions                  // boolean conversions

// STRING CONVERSIONS//
//  string conversions are used when we need a string form of value

let value=true;
let stringValue=String(value);

console.log(typeof stringValue);   // "string"

console.log(stringValue/10) // NaN bcz of errous calculation of string(cannot be evaluated into a valid number) with number.

//string conversions are pretty obvious forexample false would become "false" and it will.

//NUMERIC CONVERSIONS //

//numeric conversions happens automatically  in mathematical expressions.

let string ="446lk";
console.log(typeof Number(string[0])) //"number" 

console.log("4"/"6"); //0.666666   bcz '/' operator forces numeric conversions

console.log(Number(undefined));    //NaN

console.log(Number(null));       //0

console.log(Number(false));     //0

console.log(Number(  "231"  ));     //231

console.log(Number("   "));      //0    //after removing empty spaces the string evalutes to zero

// Value	        Becomes…
// undefined	    NaN
// null	            0
// true and false	1 and 0
// string	        Whitespaces from the start and end are removed. If the remaining string is empty, the result is 0. Otherwise, the number is “read” from the string. An error gives NaN.

// Boolean conversions//

//Truthy values are boolean conversions evaluates to 1
//falsy values these evaluates to false 

//except intuitively empty like  0 ,null ,undefined ,empty string and NaN all are truthy values.

console.log(Boolean(0));   //false
console.log(Boolean(""));   //false
console.log(Boolean(NaN));  //false
console.log(Boolean(undefined));    //false
console.log(Boolean(null));     //false

console.log(Boolean(' '));      //true //bcz space is not an empty string .

console.log(Boolean('0'));      //true //it's not an  empty string


// Value	                            Becomes…
// 0, null, undefined, NaN, ""	        false
// any other value	                    true