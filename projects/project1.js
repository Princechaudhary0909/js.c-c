const allbuttons = document.querySelectorAll(".button") ;
// console.log(allbuttons);
const body = document.querySelector("body");


allbuttons.forEach(function(button){
    console.log(button);
    // button.addEventListener("click");
    button.addEventListener("click",function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id ==="grey"){
            body.style.backgroundColor = "grey";
        }
        if(e.target.id ==="white"){
            body.style.backgroundColor = "white";
        }
        if(e.target.id ==="blue"){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id ==="yellow"){
            body.style.backgroundColor = e.target.id;
        }
        
    });
    
});