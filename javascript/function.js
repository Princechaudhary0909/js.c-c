//function means a block of code which we have written is in package and we can use that anywhere we want
/*
console.log("p");
console.log("r");
console.log("i");
console.log("n");
console.log("c");
console.log("e");
*/

function sayMyName(){
    console.log("p");
console.log("r");
console.log("i");
console.log("n");
console.log("c");
console.log("e");

}
sayMyName();//function call
sayMyName//function refrence


//function  addTwoNumbers (n1,n2){//function ke andr n1,n2 ko prameters bolte hai
  //  console.log(n1+n2);


//}
function  addTwoNumbers (n1,n2){
  let result = n1+n2;
  return result;

}

//addTwoNumbers(3,5);//jb hum inko call krenge tb inko bolenge argumets
//addTwoNumbers(3,"5");
const result = addTwoNumbers(3,6);

// console.log("RESULT:" ,result);

function logInUserMessage(username){
  if (username === undefined)// OR if(!username)
  {
    console.log("please enter a username");
    return;
  }
  return `${username} just loggedin`
}
//console.log(logInUserMessage("prince"));//when we don't pass any value output comes to be "UNDEFINED"
// console.log(logInUserMessage());


//SHOPPING CART PROBLEM
function calculateCartPrice(...n1){
  return n1;

}
// console.log(calculateCartPrice(200,400,500));
//we have rest operator for this problem(...)
//3dot is rest operator

const user = {
  name:"prince",
  age:33
}
function handleObject(anyobject){
  console.log(`user name is ${anyobject.name} and age of user is ${anyobject.age}`);
}
handleObject(user);


const newArray = [100,200,300,400]
function array(getArray){
  return getArray[2];
}
console.log(array(newArray));

