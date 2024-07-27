//interviw important   (in COPY)
//java script execution context
//code file to global execution context 

function one (){
    console.log("one");
}
function two(){
    console.log("two");
    one()
}
function three (){
    console.log("three");
    two()
}
one();
two();
three();
