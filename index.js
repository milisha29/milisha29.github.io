console.log('Javascript file for quiz app');
let startBtn = document.getElementById('start');
let infoBox = document.getElementById('info-box');
let divstart = document.getElementById("start-btn");
let quitButton = document.getElementById('quit');
let restart = document.getElementById('restart');
let heading = document.getElementById('heading');
let input = document.getElementById('name');
let info_title = document.querySelector('.info-title');
startBtn.addEventListener('click', starting);




function starting() {
    sessionStorage.clear();
    sessionStorage.setItem("name", input.value);
    divstart.style.visibility = "hidden";
    heading.style.visibility = "hidden";
    input.style.visibility = "hidden";
    info_title.innerHTML = `<span>Welcome <small id="message">${sessionStorage.getItem("name")}</small> <br>
    Have a look on Rules for the Quiz</span>`;
    infoBox.style.visibility = "visible";
}

quitButton.addEventListener('click', () => {
    divstart.style.visibility = "visible";
    heading.style.visibility = "visible";
    input.style.visibility = "visible";

    infoBox.style.visibility = "hidden";
})

function restarting() {
    location.href = "quiz.html";
}
