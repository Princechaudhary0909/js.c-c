//  let scores = 22
// let score1 = "ee22"
//  let score2 = null
//   console.log(typeof (scores));
//   console.log(typeof (score1));
//   console.log(typeof (score2));

//   let valueInNumber  = Number(scores)
//   let valueInNumber1  = Number(score1)// output = NaN(not a no.) 
//   let valueInNumber2  = Number(score2)//output is 0 thats why we say their is 
// //   no strict check in javascript
//   console.log(valueInNumber);
//   console.log(valueInNumber1);
//   console.log(valueInNumber2);
  
  
  let bool = 1 
  let bool1 = 0
  let bool2 = ""
  let bool3 ="prince"
  
let toBool = Boolean(bool)//true
console.log(toBool);

let toBool1 = Boolean(bool1)
console.log(toBool1);//false

let toBool2 = Boolean(bool2)//false
console.log(toBool2);

let toBool3 = Boolean(bool3)
console.log(toBool3);//true



//how the data is kept in memory and accessed on that basis datatypes are divided into 2 types


//PRIMITIVE 
// 7 types
//string, number ,boolean,null,undefined,symbol => to make value unique,BingInt;
//these are all call by value means when we copy them then their original refrence of memory is not given inki value copy krke de jaati hai
//means jb hum inko copy krte hai hai to inka original reference
// nhi diya jata ye copy krke de jaati hai so jo changes hote hai vo copy mein hote hai



//javascript is dynamiccally types language as we don't need to specift the datatype
// isme humko define nhi krna pdta hai ke hum jo value de 
// rhe hai let score mein vo int hai ya string hai

// const score = 100;
// // how to define symbol
// const id = Symbol('345');
// const anotherId = Symbol('345');
// console.log( id === anotherId );//but result false milega kyoki ye unique hota hai


//non-PRIMITIVE or  refrence type
// means memory mein inka reference humko directly allocate kiya ja skta hai
//array,objects functions

// objects and events are main in js
