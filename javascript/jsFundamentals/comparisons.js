//Comparisons //
// comparison operators ar '<'      // '>'      // '>='        // '<='      //'=='      // '!='         // '==='       // '!=='

//the result of comparisons is a Boolean either true or false

console.log(2>'1')  //true

//STRING COMPARISONS//

console.log("Applo">"apple")  //false

console.log("apple">'appl0')  //true

console.log(0==NaN);        //false //compareing NaN with any other value will result in false

console.log("192"<"092l")     //false

//COMPARISONS OF DIFFERENT TYPES //

//when comparing values of different types ,Javascript converts the values to numbers

console.log(NaN== +"killbilly")    // false //compareing NaN with any other value will result in false.

//boolean of two values may be different and they can be equal at the sametime in Javascript.

let a=0;
let b="0"; console.log((Boolean(b,a,0)));     //true bcz as soon as the console.log hits boolean function and b it evaluates it and logs it.
console.log(a==b) // true
 
x=Boolean(a,b)
console.log(x)    //false Boolean considers only first argument

x=Boolean(a),Boolean(b)     //false  '=' > ','
console.log(x);

x=(Boolean(a),Boolean(b))
console.log(x)              //true    

//strict Equality [===]//

//A strictly equal operator checks equality without type conversions//

console.log(0==="0")    //false

//comparison with null and undefined //

console.log(null===undefined)   //false bcz deferent types
//null and undefined are "sweet couple"
console.log(null == undefined)   //true   //null and undefined are equal to each other in nonstrict equality check and not equal to any other value//

//strange result with null vs 0

console.log(null >0);  //false
console.log(null==0);  //false
console.log(null<=0);  // true

//the reason is that an equality check and comaprison operators work differently .comparisons convert null into 0 and compare .
//for equality check null and undefined are equal to each other and not equal to any other.

console.log(typeof null)
// for (let i=0;i<10; i++){
//     console.log(null[i])    //TypeError: Cannot read properties of null (reading '0')
// }

// an incomparable undefined  //

console.log(undefined >=NaN)    //false   //false because undefined gets converted to NaN and NaN is a special numeric value which returns false for all comparisons.
console.log(undefined ==0)      //false
console.log(undefined <0)       //false

//Taks //
let k;
console.log(null == "\n0\n")    //false null only equals undefined
console.log(null >= +"\n0\n")  //true  //null not compared to number
console.log((+null) === (+"\n0\n"));   //true
