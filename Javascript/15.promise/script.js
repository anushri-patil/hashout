//PROMISES are used to handle Async operations in JS

const cart = ["shoes" , "pant", "kurta"];

//createOrder(cart) - takes cart items and returns orderId
//Proceedtopayment(orderID) - takes orderId nd then proceeds to payment
//Both API are asynchronous & dependent on each other

createOrder(cart , function(){
    proceedToPayment(orderID);
}); 
//problem is inversion of control
//blindly trusting createorderapi
//proceedtopayment responsibility is given to createorder
//nd not in out control - risky



const promise = createOrder(cart);
//promise - nothing but empty object with data 
//it holds data whatever createorder returns to us
//createorder api is async opn - dont know how much time it takes
// {data : undefined} as soon as it executes
//after some time , it'll create order and return order details
//{data : orderDetails}

promise.then(function(orderID){
    proceedToPayment(orderID);
}); //attaching callback function
//itll call function only once




