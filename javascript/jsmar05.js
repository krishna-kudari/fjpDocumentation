//closures the inner function gets lexical scope of parent function which has references of lexical scope variables
function outer(){
    let a=17;
    function inner(){
        a=5
        console.log(a);
    }
    
    a=10;
    return inner;
}
// console.log(a.call(outer()) )
let z=outer();
z(); //10  //if a=5 removed
z(); //5 

