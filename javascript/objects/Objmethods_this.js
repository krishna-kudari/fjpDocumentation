// Object methods => this //

//objects often consists of methods that use properties of the object. this plays important role in accessing properties of th parent object.

let library = {
    book:"the colors of white",
    pages:500,
    info:function(){
        console.log(this.book+': '+this.pages);
    }
}

library.info();                                                                 // 'the colors of white: 500'

library = {
    book:"the colors of white",
    pages:500,
    info:function display(){
        console.log(this.book+': '+this.pages);
    }
}
library.info();                                                                 // 'the colors of white: 500'

library = {
    book:"the colors of white",
    pages:500,
    info:function display(){
      this.book="hhhh"
      let ram= function afun (){console.log(this.book+': '+this.pages);}
    //    ram(); 
    }
}
library.info();                                                                  // 'undefined: undefined'  accessing this ouside an object results in undefined bcz this is not bound  it is undefined outside an object.

library = {
    book:"the colors of white",
    pages:500,
    info:function display(){
      this.book="hhhh"
      let ram= function afun (){console.log(this.book+': '+this.pages);}
    //    ram(); 
    }
}

// library.info().ram();                                                             // TypeError: Cannot read properties of undefined (reading 'ram')

//shorthand for methods inside an object //
user ={
    name:"bal thakarey",
    sayHi(){
        console.log(this.name+" hi");
    }
}

user.sayHi();                                                                        // 'bal thakarey hi'  

let admin = user;
admin.sayHi();                                                                       // 'bal thakarey hi'

user = {
    name:"bal thakarey",
    sayHi(){
        console.log(user.name+" hi");
    }
}
admin = user;
user =null;
// admin.sayHi();                                                                       // TypeError: Cannot read properties of null (reading 'name') //user is overwritten to null so admin cannot access null

console.log(admin);                                                                     // { name: 'bal thakarey', sayHi: [Function: sayHi] }


library = {
    book:"the colors of white",
    pages:500,
    info:function display(){
      
       (afun =()=> {console.log(this.book+': '+this.pages);})();
     
    }
}

library.info()                                                                          // the colors of white: 500