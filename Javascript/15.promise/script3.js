//PROMISE CHAINING - to handle callback hell

createorder(cart , function(orderID){

    proccedtopayment(orderID, function(paymentinfo){

        showordersummary(paymentinfo, function(){

        });
    });
});

// const promise = createorder(cart);
// promise.then(function(orderid){
//     proccedtopayment(orderid);
// })
//same 
const promise = createorder(cart).then(function(orderid){
    return proccedtopayment(orderid);
})
.then(function (paymentinfo){
    return showordersummary(paymentinfo)
})
.then(function(paymentinfo){
    return updatewallet(paymentinfo)
});