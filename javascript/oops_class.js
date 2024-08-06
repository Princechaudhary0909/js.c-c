const user = {
    username: "prince",
    logincount: 5,
    signedIn: true,

    getUserDetail:function () {
        // console.log("got user detail  from database");
        console.log(`Username: ${this.username}`);
        console.log(`Username: ${this.logincount}`);

        console.log(this);//this means current context
        
    }
}
console.log(user.username);
// console.log(user.getUserDetail());
console.log(this);//when we do this in console their is window obj available


// const promise = new promise()
// const date = new date()//new keyword is constructor funtion
//new is used to make new context


function User(username , logincount, signedIn) {
    this.username = username;
    this.logincount = logincount;
    this.signedIn = this.signedIn

    // return this//this is optional likho ya mt likho
}

const user1= new User("prince" , 6 , true)
const user2 =new User("dagar" , 55 , true)
console.log(user1);
console.log(user2);


//read about "instance of " from mdn wen docs


