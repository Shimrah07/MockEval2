
import { url } from "./baseurl.js";


// Display questions in a grid layout:
// Fetch and display all questions using a GET request.
// Each question should be displayed in a card format with:
// A blue border (for unreviewed questions).

// Two buttons:
// Review Question:
// On click, show a confirmation dialog: "Are you sure to review the question?".
// If confirmed:
// Update the question’s reviewStatus to true using a PATCH request.
// Re-render the UI with the question card border changed to violet.
// Delete Question:
// On click, show a confirmation dialog: "Are you sure to delete?".
// If confirmed:
// Delete the question using a DELETE request.
// Re-render the remaining questions.


let form = document.getElementById("form")

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    let ques = form.ques.value;
    let opA = form.opA.value;
    let opB = form.opB.value;
    let opC = form.opC.value;
    let opD = form.opD.value;
    let mcq = form.mcq.value;

    let obj = { ques, opA, opB, opC, opD, mcq };


    try {
        let res = await fetch((`${url}/questions`), {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(obj)
        });
        alert("Question Created!");
        form.reset();
        



    } catch (err) {
        console.log(err);
    }

})

let showBtn = document.getElementById("showBtn")
showBtn.addEventListener("click", ()=>{

    let ques = form.ques.value;
    let opA = form.opA.value;
    let opB = form.opB.value;
    let opC = form.opC.value;
    let opD = form.opD.value;
    let mcq = form.mcq.value;

    let obj = { ques, opA, opB, opC, opD, mcq };

    fetch(`${url}/questions`)
    .then((res) => res.json())
    .then((data) =>{
        console.log(data)
        displayData(data);

    })
})

function displayData(data) {

    data.forEach((el) =>{

        let div = document.createElement("div");
        div.innerHTML = "";
        div.innerHTML = `<h3>${el.ques}</h3>
        <p>A: ${el.opA}</p>
        <p>B: ${el.opB}</p>
        <p>C: ${el.opC}</p>
        <p>D: ${el.opD}</p>`;
        
        let cont = document.getElementById("cont")
        cont.appendChild(div);
        
    })

}
