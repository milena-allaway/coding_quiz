//Create elements for quiz
var body = document.body;
var section = document.createElement("section");
var h1El = document.createElement("h1");
var infoDiv = document.createElement("div");
var infoTextDiv = document.createElement("div");
var btnDiv = document.createElement("div");
var startBtn = document.createElement("button");
var quizDiv = document.getElementById("quiz");
var resultEl = document.createElement("div");
var result = document.createElement("p");
var timerEl = document.getElementById("timer");
var viewHs = document.getElementById("highscore");
var secondsLeft = 60;
var questionIndex = 0;
var quizTimer;
var save = document.getElementById("saveInfo");
var saveScoreBtn = document.getElementById("saveScoreBtn");
var userScore;
var userInitialsInput = document.getElementById("initials");
var showScores;

var questions = [
    {
    question: "Which of the following is NOT a DATATYPE?",
    answers: ["String", "Object", "Number","Array"],
    correct: "Array"
    },
    
    {
    question: "Arrays are written incased in _______?",
    answers: ["Double quotations","Square brackets","Curly brackets","Round brackets"],
    correct: "Square brackets"
    },
    {
    question: "What is 'NaN' in JavaScript?",
    answers: ["Not a Name", "Not a Node", "Not a Number", "A delicious type of pita-like bread"],
    correct: "Not a Number"
    },
    {
    question: "What are the two 'scopes' of a variable?",
    answers: ["Inner and outer", "Global and inner","Local and global", "Outer and local"], 
    correct: "Local and global"
    },
    {
    question: "What method joins two or more strings?",
    answers: ["Concat()", "Pop()", "Splice()", "Push()"],
    correct: "Concat()"
}];

// add text to intro heading, info, and button
h1El.textContent = "Coding Quiz Challenge";
infoTextDiv.textContent = "Answer the following questions related to JavaScript within the time limit. Every wrong answer will deduct 10 seconds from your time. Good luck!";
startBtn.textContent = "Start Quiz";
//append to document
body.appendChild(section);
section.appendChild(h1El);
section.appendChild(infoDiv);
infoDiv.appendChild(infoTextDiv);
infoTextDiv.appendChild(btnDiv);
btnDiv.appendChild(startBtn);

//add some flare
h1El.setAttribute("style", "text-align:center; font-weight:bolder;");
infoTextDiv.setAttribute("style", "font-size:20px; text-align:center;");
startBtn.setAttribute("style", "margin-top:40px; width:200px; text-align:center; display:inline;");
resultEl.setAttribute("style", "width:50%;");
result.setAttribute("style", "font-style:oblique; font-size:25px; border-top: 2px solid #108c44; padding: 10px; color:#108c44;");

//function to start the timer
function startTimer() {
    quizTimer = setInterval(function() {
    secondsLeft--;
    if(secondsLeft > 0) {
        timerEl.textContent = "Time: " + secondsLeft;
    } else if(secondsLeft <= 0) {
        timerEl.textContent = "Time is up!";
        clearInterval(quizTimer);
        finish();
    } else {
        timerEl.textContent = "Time is up!";
        clearInterval(quizTimer);
        finish();
    };  
}, 1000);
};

// Activate question section when "Start Quiz" is clicked
startBtn.addEventListener('click', function() {
    startTimer();
    section.textContent = "";
    quizDiv.classList.remove("hidden");
    quizDiv.setAttribute('style', 'align-text:left; margin-left: 25%');

    //Start questions
    showNextQuestion();
});
    
function showNextQuestion() {
    //clear quiz intro section
    quizDiv.innerHTML = "";
    //bring back the timer
    body.appendChild(timerEl);
    body.appendChild(viewHs);
    //body.setAttribute('style', 'margin-left: 25%');

    //set up questions area - tutor helped with this part
    if (questionIndex < questions.length) {
        var questionInsert = questions[questionIndex];
        var text = document.createElement("h1");
        text.textContent = questionInsert.question;
        body.appendChild(quizDiv);
        quizDiv.appendChild(text);
        //set up answer buttons
        for (var i = 0; i < questionInsert.answers.length; i++) {
            var answerBtn = document.createElement("button");
            body.appendChild(quizDiv);
            quizDiv.appendChild(answerBtn);
            answerBtn.textContent = questionInsert.answers[i];    
    
            //event listener for answer buttons  - tutor helped with this part
            answerBtn.addEventListener("click", function (event) {
                var userAnswer = event.target.textContent;
                if (userAnswer === questionInsert.correct) {
                result.textContent = "Correct!";
                } else if (questionIndex >= questions.length) {
                    clearInterval(quizTimer);
                    finish ();
                } else {
                    result.textContent = "Wrong!";
                    secondsLeft -= 10;
                };
                    //cyle to next question
                    questionIndex ++;
                    showNextQuestion();
            });
                    

        };
    } else {
        finish();
    };
    body.appendChild(resultEl);
    resultEl.appendChild(result);
    resultEl.setAttribute('style', 'margin-left:25%; width:50%');
};

function finish () {
    body.appendChild(viewHs);
    clearInterval(quizTimer);
    body.appendChild(save);
    save.classList.remove("hidden");
    save.setAttribute('style', 'text-align: center');
    resultEl.innerHTML = "";
    result.textContent = "Your score is " + secondsLeft;
    timerEl.textContent = "Time: " + secondsLeft;
};

function saveUserInfo () {
    userScore = {
        Score: secondsLeft,
        Initials: userInitialsInput.value.trim()
    }

    localStorage.setItem("userScore", JSON.stringify(userScore));
}

saveScoreBtn.addEventListener("click", function(event) {
    event.preventDefault();
    saveUserInfo();
    
});

function getHighScores () {
    showScores = JSON.parse(localStorage.getItem('userScore'));
}

//     //Start questions
// showNextQuestion();

// function showNextQuestion() {
//     var questionInsert = questions[questionIndex];
//     var text = document.createElement("h1");
//     text.textContent = questionInsert.question;
//     body.appendChild(text);
// };

// //Show next question/finish quiz
                // questionIndex++;
                // if (questionIndex < questions.length) {
                //     showNextQuestion();
                // } else {
                // finish();
                // };
// function finish () {
//     answerBtn.setAttribute("style", "display: none");
//     text.setAttribute("style", "display:none");
//     var save = document.getElementById("saveInfo");
//     save.classList.remove("hidden");
//     body.appendChild(save);
// };

// testing for questions display
    // var questions = [
    //     "Which of the following is NOT a DATATYPE?", 
    //     "Arrays are written incased in _______?",
    //     "What is 'NaN' in JavaScript?",
    //     "What are the two 'scopes' of a variable?",
    //     "What method joins two or more strings?"
    // ];
    //     for (var i = 0; i < questions.length; i++) {
    //         console.log(questions[i]);
    //         var test= document.createElement("h1");
    //         test.textContent = questions[i];
    //         body.appendChild(test);
    //     };
