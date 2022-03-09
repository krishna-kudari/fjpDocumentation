//fs=> filesystem module
const fs=require("fs");
const { fileURLToPath } = require("url");

// //writeFileSync creates a file and writes if already exists replace its data
// fs.writeFileSync("fs1.txt","hi guys");
// fs.writeFileSync("fs1.txt","hi guyz");

// let buffer=fs.readFileSync("fs1.txt","utf-8");

// console.log(""+buffer);
// console.log((buffer));

// //appendFileSync appends the data of the file of passed path if file doesn't exist it's created then latter happens
// fs.appendFileSync('fs1.txt','\n'+"Have a seat");

// buffer=fs.readFileSync("fs1.txt","utf-8");

// console.log((buffer));

// //existsSync returns true if file exists ,false otherwise
// console.log(fs.existsSync('fs1.txt'));

//"./for current directory".
// let tfile=require('./fs1.txt');
// console.log(tfile);

// "../"for1 directory up.

// let fileOfOtherDir=require('../javascript/variables')
// console.log(""+fileOfOtherDir);


// let bulk=fs.readFileSync('../javascript/variables.js',"utf-8")
// console.log(bulk);

//require method ,goes to file that is needed to be required and executes that file

// let exe=require('../javascript/datatypes')
// console.log(exe)

//for excessing an object/function of different file use module .exports in that file and here require it then use with '.' notation
let addfn=require("../node/fs1.js");
console.log(addfn(2,4));

console.log(fs.readFileSync('../node/jsmar08.js','utf-8'))
