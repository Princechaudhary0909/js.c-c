//singleton or constructor declaration of object
const instaUser = new Object()
 instaUser.id ="12233333",
 instaUser.name = "prince",
 instaUser.IsLoggedIn = true

// console.log(instaUser);

const regularUser = {
    email: "prince22.com",
    userFullName:{
        FirstName: "prince",
        LastName: "chaudhary"

    }
}
// console.log(regularUser);
// console.log(regularUser.userFullName);
// console.log(regularUser.userFullName.FirstName);
 
const obj1 = {
    1:"a",
    2:"b",
}
const obj2 = {
    3:"c",
    4:"d",
}
// const obj3 = Object.assign(obj1,obj2);
//const obj3 = Object.assign({} ,obj1,obj2);//empty array lelete hai so that usme value store ho jaye agr nhi lenge to sb obj1 mei n store hoga
// we will be using this mostly
// const obj3 = {...obj1,...obj2}
// console.log(obj3);

//when values comes fron database
const user = [{
    id:1,
    email:"p@gmail.com"

},
{
    id: 1,
    email:"pc@gmail.com"

},
{
    id:1,
    email:"p@gmail.com"

}, {
    id:1,
    email:"p@gmail.com"

}]
// console.log(user[0]);

// console.log(instaUser);
// console.log(Object.keys(instaUser));//iska return type hoga ARRAY so baad mein isme loops lga skte hai baaki saare array ke operations use kr skte ahi
// console.log(Object.values(instaUser));
// console.log(Object.entries(instaUser));

//jb hum object mein loopthrough kr rhe hote hai to vo value exist nhi krti hai
//so we can check that by kyoki crash ke chances hai
// console.log(instaUser.hasOwnProperty('IsLoggedIn'));
// console.log(instaUser.hasOwnProperty('IsLogged'));










