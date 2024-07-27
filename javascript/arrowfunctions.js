const user = {
    username: "prince",
    age: 33,
welcomeMessage: function(){
    console.log(`${this.username} ,welcome here!`);//this refer to current context
    // console.log(this);

}

}
// user.welcomeMessage();
// user.username ="hell";
// user.welcomeMessage();
// console.log(this);//output: empty object


// IMPOTANT FOR INTERVIEW
// in browser global object is window object


// function one (){
//     let username = "prince"
//     // console.log(this);
//     // console.log(this.username);//inside function "this" will not work
// }
// one();

// const one = function(){
//     console.log(this);
//      console.log(this.username);

// }
// one();



// const one =() => {   //not possible even in arrow function
//     console.log(this);
//      console.log(this.username);

// }
// one();


//@#@#@#@#@#@# ARROW FUNCTION@#@#@#@#@#@#@#@#
 const addTwo = (n1,n2)  => {     //when we use curly braces then their we have to write return 
    return n1 + n2

 }

 const add = (n1,n2) =>  (n1 + n2)// when we wrap in these palenthesiis then we don't write return keyword
 console.log(addTwo(33444,3435));
 console.log(add(33444,3435));
 

