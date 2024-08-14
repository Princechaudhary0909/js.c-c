const accountId = 15556 //constant it cann't be changed
let accountEmail = 'prince@123.com' // we use this 
var accountPassword = "0987654321" // we don't use this prefer not to use due to block and functional scope
accountCity = "ghaziabad" //not good but we can declair this way also
let accountState;

// accountId = 2 // not allowed
console.log(accountId);
accountEmail = "pc@777.com"
accountPassword = "2345"
accountCity = "Noida"
console.log(accountEmail);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);