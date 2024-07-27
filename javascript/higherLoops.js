// for of loops
// ["","",]
// [{},{}]
// const array = [1,2,3,4,5]
// for (const num of array){
//     console.log(num);

// }


// const arr = "hello prince";
// for( const i of arr){
//     console.log(i);
// }
 

// maps in javascript
const map = new Map();//map are not iterable for in or for of loops
map.set(" in india");
map.set("thier are good coders")

// console.log(map.keys(0))

//for in loop

const myObject = {
    js: "javascript",
    java:"java",
    html:"HTML"
}
for (const i in myObject){
    // console.log(myObject[i]);
    // console.log(`${i} is the shortcut for   ${myObject[i]}`);
}


//MOSTLY USED LOOP (FOR EACH LOOP)
 const coding = ["java","c++","c","HTML"];
// coding.forEach( (item) => {

//     console.log(item);
// } )

// function printMe (){
//     console.log("printed");
// }
// coding.forEach(printMe)

// coding.forEach((item,index , arr) => {
//     console.log(item,index,arr);
// })


const myCoding =[{
    languageName: "java",
    Filename: "mt.java"
},{
    languageName:"javascript",
    Filename:"my.js"
}]
 myCoding.forEach((values)=> {
    console.log(values.Filename);
    console.log(values.languageName);
 })