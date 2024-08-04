//by default js is synchronous ek code ke baad ek code execute hoga fer nect

//js is single threaded so slow hai

//jb tk phela execution nhi hoga tb tk next wala execute nhi hoga
   
//@#@#@# PROJECT START@@#@#@#@Princechaudhary0909?
//generate random colors
 const randomColor = () =>{
     const hex = "0123456789ABCDEF";
     let color = "#";
      

     for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() *16)];
        
     }

     return color;
 };
 let intervalId;
//  console.log(randomColor());
const startChangingColor = () => {
if (!intervalId){
    intervalId = setInterval(changeBackgroundColor,3000)
}
    function changeBackgroundColor() {
    document.body.style.backgroundColor = randomColor();
        
    }
};
const stopChangingColor = () => {
    clearInterval(intervalId);
    intervalId = null;
};
 document.querySelector("#start").addEventListener("click",startChangingColor)
 document.querySelector("#stop").addEventListener("click",stopChangingColor)
 