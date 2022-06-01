// There are base set of inheritedly reachable values, that can not be deleted for obviously reasons.

//---> for instance

// functions that are  currently executing and their local closure variables and parameters
// nested functions , callback functions .
// global objects . 
// all the above are called ----> roots <----.

// reachable values.
// Any othervalue is considered reachable if it is reachable from aroot by a reference or a chain of reference.
// for instance , if there is an object in a global variable and it has a property referencing another object then that object is considered reachable.

let user = {
    name: "John"
};
user = null;
console.log(user);                  // null and there is no way to access the object "John" so it is unreachable and grabage collector collects it.

let user2 = {
    name: "John"
};

let admin = user2;
user2 = null;
console.log(admin);                 // { name: 'John' } the object John initially had 2 references and one is overrided to null but it has another  reference  so it will persist.

// InterLinked Objects
function marry(man , women){
    man.wife = women;
    women.husband = man;
    return {
        father:man,
        mother:women
    }
}

let family = marry({name:"John" }, {name:"Ann"});
console.log(family);                                    
//{
//   father: <ref *1> {
//     name: 'John',
//     wife: { name: 'Ann', husband: [Circular *1] }
//   },
//   mother: <ref *2> {
//     name: 'Ann',
//     husband: <ref *1> { name: 'John', wife: [Circular *2] }
//   }
// }

delete family.father;
delete family.mother.husband;
console.log(family);     
// { mother: { name: 'Ann' } }

// Unreachable Islands 
// It is possible that the whole island of interlinked objects becomes unreachable and is removed from the memory.
family = null;
console.log(family);                // null
// The former "family" object has been unlinked from the root, there’s no reference to it any more, so the whole island becomes unreachable and will be removed.

// Internal algorithms
// The basic garbage collection algorithm is called “mark-and-sweep”.

// The following “garbage collection” steps are regularly performed:

// The garbage collector takes roots and “marks” (remembers) them.
// Then it visits and “marks” all references from them.
// Then it visits marked objects and marks their references. All visited objects are remembered, so as not to visit the same object twice in the future.
// …And so on until every reachable (from the roots) references are visited.
// All objects except marked ones are removed.

// Some of the optimizations:

// Generational collection – objects are split into two sets: “new ones” and “old ones”. 
// In typical code, many objects have a short life span: they appear, do their job and die fast, so it makes sense to track new objects and clear the memory from them if that’s the case. Those that survive for long enough, become “old” and are examined less often.
// Incremental collection – if there are many objects, and we try to walk and mark the whole object set at once, it may take some time and introduce visible delays in the execution. So the engine splits the whole set of existing objects into multiple parts.
// And then clear these parts one after another. There are many small garbage collections instead of a total one. That requires some extra bookkeeping between them to track changes, but we get many tiny delays instead of a big one.
// Idle-time collection – the garbage collector tries to run only while the CPU is idle, to reduce the possible effect on the execution.