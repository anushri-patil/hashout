const arr = [5, 1, 3, 2, 6];

//filter - basically to filter - filter values inside an array

//filter odd

function isOdd (x){
    return x  %2;
}

function isEven(x){
    return x % 2 === 0;
}

function greater(x){
    return x > 4;
}

// const output = arr.filter(isOdd);
// const output = arr.filter(isEven);
// const output = arr.filter(greater);

const output = arr.filter((x) => x < 3);

console.log(output);