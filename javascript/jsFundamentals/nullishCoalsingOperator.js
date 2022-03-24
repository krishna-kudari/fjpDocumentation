//nullish coalsing operator [...??...]

//returns the first defined value as || returns the first falsy value 

let definedvalue=null??undefined??"definedValue";
console.log(definedvalue) //definedValue

// '??' treats null and undefined same/equal

//it is used commonly to assign a default value instead of undefined or null 
let user;

let host=user??"Anonymus";
console.log(host)       //Anonymus

//precedance of '??' and '||' is same [4]in MDN table
//That means that, just like ||, the nullish coalescing operator ?? is evaluated before = and ?, but after most other operations, such as +, *.

let height=null;
let weight=null;

let area=(height??100)*(weight??50)
console.log(area);   //5000

area=height??100*weight??50
console.log(area);   //0 as +null =0

weight=undefined;
area=height??100*weight??50
console.log(area);      //NaN   as +undefined =NaN

// let x = 1 && 2 ?? 3;   //Syntax error

let y = (1 && 2) ?? 3;    
console.log(y)      //2

