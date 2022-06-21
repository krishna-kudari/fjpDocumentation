// javaScript converts objects to primitives in case of math operations and other alerts 
// javascript finds three methods in any object
// 1---------- [Symbol.toPrimitive](hint){
            // return hint == "string"? this.string:this.Number;
// }

// 2---------- toString(){
    // return this.String;
// }

// 3---------- valueof(){
    // return this.number;
// }
let arr = [10 , 20];
arr = [arr[1] , arr[0]]
console.log(arr);
