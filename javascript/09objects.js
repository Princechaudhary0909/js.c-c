//OBJECTS AND events ARE VERY IMPORTANT IN JAVASCRIPT 
//objects can be defined in 2 ways 1.. literal ki tarah 2..constructor ki tarah
//SINGLETON OBJECT  => jb humm literals ki tarah define krte hai to sigleton nhi bnta hai
//constructor se singleton bnega
//Object.create => this is how we create singleton object or constructor method



//ibject literals

// THIS SYMBOL IS VERY IMPORANT FOR INTERVIEW
const mysym = Symbol("Key1")


const jsuser = {
    name: "prince",
    "fullName": "prince Chaudhary",//we cann't access it by .(dot) method
    //mysym:"myKey1",// we cannot use it as symbol like this
    [mysym]:"myKey1",//now it is used as symbol
    age: 24,
    location : "ghaziabad",
    email: "prince@gmail.com",
    isLoggedIn: false,
    lastLogIn: ["monday","sunday"]

}
console.log(jsuser.email);
//console.log(jsuser."fullName");//not possible
console.log(jsuser["fullName"]);
console.log(jsuser["email"]);
console.log( jsuser[mysym]);//so it is not used as symbol

// to change value
jsuser.email = "prince1@gmail.com........."
//Object.freeze(jsuser);//so any changes cann't be made
jsuser.email = "prince@microsoft.com";
console.log(jsuser);


//in js function can be treated as a variable

// to add function in object
jsuser.greeting = function(){
    console.log("hello i'm function & how are u");
}
jsuser.greeting1 = function(){
    console.log(`hello jsuser => ${this.name}`);
}
console.log(jsuser.greeting());
console.log(jsuser.greeting1());
