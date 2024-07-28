const arr = ["ruby","R","java","c++"]


// const values = arr.forEach((item) => {
//     console.log(item);
//     return item;
// })
// console.log(values);

// const myNum = [1,2,3,4,5,6,7,8,9,0];

// const newnums = myNum.filter((items) => items > 4)
// console.log(newnums);
//or
// const myNum = [1,2,3,4,5,6,7,8,9,0];

// const newnums = myNum.filter((items) => {
//     return items > 4
// })
// console.log(newnums);

const abtBooks = [
    {
        bookname:"1 book",published: 1990,publication: "pd",bookpages: 400
    },
    {
        bookname:"2 book",published: 1995,publication: "pdc",bookpages: 600
    },
    {
        bookname:"3 book",published: 2000,publication: "pd",bookpages: 800
    },
    {
        bookname:"4 book",published: 2005,publication: "pdc",bookpages: 1000
    },
    {
        bookname:"5 book",published: 2010,publication: "pdc",bookpages: 1200
    }
]

let result = abtBooks.filter((bks) => bks.bookpages >= 1000);
let result1 = abtBooks.filter((bks) => bks.publication === "pdc");


// console.log(result);
// console.log(result1);


const myNum = [1,2,3,4,5,6,7,8,9,0];
// let newnum = myNum.map((num) => num+10)
//console.log(newnum);

//@#@#@#@# CHAINING@#@#@#@#@#

let newnum = myNum.map((num ) => num*10)
.map((num ) => num+1)

// console.log(newnum);


//#@##@#@#@# reduce used in shopping kart @#@#@##@#
const number = [1,2,3,4]
let result12 = number.reduce((accumulator,currentvalue) => {
    console.log(`acc value${accumulator} & current value is ${currentvalue}`);
    return accumulator + currentvalue;
},0)//,0 is value of accumulator
console.log(result12);