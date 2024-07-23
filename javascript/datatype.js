
//how the data is kept in memory and accessed on that basis datatypes are divided into 2 types


//PRIMITIVE 
// 7 types
//string, number ,boolean,null,undefined,symbol => to make value unique,BingInt;
//these are all call by value means when we copy them then their original refrence of memory is not given inki value copy krke de jaati hai



//javascript is dynamiccally types language as we don't need to specift the datatype

const score = 100;
// how to define symbol
const id = Symbol('345');
const anotherId = Symbol('345');
console.log( id === anotherId );

//non-PRIMITIVE or  refrence type
// means memory mein inka reference humko directly allocate kiya ja skta hai
//array,objects functions



