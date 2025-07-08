//function statement aka function declaration
a(); //works
function a(){
    console.log("A called");
}
a();

//function expression
// b(); //throws error
var b = function(){
    console.log("b called");
}
b();

//anonymous function
// function(){

// } 
// Function statements require a function name


//named function expression
var c = function xyz(){
    console.log("xyz");
}
c();
// xyz(); //ReferenceError: xyz is not defined


function m (param1 , param2){ //Parameters
    console.log("parameters");
}
m(9,0); // 9,0 are arguments-values we pass to function



//First class functions
// functions are passed as arguments
var f = function(param3){
    console.log(param3);
}
f(function(){
    console.log("first class")
});
// o/p - ƒ (){
//     console.log("first class")
// }
function sfd(){

}
f(sfd);
// o/p - ƒ sfd(){

// }

//return a function from a function
var t = function(par1){
    return function xyz(){

    }
}
console.log(t());
// o/p - ƒ xyz(){

    // }


//First class functions - ability to use functions as values are the first class functions
// ability of functions to be used as values, passed as arguments , returned from the other function
//Functions are first class citizens