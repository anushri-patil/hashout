const users = [
    { firstName: "akshay", lastName: "saini", age: 26},
    { firstName: "donald", lastName: "trump", age: 75},
    { firstName: "barak", lastName: "obama", age: 78},
    { firstName: "deepika", lastName: "singh", age: 26},
];

//list of full names
// ["akshay saini", "donald trump" ...]

const output = users.map(x => x.firstName + " " + x.lastName);
console.log(output);

//different ages
// acc:{26 : 2 , 75: 1 , 78:1}

//curr - first object
const output2 = users.reduce(function(acc, curr){
    if(acc[curr.age]){
        acc[curr.age] = ++acc[curr.age];
    }
    else{
        acc[curr.age] = 1;
    }
    return acc;
},{});

console.log(output2);

//first name of all people whose age is less than 30
// ["akshay" , "deepika"]
const output3 = users.filter(x => x.age<30).map((x) => x.firstName);
console.log(output3);


