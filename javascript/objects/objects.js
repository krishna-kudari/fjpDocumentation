//OBJECTS in Javascript//

//objects are one of non primitive datatypes in javascript.

// objects are complex data types which can contain complex data of many different type of data types
// everything in object is a key value pair

let book= new Object(); // "object constructor" syntax;
book.name="pro noob";  
console.log(book.name);              //pro noob
console.log(book);                   //{ name: 'pro noob' }
  
book={};
console.log(book);                   //{}
console.log(book.dumb="noob");       //"noob"

let n=delete delete undefined;       //delete undefined is false and delete false is true;
console.log(delete book);            //false
console.log(n);                      //true
console.log(book);                   //{ dumb: 'noob' }

delete book.dumb;
console.log(book);                   //{}

let birds ={
    kuku:"kogile",
    parrot:"gili",
    "pegion":"parival",
}

//The last property in the list may end with a comma: That is called a hanging comma or tailing comma

//For multiword properties, the dot access doesn’t work:
//for Dot method the key should be a valid variable => not start with digit and does not include charecters other than '$' and'_' and does not include spaces

birds['knight bird']="googi";
console.log(birds);                   //{kuku: 'kogile',parrot: 'gili',pegion: 'parival','knight bird': 'googi'}

let key=process.argv
birds[key]=key;
console.log(birds);                   //{    kuku: 'kogile',    parrot: 'gili',    pegion: 'parival',    'knight bird': 'googi',    'C:\\Program Files\\nodejs\\node.exe,C:\\Users\\k\\Desktop\\fjp5docn\\javascript\\objects\\objects': [      'C:\\Program Files\\nodejs\\node.exe',      'C:\\Users\\k\\Desktop\\fjp5docn\\javascript\\objects\\objects'    ]  }

//dot method doesnt work for variables

console.log(birds.key);               // undefined

//We can use square brackets in an object literal, when creating an object. That’s called computed properties.

let prop="grains";
let ram={
    [prop+prop*prop/undefined]:prop,
}

console.log(ram);                      //{ grainsNaN: 'grains' }


// property hand shorthand
function makeuser(name,age) {
    let user={
        [name]:name,
        age,
    }
    return user;
}

console.log(makeuser());                //{ undefined: undefined, age: undefined }    

let obj=(name,{age:namee})=>{return user={
    name,
    namee,
}};

console.log(obj("name",{"age":"namee"}));                     //{ name: 'name', namee: 'namee' }

//property name can be anything even keywords
let object = {
    for: 1,
    let: 2,
    return: 3
};

//in short property name can be any string or symbol or charecter anything they are converted to string 

let codes={
    91:"India",
    1:"USA"
}

console.log(codes[91]);                                       //India

//Acception for proprty name
let o0bj = {};
o0bj.__proto__ = 5; // assign a number
console.log((o0bj.__proto__));                                //[Object: null prototype] {}
console.log(o0bj);                                            //{}

//Property existance test;

let u={};
console.log(u.u===undefined);                                 //true
// this will not work value =undefined

//for in loop
// 'in' property
console.log('u' in u );                                       //false

// key can be variable
key ="birds flu";
console.log(key in birds);                                    // false

let users = {
    name: "John",
    age: 30,
    isAdmin: true
};
for(let key in users){
    console.log(key);                                         //name  John  age  30  isAdmin  true
    console.log(users[key]);
}

 //Ordered like an object
 let codeee = {
    "49": "Germany",
    "41": "Switzerland",
    "44": "Great Britain",
    // ..,
    "1": "USA"
  };

  for(let codee in codeee){
        console.log(codee);                                    //1      41      44      49
  }

  // objects are ordered in a specific fashion ,integer properties are sorted ,others other appears in creation order,
//   The “integer property” term here means a string that can be converted to-and-from an integer without a change.
// exp '49' is an integer property but '+49' and '1.3' are not

//// Math.trunc is a built-in function that removes the decimal part
console.log(String(Math.trunc(Number("49"))));                 // '49'
console.log(String(Math.trunc(Number("+49"))));                // '49'  => not the same as +49
console.log(String(Math.trunc(Number("1.2"))));                // '1'   => not integer property

//so.to fix this sorting order of integer properties,we can cheat by making the codes non-integer.Adding '+' sign before each integer property.
 codeee = {
    "+49": "Germany",
    "+41": "Switzerland",
    "+44": "Great Britain",
    // ..,
    "+1": "USA"
  };

  for(let codee in codeee){
    console.log(codee);                                    // +49     +41   +44      +1
}
 codeee = {
    "+49": "Germany",
    "+41": "Switzerland",
    "+44": "Great Britain",
    // ..,
    "+1": "USA"
  };

  for(let codee in codeee){
    console.log(+codee);                                    // 49     41    44      1
}