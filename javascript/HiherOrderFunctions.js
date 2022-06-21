let arr = [2, 4 , 6 , 73];
let perimeter = a => 4*a;
let area = a => a*a;
let diagonal = a => Math.sqrt(2)*a;

let calculator = function (arr , fn){
    let res = [] ;
    for(let i = 0; i < arr.length; i++){
        res.push(fn(arr[i]));
    }
    return res;
}

console.log(calculator(arr,perimeter));                             //[ 8, 16, 24, 292 ]
console.log(calculator(arr,area));                                  //[ 4, 16, 36, 5329 ]
console.log(calculator(arr,diagonal));                              //[2.8284271247461903,5.656854249492381,8.485281374238571,103.23759005323595]

// map
let res = arr.map(a=>a*a);
console.log(res);                                                   //[ 4, 16, 36, 5329 ]


//reduce
// write a code to calculate largest element in array
arr = [2, 5, 8, 6, 78];
let max = arr.reduce((acc,num) => {
    return Math.max(acc,num);
})
console.log(max);          // 78

let users = [   {firstNmae:"Mayank",lastName:"Singh",age:55},
                {firstNmae:"Mayank",lastName:"Singh",age:10},
                {firstNmae:"Mayank",lastName:"Singh",age:20}];
// write code to get fullName of all users
fullNames = users.map(obj => {
    return obj.firstNmae+" "+obj.lastName;
})
console.log(fullNames);             //[ 'Mayank Singh', 'Mayank Singh', 'Mayank Singh' ]

function reducer (acc,obj){
    // console.log(acc[obj.age]);
    if(acc[obj.age]){
        ++acc[obj.age];
    }else{
        acc[obj.age] = 1;
    }
    // console.log(acc[obj.age]);
    return acc;
}
let agegroups = users.reduce(reducer,{})
console.log(agegroups);             // { '55': 3 }

let filteredUsers = users.filter((obj) =>{
    if(obj.age < 30){
        return true;
    }
})
filteredUsers = filteredUsers.map((obj)=>{
    return obj.firstNmae+" "+obj.lastName;
})
console.log(filteredUsers);//[ 'Mayank Singh', 'Mayank Singh' ]
filteredUsers = users.filter(obj=> obj.age<30).map(obj=>obj.firstNmae+" "+obj.lastName);
console.log(filteredUsers);//[ 'Mayank Singh', 'Mayank Singh' ]
function filter(acc,obj){
    
    if(obj.age < 30){
        acc.push(obj.firstNmae+" "+obj.lastName)
    }
    return acc;
}
let filters = users.reduce(filter , []);
console.log(filters);//[ 'Mayank Singh', 'Mayank Singh' ]

// Prototype :---- Implementation of our own map
Array.prototype.myMap = function(logic){
    let res=[];
    for (let i = 0; i < this.length; i++) {
        // let  element = this[i];
        res.push(logic(this[i]))
    }
    return res;
}
getFullName = (obj) =>{
    return obj.firstNmae+" "+obj.lastName;
}
let ans = users.myMap(getFullName);
console.log(ans);