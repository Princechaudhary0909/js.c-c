// IF

if( 2 === 2){
    // console.log("it's true");
}

const IsUserLoggedIn = true;
if(IsUserLoggedIn){
// console.log("user is logged in");
} 


 const balance = 1000;
// if (balance > 100) console.log("test");//aise nhi krna hai

//nesting 
// if(balance > 500){
//     console.log("yes ")

// }else if(balance > 800){
//     console.log("true");
// }else{
//     console.log("loww balance");
// }

// if(balance > 550){
//     console.log("true");
// }


//somevalues are their which are considered as true or false
const userEmail = "prince@gmail.com"
if(userEmail){// bs isme check hota hai ke kuch value hai to true maante hai 
    console.log("got the email");
} else {
    console.log("error email not received");
    //agr useremail khali hota to usko false maana jata
}

//FALSY VALUES
// false,0,-0 ,BigInt 0n,null,undefined,NaN
// rest are truthy values



//TRUTHY VALUES
//"0","false"," ",[],function(){}  etc


let myArr = [];
if(myArr.length === 0){
    console.log("empty array");
}

