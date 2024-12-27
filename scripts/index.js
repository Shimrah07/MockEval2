// <!-- 1. index.html (Login Page)
// Contains a login form with:
// Two input fields: Email and Password
// Upon form submission:
// Validate the credentials:
// Email: empher@gmail.com
// Password: empher@123
// If credentials are correct:
// Display an alert: "Login Success, you are redirecting to quiz page".

// Redirect the user to quiz.html using window.location.href.
// If credentials are incorrect, display an appropriate error message. -->


import { url } from "./baseurl.js";

let form = document.getElementById("form")

form.addEventListener("submit", async (event) =>{
event.preventDefault();

let email = form.email.value;
let password = form.password.value;

try{
    let res = await fetch(`${url}/users`);
    let data = await res.json();
    console.log(data);

    data.forEach((el) => {
        if(el.email == email && el.password == password){
            alert("Login Success, you are redirecting to quiz page")
            window.location.href = "quiz.html"
        }
        else{
            alert("User not registered!");
        }
    })
        

}catch(err){
    console.log(err);
    alert("Something went wrong!")
}

})



