const arr = [5, 1, 3, 2, 6];

//take elements of array as input - single output
//iterate arr and find sum or largest

function findSum(arr){
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        sum = sum + arr[i];
    }
    return sum;
}
console.log(findSum(arr));


const output = arr.reduce(function(acc, curr){
    acc = acc + curr; 
    //acc = sum 
    //curr = arr[i]
    return acc;
}, 0);
console.log(output);


function findMax(arr){
    let max = 0;
    for(let i=0;i<arr.length;i++){
        if(max < arr[i]){
            max = arr[i];
        }
    }
    return max;
}
console.log(findMax(arr));

const output2 = arr.reduce(function(acc,curr){
    if(acc<curr){
        acc = curr;
        //acc = max
        //curr = arr[i]
    }
    return acc;
},0);
console.log(output2);

