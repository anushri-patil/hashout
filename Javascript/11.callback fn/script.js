//CallBack function
// a function can be passed into another function
// this function which is passed into another fn is known as the callback function

//JS is sychronous single threaded language
// due to callbacks, we can do async things


setTimeout(function () {
    console.log("timer");
} , 5000);
//callback fn
// its passed to settimeout and called later sometime in your program


function x(y){
    console.log("x");
    y();
}
x(function y(){
    console.log("y");
}); //y here is the callback function
// this function y is called back sometime later in the code

