{
    //compound statement - group the statements together in block
    //why - where JS expects one statement
    var a = 10;
    console.log(a);
}

// if(true) //expects one statement

if(true) console.log("aaa");
if(true){
    var b = 100;
    console.log(b); // we write multiple statemsts in block
}
//block scoped - variables n functions that can be accessed in this block

{
    var x = 9;
    let y = 8;
    const z = 7;
    console.log(x);
    console.log(y);
    console.log(z);
}
// Block:
// y: <value unavailable> 
// z: <value unavailable>
// y n z are stored in separate memory space reserved for this block
console.log(x);
// console.log(y); //ReferenceError: y is not defined
// console.log(z);  //ReferenceError: z is not defined