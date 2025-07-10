console.log("namaskara");

setTimeout( function(){
    console.log("javassss")
}, 5000);

console.log("Season 2");
//callback - helping in asynchronous

const cart = ["shoes", "pants", "kurta"];

//CALLBACK HELL , PYRAMID OF DOOM - 1
api.createOrder(cart , function(){

    api.proceedToPayment(function(){

        api.showOrderSummary(function(){

            api.updateWallet()
        })
    })

})
// //inversion of control - 2

