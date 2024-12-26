

function navbar(){

    let navbar = document.getElementById("nav")
    let card = `<div id="navlinks">
    <a href="index.html">Home</a>
    <a href="quiz.html">Quiz</a>
    <a href="questions.html">Questions</a>
    </div>`

    navbar.innerHTML = card
    }

    navbar();