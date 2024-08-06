//promis eis an object

const promise1 = new Promise((resolve, reject) => {
    //do ana sync task
    //DBcall
    //cryptography related,network
    setTimeout(() => {
            console.log("task completed");
            resolve();
            
    },1000)
})
promise1.then(() =>{
    console.log("promise consumed");
    
})


new Promise((resolve, reject) => {
    setTimeout(() =>{
        console.log("async task two");
        resolve()
    },2000)
}).then(()=>{
    console.log("async two resolved");
    
})


const promise3 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve({username:"prince" , email:"prince@gamil.com"})
    },3000)
})
promise3.then((user)=>{
    console.log(user);
    
})


const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error)
        {
           resolve({ username: "hello", pass: "333"}) 
        }else{
            reject("something's wrong")
        }
    },4000)
})

promise4.then((user) => {
    console.log(user);
    return user.username;
}).then((username) =>{
    console.log(username);
    
}).catch((error) =>{
    console.log(error);
    
}).finally(()=>{
    console.log("THE PROMISE IS EITHER RESOLVED OR REJECTED");
    
})




const promise5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error)
        {
           resolve({ username: "javascript", pass: "333"}) 
        }else{
            reject("js  wrong")
        }
    },5000)
})
//promise can be resolved by .then as well as async await
async function consumefive() {
    try{
        const response = await promise5
        console.log(response);
    }catch (error){
            console.log(error);
            
    }
     
}
consumefive()


// async function getAllUser() {
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
        
//     const data = await response.json()//json mein change hone mein time lgega to isko bhi await mein daaleneg
//     console.log(data);
    
//     }catch(error)
//     console.log("E", error);
    
// }
// getAllUser()

//we can do like this also
fetch("https://jsonplaceholder.typicode.com/users").then((response) =>{
    return response.json()
})
.then((data) =>{
        console.log(data);
        
})
.catch((error) => console.log((error))
)