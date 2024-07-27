//Immediately Invoked Function Expression (IIFE)
//jaise hi function likha tbhi execute krana hai
//jb hum chate hai ke jaise hi humari application start ho waise hi 
//file mein database ka connection start ho jaye 
//global scope ke variable kuch dikkat kre so alag scope bna lete hai hum
// in interview tell about global scope pollution

(function one (){//it is named iife
    console.log(`DB CONNECTED`);
})();//SEMICOLON IS MENDATORY TO END IIFE



( (name) => {//it is not named iife
    console.log(`DB CONNECT 2 by ${name}`);
} )("prince");