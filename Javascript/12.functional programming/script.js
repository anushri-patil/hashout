function x(){
    console.log("namasthe");
}
//x is callback fn
//y here is higher order function
function y(x){
    x();
}

const radius = [3,1,2,4];

const calculateArea = function(radius){
    const output = [];
    for(i=0;i<radius.length;i++){
        output.push(Math.PI*radius[i]*radius[i]);
    }
    return output;
};

console.log(calculateArea(radius));

const calculateCircumference = function(radius){
    const output = [];
    for(i=0;i<radius.length;i++){
        output.push(2*Math.PI*radius[i]);
    }
    return output;
};

console.log(calculateCircumference(radius));

const calculateDiameter = function(radius){
    const output = [];
    for(i=0;i<radius.length;i++){
        output.push(2*radius[i]);
    }
    return output;
};

console.log(calculateDiameter(radius));

//problem - repetitive
// DRY principle - Dont repeat yourself