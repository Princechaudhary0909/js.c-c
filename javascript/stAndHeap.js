// stack(PRIMITIVE)   heap(non PRIMITIVE or refence type)
let myName = "prince dagar";
let fullName =  myName
fullName = "dagar prince"
console.log(fullName);
console.log(myName);


//#@#@#@##@ STRINGS #@##@#@#@#@#@#
const name = "prince";
const repoCount = 50;
// console.log(name + repoCount + "hello");
// do like this 
console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

// another way to declair string
const fname = new String("prrince");
console.log(fname, fname[0]);
console.log(fname.__proto__);


console.log(fname.toUpperCase());
console.log(fname.charAt(3));
console.log(fname.indexOf("r"));

///learn further method for interview
const newString = fname.substring(0,3);
console.log(newString); 
const anothe = fname.slice(-8,4);
console.log(anothe);



const slic = "    hello    "
console.log(slic);
console.log(slic.trim());


const url = "http/hello.com/prince";
console.log(url.replace("prince","dagar"));
console.log(url.includes("prince"));
console.log(url.includes("dagar"));

