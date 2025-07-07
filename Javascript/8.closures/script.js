// function x(){
//     var a = 8;
//     function y(){
//         let z=100;
//         console.log(a);
//     }
//     y();
// }
// x(); //8




function x(){
    var a = 8;
    // return function y(){ //-- instead of return y - can write this way
    function y(){
        // var z=100;
        console.log(a);
    }
    a = 100;
    // y(); 
    return y; //can do this
}
// x();
var z = x();
console.log(z);
//it prints function y


z();//7

// z();//100 

// x();
//output : 8