const cart = ["shoes", "pants", "kurta"];

createOrder(cart) //returns orderid
.then(function(orderID){
    console.log(orderID);
    return orderID;
})
.then(function(orderID){
    return proceedToPayment(orderID);
})
.then(function(paymentInfo){
    console.log(paymentInfo);
})
.catch(function(err){
    console.log(err.message);//cart is not valid
})
.then(function(orderID){
    console.log("no matter what happens, ill be definitely be called");
});

function createOrder(cart){
    const pr = new Promise(function(resolve, reject){
        //createorder
        //validate cart
        if(!validateCart(cart)){
            const err = new Error("cart is not valid");
            reject(err);
        }
        //logic for createorder
        const orderID = "12345";
        if(orderID){
            setTimeout(function(){
                resolve(orderID);
            },5000);
        }
    })
    return pr;
}

function proceedToPayment(orderID){
    return new Promise(function(resolve,reject){
        resolve("Payment successful");
    })
}
function validateCart(cart){
    // return true;
    return false;
}
