//Logical operators are ||[OR] , &&[AND] ,![NOT]

//OR[||] //

// '||' evalutes the values to boolean and does it till the first truthy value is reached

console.log("hi")||console.log("NaN") //"hi" '\n' "NaN"  //both are empty evaluated to false

true || console.log("false");  // 

// The OR || operator does the following:

// Evaluates operands from left to right.
// For each operand, converts it to boolean. If the result is true, stops and returns the original value of that operand.
// If all operands have been evaluated (i.e. all were false), returns the last operand.
// A value is returned in its original form, without the conversion.

// In other words, a chain of OR || returns the first truthy value or the last one if no truthy value is found.

result=null||undefined||0||NaN;
console.log(result);            //NaN returns the last value bcz none of the operand is evaluated to false

console.log(false||!true||+"   0  \n"||"OK"||"fine");    // "OK" the first truethy vlaue is returned and code stops.

//AND[&&] //

//And also work same as or but for falsy values 
//Evalutes operands from left to right returns the first falsy vlaue or the last value if none was found

console.log("Hi"&&"what the hell is this!")         //"what the hell is this!"  if none of the opearnds evaluates false then returns the last value

// && and || can be used as if in shorter form

// ("1"=== 1 ) && console.log("yes I Got one");   //type error

//AND has higher precedence than OR

// a&&b||c&&d =>(a&&b)||(c&&d)
let x,y;
function fun(){
    return true,false
}

y,x=fun();
console.log(x,y);
//only one value will be returned the last value

//NOT[!] //


//it converts the operand into boolean type and returns the inverse value

let test=!0;  console.log(+test)//1

// [!!]is to convert operands to boolen value

test=!!"Non empty string"; console.log(test) //true 

!!"Non empty string "==Boolean("Non empty string ")?console.log("ThumbsUp"):console.table("Sprite");     //"ThumbsUp"