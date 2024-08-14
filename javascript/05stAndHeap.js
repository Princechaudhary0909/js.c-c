// stack(PRIMITIVE)   heap(non PRIMITIVE or refence type)
let myName = "prince dagar";
let fullName =  myName
fullName = "dagar prince"
// console.log(fullName);
// console.log(myName);


//#@#@#@##@ STRINGS #@##@#@#@#@#@#
const name = "prince";
const repoCount = 50;
// console.log(name + repoCount + "hello");
// do like this 
// console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

// another way to declair string
const fname = new  String("prrince");//another way to declair// delibrately bolna ke string hi chiye
//agr ase cosole mein type krenge tbhi to uske prototypes dekhayega

// console.log(fname, fname[0]);
// console.log(fname.__proto__);//output => {} ye yha pr empty object mila hai pr
// console mein diff hoga


// console.log(fname.toUpperCase());
// console.log(fname.charAt(3));
// console.log(fname.indexOf("r"));

///learn further method for interview
// const newString = fname.substring(0,3);
// console.log(newString); 
const anothe = fname.slice(-8,4);
console.log("the value of anothe is " + anothe);



const slic = "    hello    "
console.log(slic);
console.log(slic.trim());//cut down spaces


const url = "http/hello.com/prince";
console.log(url.replace("prince","dagar"));
console.log(url.includes("prince"));
console.log(url.includes("dagar"));

