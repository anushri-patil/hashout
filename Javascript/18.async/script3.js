
GITHUB_URL = "https://api.github.com/users/anushri-patil";

async function handlepromise(){

    try{
        const data = await fetch(GITHUB_URL); 

        const jsonValue = await data.json();//again a promise 
        console.log(jsonValue);
    } 
    catch(err){
        console.log(err);
    }
    //tr catch to handle error

    // fetch().then(res => res.json()).then(res=> console.log())

    //fetch- its a promise...it gives a response object 
    //response body - readble stream
    //readable stream to JSON --- .json
    //.json is a again a promise
    //when its resolved...it gives JSON value

}

handlepromise();

//instead of try catch for error handling
//older way of catch
// handlepromise().catch(err => console.log(err));