// creating an array and passing the number,question,options,and answers
//Source of Questions:javaTpoint
let questions = [
    {
        numb: 1,
        question: "A train moving at speed of 80 km/hr crosses a pole in 7 seconds. Find the length of the train.",
        answer: "175 m",
        options: ["150 m",
            "165 m",
            "175 m",
            "170 m"
        ]
    },
    {
        numb: 2,
        question: "A shopkeeper sold an article for Rs. 2500. If the cost price of the article is 2000, find the profit percent.",
        answer: "25%",
        options: ["23%",
            "25%",
            "27%",
            "29%"
        ]
    },
    {
        numb: 3,
        question: "Difference between a two-digit number and the number obtained by interchanging the two digits is 36, what is the difference between two numbers",
        answer: "4",
        options: ["2",
            "4",
            "8",
            "12"
        ]
    },
    {
        numb: 4,
        question: "Pointing to a photograph of a boy Suresh said, 'He is the son of the only son of my mother'. How is Suresh related to that boy?",
        answer: "Father",
        options: ["Brother",
            "Uncle",
            "Cousin",
            "Father"
        ]
    },
    {
        numb: 5,
        question: "Ten years ago, P was half of Q's age. If the ratio of their present ages is 3:4, what will be the total of their present ages?",
        answer: "35",
        options: ["30",
            "45",
            "35",
            "40"
        ]
    },
    {
        numb: 6,
        question: "Two numbers are in the ratio of 2:9. If their H. C. F. is 19, numbers are:",
        answer: "38,171",
        options: ["6,27",
            "8,36",
            "38,171",
            "20,90"
        ]
    },
    {
        numb: 7,
        question: "Today is Monday. After 61 days, it will be:",
        answer: "Saturday",
        options: ["Monday",
            "Saturday",
            "Sunday",
            "Tuesday"
        ]
    },
    {
        numb: 8,
        question: "John earns 33.33% more than Peter. By what percentage is Peter's earning less than that of John's?",
        answer: "25%",
        options: ["22%",
            "25%",
            "26%",
            "23%"
        ]
    }

];
//Getting required Elements
let userScore = 0;
let timeValue = 15;
let ques_count = 0;
let counter;
const next_btn = document.querySelector(`.next`);
const quiz_box = document.querySelector(".quiz-box");
const result_box = document.querySelector(".result-box");
let option_list = document.querySelector(`.option-list`);
const alloptions = option_list.children.length;
let quitButton = document.querySelector('.quit');
let replay = document.querySelector('.restart');
const scoreBoard = document.querySelector('.score');
let timeCount = document.querySelector(".timer-sec");
showQuestions(0);
startTimer(15);



//IF NEXT BUTTON IS CLICKED
next_btn.onclick = () => {
    ques_count++;
    if (ques_count < questions.length) {
        showQuestions(ques_count);
        clearInterval(counter);
        startTimer(timeValue);
    }
    else {
        console.log('questions completed');
        //once the ques gets completed clicking the next button should go to result
        showResultBox();
    }
}

//getting questions and options from array
function showQuestions(index) {
    console.log('inside show questions function');
    let ques_text = document.querySelector(`.ques-text`);
    // let option_list = document.querySelector(`.option-list`);
    let ques_tag = '<span>' + questions[index].question + '</span>';
    let option_tag = `<div class="option"><span>${questions[index].options[0]}</span></div>` + `<div class="option"> <span>${questions[index].options[1]}</span></div>` +
        `<div class="option"><span>${questions[index].options[2]}</span></div>` +
        `<div class="option"><span>${questions[index].options[3]}</span></div>`;
    ques_text.innerHTML = ques_tag;
    option_list.innerHTML = option_tag;

    //getting the total-ques class
    let total_ques = document.querySelector(`.total-ques`);
    let numb_tag = ` <span>
    <p id="numb">${questions[index].numb}</p>of <p>${questions.length} </p>Questions
</span>`;
    total_ques.innerHTML = numb_tag;

    //setting atrribute to all options
    let options = document.querySelectorAll(".option");

    for (let i = 0; i < options.length; i++) {
        options[i].setAttribute("onclick", "optionselected(this)");
    }
    //making display of next button as none 
    next_btn.style.display = "none";
}

let tickicon = `<div class="icon tick"><i class="fas fa-check"></i></div>`;
let crossicon = `<div class="icon cross"><i class="fas fa-times"></i></div>`;

function optionselected(selected) {
    let options = document.querySelectorAll(".option");
    clearInterval(counter);//to stop the timer as soon as user selected the option
    next_btn.style.display = "block";//as user selected the option enabling the next button
    let userSelect = selected.innerText;
    const correctAns = questions[ques_count].answer;
    console.log("correct ans is", correctAns);
    const alloptions = option_list.children.length;
    if (userSelect == correctAns) {
        ++userScore;
        console.log("userscore is", userScore)
        selected.classList.add("correct");
        console.log('Your Answer is absolutely correct!');
        selected.insertAdjacentHTML("beforeend", tickicon);
    }
    else {
        selected.classList.add("wrong");
        console.log("Oops!You selected wrong answer.");
        selected.insertAdjacentHTML("beforeend", crossicon);

        //If answer is incorrect then automatically select correct ans


        for (let i = 0; i < options.length; i++) {
            console.log(options[i].innerText)
            if (options[i].innerText == correctAns) {
                console.log("correct option found and automatically making it green");
                options[i].classList.add("correct");
                options[i].insertAdjacentHTML("beforeend", tickicon);
            }
        }


    }
    // console.log(userSelect);
    //disabling options once user selected any option
    for (let i = 0; i < options.length; i++) {
        options[i].classList.add("disabled");
    }
}

//Timer
function startTimer(time) {
    let timeCount = document.querySelector(".timer-sec");
    let options = document.querySelectorAll(".option");

    counter = setInterval(timer, 1000);
    function timer() {
        const correctAns = questions[ques_count].answer;
        if (time == 00) {
            clearInterval(counter);
            for (let i = 0; i < options.length; i++) {
                console.log(options[i]);
                options[i].classList.add("disabled");
            }
            for (let i = 0; i < alloptions; i++) {
                if (option_list.children[i].innerText == correctAns) {
                    console.log("correct option found and automatically making it green");
                    option_list.children[i].setAttribute("class", "option correct");
                    option_list.children[i].insertAdjacentHTML("beforeend", tickicon);
                }
            }
            next_btn.style.display = "block";
        }
        if (time < 9) {
            timeCount.innerText = '0' + time;
        }
        else { timeCount.innerText = time; }
        time--;
    }
}
function showResultBox() {
    result_box.style.visibility = "visible";
    quiz_box.style.display = "none";
    //Changing scoreboard
    if (userScore >= questions.length - 1) {
        scoreBoard.innerHTML = `<span>You are incredible!,You have got <p>${userScore}</p>out of <p>${questions.length}</p></span>`
    }
    else if (userScore < questions.length - 1 && userScore >= 5) {
        scoreBoard.innerHTML = `<span>Congrats!You have got <p>${userScore}</p>out of <p>${questions.length}</p></span>`
    }
    else {
        scoreBoard.innerHTML = `<span>You have got only <p>${userScore}</p>out of <p>${questions.length}</p>Try harder</span>`
    }
}

//replay button
replay.onclick = () => {
    window.location.reload();
}
//quitButton
quitButton.onclick = () => {
    location.href = "index.html";
}