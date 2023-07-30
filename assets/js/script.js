var body = document.body;
var h1El = document.createElement("h1");
var infoDiv = document.createElement("div");
var infoTextDiv = document.createElement("div");
var btnDiv = document.createElement("div");
var startBtn = document.createElement("button");

h1El.textContent = "Coding Quiz Challenge";
infoTextDiv.textContent = "Answer the following questions related to JavaScript within the time limit. Every wrong answer will deduct 10 seconds from your time. Good luck!";
startBtn.textContent = "Start Quiz";

body.appendChild(h1El);
body.appendChild(infoDiv);
infoDiv.appendChild(infoTextDiv);
infoTextDiv.appendChild(btnDiv);
btnDiv.appendChild(startBtn);

h1El.setAttribute("style", "text-align:center; font-weight:bolder;");
infoTextDiv.setAttribute("style", "font-size:20px; text-align:center;");
startBtn.setAttribute("style", "margin-top:40px;");
// var questions = [
//     {
//         question: "question 1",
//         answers: {
//             a: "",
//             b: "",
//             c: "",
//             d: ""
//         },
//         correct: ""
//     },
//     {
//         question: "question 2",
//         answers: {
//             a: "",
//             b: "",
//             c: "",
//             d: ""
//         },
//         correct: ""
//     },
//     {
//         question: "question 3",
//         answers: {
//             a: "",
//             b: "",
//             c: "",
//             d: ""
//         },
//         correct: ""
//     },
//     {
//         question: "question 4",
//         answers: {
//             a: "",
//             b: "",
//             c: "",
//             d: ""
//         },
//         correct: ""
//     },
//     {
//         question: "question 5",
//         answers: {
//             a: "",
//             b: "",
//             c: "",
//             d: ""
//         },
//         correct: ""
//     },
// ]
// var score = 0;

// for (var i = 0; i < questions.length; i++) {
//     var userAnswer = //code here
//     if (userAnswer === questions[i].correct) {
//         score++;
//     }
// }
