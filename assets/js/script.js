//Create elements for quiz intro
var body = document.body;
var h1El = document.createElement("h1");
var infoDiv = document.createElement("div");
var infoTextDiv = document.createElement("div");
var btnDiv = document.createElement("div");
var startBtn = document.createElement("button");
//add text to intro heading, info, and bubtton
h1El.textContent = "Coding Quiz Challenge";
infoTextDiv.textContent = "Answer the following questions related to JavaScript within the time limit. Every wrong answer will deduct 10 seconds from your time. Good luck!";
startBtn.textContent = "Start Quiz";
//append to document
body.appendChild(h1El);
body.appendChild(infoDiv);
infoDiv.appendChild(infoTextDiv);
infoTextDiv.appendChild(btnDiv);
btnDiv.appendChild(startBtn);
//add some flare
h1El.setAttribute("style", "text-align:center; font-weight:bolder;");
infoTextDiv.setAttribute("style", "font-size:20px; text-align:center;");
startBtn.setAttribute("style", "margin-top:40px; display:inline;");

// Activate question section when "Start Quiz" is clicked
startBtn.addEventListener('click', function() {
    var answerBtnDiv = document.createElement("div");
    var answerBtn1 = document.createElement("button");
    var answerBtn2 = document.createElement("button");
    var answerBtn3 = document.createElement("button");
    var answerBtn4 = document.createElement("button");
    //Asks the question
    h1El.textContent = "question";
    //replace quiz info with button section
    body.removeChild(infoDiv);
    body.appendChild(answerBtnDiv);
    //add answer buttons
    answerBtnDiv.appendChild(answerBtn1);
    answerBtnDiv.appendChild(answerBtn2);
    answerBtnDiv.appendChild(answerBtn3);
    answerBtnDiv.appendChild(answerBtn4);
    //move buttons 25% away from left margin
    answerBtnDiv.setAttribute("style", "margin-left:25%;");

    

});   
//array of questions and their answers
    var questions = [
    {
        question: "Which of the following is NOT a DATATYPE?",
        answers: {
            a: "String",
            b: "Object",
            c: "Number",
            d: "Array"
        },
        correct: "Array"
    },
    {
        question: "Arrays are written incased in _______?",
        answers: {
            a: "Double quotations",
            b: "Square brackets",
            c: "Curly brackets",
            d: "Round brackets"
        },
        correct: "Square brackets"
    },
    {
        question: "What is 'NaN' in JavaScript?",
        answers: {
            a: "Not a Name",
            b: "Not a Node",
            c: "Not a Number",
            d: "A type of pita-like bread"
        },
        correct: "Not a Number"
    },
    {
        question: "What are the two 'scopes' of a variable?",
        answers: {
            a: "Inner and outer",
            b: "Global and inner",
            c: "Local and global",
            d: "Outer and local"
        },
        correct: "Local and global"
    },
    {
        question: "what method joins two or more strings?",
        answers: {
            a: "Concat()",
            b: "Pop()",
            c: "Splice()",
            d: "Push()"
        },
        correct: "Concat()"
    },
    ]
    var score = 0;

// for (var i = 0; i < questions.length; i++) {
//     var userAnswer = //do some magic here with 'questions.answer'
//     if (userAnswer === questions[i].correct) {
//         score++;
//     }
// }
