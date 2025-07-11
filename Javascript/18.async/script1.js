//BEFORE async and await
const p = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve("Promise resolved");
    }, 10000);
});
async function handlePromise(){
    console.log("Hello world");
    const val = await p;
    console.log("namasthe JS")
    console.log(val);

    const val2 = await p;
    console.log("namasthe JS")
    console.log(val2); 
    //prints parallely
//script1.js:11 namasthe JS
// script1.js:12 Promise resolved
// script1.js:15 namasthe JS
// script1.js:16 Promise resolved

} 

handlePromise();
//after 10s
//JS engine was waiting for promise to be resolved in line 9 and then line 10
//namasthe JS
//Promise resolved

// AWAIT - keyword can be used only inside a async function
//await keyword in front of promise p


//older way of handling promises
// function getget(){
//     //JS engine will not wait for promise to be resolved
//     p.then(res => console.log(res));
//     console.log("namasthe js");
// }
// getget();
//namasthe js -1st this will be printed
// Promise resolved

