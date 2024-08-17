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
//map mein koi duplicate value nhi hoti sb unique values hoti hai
//jis order mein values daali jati hai vaise hi rehti hai


const map = new Map();
map.set(" in"," india");
// map.set("thier are good coders")
map.set("USA","united states")

// console.log(map);

// console.log(map.keys(0))
// SYTAX IS 
for (const [key ,value] in map){
    // console.log(key, "=>" , value);
    
}

map.forEach((value ,key) => {
    // console.log(key,value);
    
})





//for in loop
//  for in se we can iterate in objects

const myObject = {
    js: "javascript",
    java:"java",
    html:"HTML"
}

for (const key in myObject){
    // console.log(myObject[key]);
    // console.log(`${key} is the shortcut for   ${myObject[key]}`);

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
 myCoding.forEach((values,key)=> {
    // console.log(values.Filename);
    // console.log(values.languageName);
    // console.log(values,key);
    
 })
//  foreach function donot have name
// for each donnot return a value /ye hrr baar m print krana nhi chata
// kbhi kbhi we want ke agr value a hai to return kriye to vo nhi ho payega
// uske liye humko conditions lgani pdengi
const arr1 = [1,2,3,45,6,7,8,9]

const newarr = []
  arr1.forEach((num) => {
     if(num>4){
        newarr.push(num)
        
     }
  })
  console.log((newarr));
  






const arr = [1,2,3,45,6,7,8,9]


arr.filter((num) => {
   return  num>4
})
// console.log(arr);






  