const form  = document.querySelector("form")


// this use case will give empty values
// const height = parseInt(document.querySelector("#height").value)




// console.log(form);
form.addEventListener("submit",function(e){
e.preventDefault();
const height = parseInt(document.querySelector("#height").value)
const weight = parseInt(document.querySelector("#weight").value)
const results = document.querySelector("#results")

if (height  === ""  || height<0 || isNaN(height)) {
    results.innerHTML = `please give valid height ${height}`
}
if (weight  === ""  || weight<0 || isNaN(weight)) {
    results.innerHTML = `please give valid height ${height}`
}
else{
    const bmi = (weight / ((height*height)/10000).toFixed(3));
    //show result
    results.innerHTML = `<span>${bmi}</span`;
    if (bmi <= 18.6) 
        {results.innerHTML = `  your weight is ${bmi} and you are under weight`
        
    }
    if (bmi >= 18.6 && bmi <= 24.9) 
        {results.innerHTML = ` your weight is ${bmi} and  you have perfect weight`
        
    }
    if (bmi > 24.9) 
        {results.innerHTML = ` your weight is ${bmi} and  you are over weight`
        
    }
}
});
