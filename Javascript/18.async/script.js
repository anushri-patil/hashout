//async await
//ASYNC - keyword used before a function to create a async function

//async fn- always returns a promise-its property
async function getData(){
    // return promise // returns direct promise
    // OR return "namasthe" //takes value wraps inside a promise and returns
    return "Namasthe";
}

const data = getData();
console.log(data); //[[PromiseResult]]: "Namasthe"

//actual data from promise
data.then(function(res){
    console.log(res); //Namasthe
})

const p = new Promise((resolve, reject) =>{
    resolve("Promise resolved value");
});
async function pp(){
    return p; //if its a promise already , then itll return it directly
}
const datap = pp();
console.log(datap);
datap.then((res) => console.log(res));//Promise resolved value

//ASYNC AND AWAIT - is used to handle promises



