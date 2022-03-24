//while and for loops

//while loop
let itr=0;
while(itr<=2){
    console.log("Hoppo Birthdo to Yo");
    itr++;
}

//do while loops
//used when code has to be executed atleast once regardless of condition
let i=0;
do{
    console.log("Hoppo Birthdo to Yo");
}while(i>0)


//for loop
let k=0;
for(;k<2;){
    let me="i am inside loop"
    console.log("Hoppo Birthdo to Yo");
    
    k++;
}

// console.log(me);    //error [if used var then works]

for(;k<6;){
    let me="i am inside loop"
    console.log("Hoppo Birthdo to Yo");
    if(k===3){
        continue;

    }
    if(k===2){
        break;
    }
   
    k++;
}

//No break/continue to the right side of ‘?’
//Please note that syntax constructs that are not expressions cannot be used with the ternary operator ?. In particular, directives such as break/continue aren’t allowed there.

// i>5 ? console.log(i):continue;  //Syntax error

//Labels for break / Continue
//when we need to break from multiple loops
var val=1;
outer:
for(let i=0;i<4;i++){
    innfirst: for(let j=0;j<4;j++){
        innermost: for(let k=0;k<4;k++){
            if(j>0){
                continue innfirst;
                break innfirst;
            }
            console.log(val);       //16 times
            val++;
        }
    }
    console.log(val);           //4times
    val++;    

}


//a Label must be inside the loop