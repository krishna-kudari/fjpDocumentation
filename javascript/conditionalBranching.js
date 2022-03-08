// conditional branching using if and '?'
//IF(...)//
//if statement evaluates a conditon in the parenthesis and if that evaluates to true the executes a block of code
var year=1946;
if(year==2000){
    console.log("your age is 22");

}else if(year==1970){
    console.log("your age 52");
}else{
    console.log("yor are old");
}

// the if(..)evalutes the inner values to Boolean
// boolean conversion of all the values except {null,undefined,empty string,0,NaN}(flasy vlaues) become true(truthy values).

//only one or none of the blocks will be executed;


//? //
//question mark is used when based on some consditon the variable has to assign some value.
let age=21;
let access=age>18?true:false;
let accessallowed=age>18;
console.log(access,accessallowed)
let country="India"
let greet=country=="India"?"Namaste":
    country=="Japan"?"konichiva":
    country=="pakistan"?"assalamvalekom":`hi ${country}`;
console.log(greet);


//non treditional use of '?'
country=="India"?console.log("Jai Hind"):"Jai PUBG";
