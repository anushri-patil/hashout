

console.log(b); //undefined
console.log(a);
//  - reference error - error cannot access a before initialization
// here a is in temporal dead zone
//JS tries to find a specific variable but cannt access it

// console.log(z);
// Reference error - y is not defined

// let a = 10;
// let a=100; 
//syntax error-identifier a has already been declared


let a =10;
// console.log(a);
var b = 100;

//window.b = 100
//window.a = undefined

// let a = 90; syntax error
// var a = 100; //syntax error - Identifier 'a' has already been declared
//duplicate  decalration

let c;
c= 99;
c=200;
console.log(c); // This is fine

// const d ;
// d =100; /// syntax error - Missing initializer in const declaration
//const keyword it expects initialiaztion ==

const d = 100;
// d = 99; //TypeError: Assignment to constant variable
//coz variable is of type const