//all variables/elements  for quiz
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
var highScoreDiv = document.getElementById("hsPage");
var scoreList = document.getElementById("scoreList");
var questionIndex = 0;
var secondsLeft = 60;
var quizTimer= null;
var save = document.getElementById("saveInfo");
var saveScoreBtn = document.getElementById("saveScoreBtn");
var userInitialsInput = document.getElementById("initials");
var showScores= null;
var savedScores = [];

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
    quizTimer = setInterval(countdown, 1000);
    function countdown(){
        secondsLeft--;
        if(secondsLeft > 0) {
            timerEl.textContent = "Time: " + secondsLeft;
        } else if(secondsLeft <= 0) {
            clearTimeout(quizTimer);
            timerEl.textContent = "Time is up!";
            finish();
        };
    };
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
    //bring back the timer + view highscore
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
                } else if (questionIndex >= questions.length - 1) {
                    clearTimeout(quizTimer);
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
    quizDiv.innerHTML = "";
    body.appendChild(viewHs);
    body.appendChild(save);
    save.classList.remove("hidden");
    save.setAttribute('style', 'text-align: center');
    resultEl.innerHTML = "";
    result.textContent = "Your score is " + secondsLeft;
    timerEl.textContent = "Time: " + secondsLeft;
};

function saveUserInfo () {
    var userScore = {
        Score: secondsLeft,
        Initials: userInitialsInput.value.trim()
    };
    //add userScore to saved array
    savedScores.push(userScore);
    //add to local storage - got help from my classmate 'Wes' on how to store multiple scores.
    localStorage.setItem("userScores", JSON.stringify(savedScores));
};

saveScoreBtn.addEventListener("click", function(event) {
    event.preventDefault();
    saveUserInfo();
    goToScorePage();
    
});

function goToScorePage() {
    // clearInterval(quizTimer);
    body.innerHTML = "";
    getHighScores();
    body.appendChild(highScoreDiv);
    highScoreDiv.classList.remove("hidden");
    highScoreDiv.appendChild(scoreList);
    scoreList.textContent = savedScores.length;
    for (var i = 0; i < savedScores.length; i++) {
        userScore = savedScores[i];

        var li = document.createElement("li");
        li.textContent = userScore.Initials + ": " + userScore.Score;
        scoreList.appendChild(li);
    }
};

function getHighScores () {
    savedScores = JSON.parse(localStorage.getItem('userScores'));
};
// function clearScores () {
//      localStorage.removeItem("userScores");
//  };




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
