var x = 100;
let y = 67;
const z = 3;
//Shadowing behaves the same way in the function also
{// function(){//variable in 3rd line shadows variable in 1st line
    var x = 9;
    let y= 8;
    //y = 8; - try this pretty interesting
    const z = 7;
    console.log(x);//9
    console.log(y);//8
    console.log(z);//7
}
console.log(x);//9
console.log(y);//67
console.log(z);//3

const m = 65;
function q(){
    const n = 29;
    console.log(n);
}
q();//29
console.log(m);//65

//ILLEGAL shadowing
// let s = 23;
// {
//     var s = 24; // Identifier 's' has already been declared
// }

//VALID
var s = 23;
{
    let s =24;
    console.log(s);//24
}
console.log(s);//23


const p = 30;
{
    const p=40;
    {
        const p =999;
        // console.log(p);999
    }
    // console.log(p);40
}
// console.log(p);30
// Lexical scope