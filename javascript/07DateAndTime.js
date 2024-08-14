//DATES

let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2024,10,12)//(2024,0,23);
//let myCreatedDate = new Date(2024,10,12,5,3);
let myCreatedDate = new Date("2024-11-12");

// console.log(myCreatedDate.toLocaleString());

// console.log(myCreatedDate.toDateString());


//when we design quizes and polls in javascript then we need this to know exact time 


let MyTimeStamp = Date.now();
// console.log(MyTimeStamp);
// console.log((myCreatedDate.getTime()));
// console.log(Math.floor(Date.now()/1000));//to convert to sec imp fr interview
//decimal value nhi chiye hoti hai to floor use krte hai
let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getDay());
// console.log(newDate.getFullYear());
// console.log(newDate.getHours());




///IMPORTANT METHOD
let  universal = newDate.toLocaleString('default' , {
    weekday: "long",
    Date: "numeric",
        
})

console.log(universal);




















console.log();