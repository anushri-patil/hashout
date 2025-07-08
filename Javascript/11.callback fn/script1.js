
// let count =0;
// document.getElementById("clickMe").
// addEventListener("click", function xyz(){
//     console.log("button clicked", ++count);
// })

function attachEventListener(){
    let count =0;
    document.getElementById("clickMe")
    .addEventListener("click", function xyz(){
    console.log("button clicked", ++count);
});
}
attachEventListener();

//remove event listeners - why??
//they are heavy 

