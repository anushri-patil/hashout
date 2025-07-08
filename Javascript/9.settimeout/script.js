function x(){
    var i=1;
    setTimeout(function(){ //it doesnt wait here
        console.log(i);
    }, 3000) ;//1000ms
    console.log("namasthe");
} 
x();

function z(){
    for(var j = 1 ;j <= 5; j++){
        setTimeout( function() {
            console.log(j);
        }, j * 1000);
    }
    console.log("nnn");
}
z();
// op - 6,6,6,6,6 

function y(){
    for(let j = 1 ;j <= 5; j++){//let - block scoped
        setTimeout( function() { //it creates new copy every time
            console.log(j);
        }, j * 1000);
    }
    console.log("nnn");
}
y();
// o/p - 1,2,3,4,5

function w(){
    for(var j = 1 ;j <= 5; j++){
        function closefn(x){
            setTimeout( function() {
            console.log(x);
            }, x * 1000);
        }
        closefn(j);
    }
    console.log("nnn");
}
w();