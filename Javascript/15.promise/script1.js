const GITHUB_API = "https://api.github.com/users/anushri-patil"

const user = fetch(GITHUB_API);
//fetch returns promise

console.log(user);
// o/p:Promise {<pending>}
// [[Prototype]]: Promise
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: Response
//data fetch method returns in PromiseResult

user.then(function(data){
    console.log(data);
})

//promise - special object
//JS gurantees that promise object can be resolved only once- eitjer success or a failure
// 3 states - pending,fulfiled,rejected
//promise objects are immutable
