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
let email = form.email.value;
let password = form.password.value;

form.addEventListener("submit", async () =>{

try{
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);

    data.filter((el) => {

        if(el.users.Email == email && el.users.Password == password)
        alert("Login Success, you are redirecting to quiz page")
        window.location.href = "quiz.html"
    })

}catch(err){
    console.log(err);
    alert("Something went wrong!")
}

})



