const arr = [5, 1, 3, 2, 6]

//Double - [10,2,6,4,12]
//Triple - [15,3,9,6,18]
//Binary - ["101","1","11","10","110"]

//Map - transform an array

function double(x){
    return x*2;
}

function triple(x){
    return x*3;
}

function binary(x){
    return x.toString(2);
}
// const output = arr.map(double);
// const output = arr.map(triple);
// const output = arr.map(binary);

// const output = arr.map(function binary(x){
//     return x.toString(2);
// });

// const output = arr.map((x) => {
//     return x.toString(2);
// })

const output = arr.map((x) =>  x.toString(2));
console.log(output);