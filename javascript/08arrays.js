 //collection of items of multiple type under single variable
 //array in js is resizeable

 
 let arr = [1,2,3,4,5,6,7,"true"]
//  console.log(arr[0]);
//  console.log(arr[1]);
//  console.log(arr[2]);
//  console.log(arr[3]);
//  console.log(arr[4]);
//  console.log(arr[5]);
//  console.log(arr[6]);
//  console.log(arr[7]);

// @#@#@# impotamnt
// jb hum array mein copy operation krenge to shallow copies bnayega
// mtlb jb same reference point share kre 
// so jo hum array mein change krenge vo original mein hoga

 const army = ["trucks","tanks","guns","M416"]
 

 //methods
// .push add a value 
// .pop remove last value
// .unshift to add at beginning 
// .shift to remove first element

//  arr.push(army)
// console.log(arr);//this will show array ke andr array 

 const allarr = arr.concat(army)
console.log(allarr);


//spread is best 
const allNewArr = [...arr,...army]
console.log(allNewArr);


// .flat jb array ke andr array hota hai to ye usko single array mein convert krta hai
// .from to convert to array
