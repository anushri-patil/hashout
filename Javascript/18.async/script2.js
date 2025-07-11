const p1 = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve("Promise resolved 100 before async await");
    }, 5000);
});

const p2 = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve("Promise resolved 50 - before async await");
    },10000);
});

async function handlePromise(){
    console.log("Hello world");
    const val = await p1;
    console.log("namasthe JS1")
    console.log(val);

    const val2 = await p2;
    console.log("namasthe JS2")
    console.log(val2); 
}

handlePromise();

//p1-10s p2-5s
// //Hello world
//after 10 s - all below lines are printed
// script2.js:16 namasthe JS1
// script2.js:17 Promise resolved - before async await
// script2.js:20 namasthe JS2
// script2.js:21 Promise resolved - before async await

//p1-5s p2-10s
// Hello world
//after 5s this will be printed
// script2.js:16 namasthe JS1
// script2.js:17 Promise resolved - before async await
//after 10 s this will be printed
// script2.js:20 namasthe JS2
// script2.js:21 Promise resolved - before async await
