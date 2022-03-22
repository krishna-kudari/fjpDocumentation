//the variable of primitive datatype stores value;
// the variables which store complex datatypes such as object and array store its reference not actual value so even the const values can be changed

//A variable assigned to an object stores not the object itself, but its “address in memory” – in other words “a reference” to it.

let user = {
    name:2,
};

let user2=user;

user2.name=5;

console.log(user===user2);                //true

console.log(user,user2);                  //{ name: 5 } { name: 5 }

//comparing two objects

let a={};
let b={};

console.log(a==b,a===b);                  // false false

// For comparisons like obj1>obj2 or for any primitive comparison like obj==5 ,objects are converted into primitive

//Cloning And merging ,Object.assign

// for duplicating an object

let book={
    name:"colors of nocolor",
    pages:68,
    Author:"Krishna K",
}

let clone=new Object();

for(property in book){
    clone[property] = book[property];
}

console.log(clone);                         //{ name: 'colors of nocolor', pages: 68, Author: 'Krishna K' }

//Object.assign copies all source objects propertis into the first parameter object.
//Object.assign returns the destination object

let conditions={
    if:"if",
    else:"else if"
}

let loops={
    for:"for",
    while:"while",
}

console.log(Object.assign({},conditions,loops));        //{ if: 'if', else: 'else if', for: 'for', while: 'while' }
console.log(Object.assign({},{conditions,loops}));      //{  conditions: { if: 'if', else: 'else if' },  loops: { for: 'for', while: 'while' }}

let target={...loops,...conditions}

console.log(target);                                    //{ for: 'for', while: 'while', if: 'if', else: 'else if' }

target={...[loops],...conditions}                       //{ '0': { for: 'for', while: 'while' }, if: 'if', else: 'else if' }

// console.log(...loops);                               //TypeError: Found non-callable @@iterator
console.log(...[loops]);                                //{ for: 'for', while: 'while' }

console.log({...loops});                                //{ for: 'for', while: 'while' }

//nested cloning //
// sometimes the properties of objects are not primitive they also can be objects or any other nonprimitive

//to fix that thing we have to examine all the properties.this can be done either by recursion or by  "_.cloneDeep(obj) from lodash library",

//
