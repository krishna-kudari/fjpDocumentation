// methods of primitives //

//7 primitives snbbsnu => string , number, bigint, boolean, symbol, null, undefined

// javascript allows methods on primitive [bts => an object wrapper will be created and it knows the primitive value and has useful methods after accessing these are disappeared.

let str="laila";
console.log( str.toUpperCase() );                   //'LAILA'

let n= 1.2345;
n=n.toFixed(2);
console.log(n);                                     // "1.23"
console.log(typeof n);                              //'string'

// constructors with "new " keyword for primitives create an object

console.log(typeof new Number(NaN));                // object
console.log(typeof Number(NaN));                    // 'number'

//Objects are always truthy inside "if"

let fal =new Number(false);

if(fal){
    console.log(typeof fal);                        // object
}

//null and undefined have no methods incase they are most primitive.

console.log(str.test);                              // undefined
str.test = 5;                                       // undefined in non strict mode and it will give an error in strict mode.
console.log(str);                                   // undefined
console.log(str.test);                              // undefined 