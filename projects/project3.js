// document.getElementById("clock");
// or we can do one thing
// we can selct by query selector also
const clock = document.querySelector("#clock")
// console.log(clock);


setInterval(function(){
    let date = new Date();
    //this console output will run in console
    // console.log(date.toLocaleDateString());
    
    clock.innerHTML = date.toLocaleTimeString();

},1000)

