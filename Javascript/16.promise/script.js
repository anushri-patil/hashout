const cart = ["shoes", "pants", "kurta"];

const promise = createOrder(cart); //returns orderid
// console.log(promise);

promise
.then(function(OrderID){
    console.log(OrderID);
})
.catch(function(err){
    console.log(err.message);//cart is not valid
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
        const OrderID = "12345";
        if(OrderID){
            setTimeout(function(){
                resolve(OrderID);
            },5000);
        }
    })
    return pr;
}

function validateCart(cart){
    // return true;
    return false;
}

