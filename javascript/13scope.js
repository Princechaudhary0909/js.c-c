var c =300;
let a = 100;
if(true){
    let a = 10;//BLOCK SCOPE
const b = 20;//BLOCK SCOPE
var c = 30;//GLOBAL SCOPE
//console.log(`inner a value ${a}`);
}
//  console.log(a);
// console.log(b);
// console.log(c);


//global scope is different in browser conso;e and in core environment using node


function one  () {
    const username="prince"
    function two (){
        const age=44;
        //console.log(username);

    }//console.log(age);
    two();

}one();

// #@#@#@#@#@#@#@#@#@## CONCEPT@##@#@#@#@#@#
interesting(4);
function interesting (num) {
    return num+1;
}
//interesting(4);
//isme humne function ko declair kiya hai to isko hum phele
// call kr skte hai
// koi error nhi aayegi
//addTwo(5)
// but addtwo mein humne usko variable mein hold kiya hai so
// hum usko phele call nhi kr skte
const addTwo = function (num){
    return num+2;
}
addTwo(5)
