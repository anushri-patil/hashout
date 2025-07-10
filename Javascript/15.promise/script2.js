//promise - placeholder for certain period of time until we receive
// value from asynchronous op
//container for a future value
//PROMISE -- object representing eventual completion or a failure of asynchronous opn

const URL = "https://fakestoreapi.com/products/1"
const user = fetch(URL)
console.log(user);

user.then( function(data){
    console.log(data);
})