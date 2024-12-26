
import { url } from "./baseurl.js";

let form = document.getElementById("form")

form.addEventListener("submit", async () =>{
    event.preventDefault();
    
    try{
        let res = await fetch(url);
        let data = await res.json();
        console.log(data);
        
    }catch(err){
        console.log(err);
    }
    
})