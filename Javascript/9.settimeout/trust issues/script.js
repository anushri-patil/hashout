console.log("start");

setTimeout( function cb() {
    console.log("callback");
}, 5000);

console.log("end");


let startdate = new Date().getTime();
let enddate = startdate;
while(enddate < startdate + 10000){
    enddate = new Date().getTime();
}

console.log("While expires");


console.log("start");

setTimeout( function cb() {
    console.log("callback");
}, 0); 

console.log("end");
// o/p : start , end  , callback