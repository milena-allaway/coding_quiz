//Create elements for quiz
var body = document.body;
var h1El = document.createElement("h1");
var infoDiv = document.createElement("div");
var infoTextDiv = document.createElement("div");
var btnDiv = document.createElement("div");
var startBtn = document.createElement("button");
var resultEl = document.createElement("div");
var result = document.createElement("p");
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
startBtn.setAttribute("style", "margin-top:40px; width:200px; text-align:center; display:inline;");

// Activate question section when "Start Quiz" is clicked
startBtn.addEventListener('click', function() {
    var answerBtnDiv = document.createElement("div");
    var answerBtn1 = document.createElement("button");
    var answerBtn2 = document.createElement("button");
    var answerBtn3 = document.createElement("button");
    var answerBtn4 = document.createElement("button");
   //replace quiz info with button section
    body.removeChild(infoDiv);
    body.appendChild(answerBtnDiv);
    // add answer buttons
    answerBtnDiv.appendChild(answerBtn1);
    answerBtnDiv.appendChild(answerBtn2);
    answerBtnDiv.appendChild(answerBtn3);
    answerBtnDiv.appendChild(answerBtn4);
    //move buttons 25% away from left margin
    answerBtnDiv.setAttribute("style", "margin-left:25%;");
    
    //question 1
    h1El.textContent = "Which of the following is NOT a DATATYPE?";
    // //add answers to buttons
    answerBtn1.textContent = "String";
    answerBtn2.textContent = "Object";
    answerBtn3.textContent = "Number";
    answerBtn4.textContent = "Array"; //correct answer

    //add event for when answer is clicked, start keeping score
    answerBtnDiv.addEventListener('click', function(event) {
        var score = 0
        var target = event.target;
        //add and style result area
        body.appendChild(resultEl);
        resultEl.appendChild(result);
        resultEl.setAttribute("style", "width:50%; margin-left:25%;");
        result.setAttribute("style", "font-style:oblique; font-size:25px; border-top: 2px solid #108c44; padding: 10px; color:#108c44;");
        //if correct answer add 1 to score
        if (target === answerBtn4) {
        result.textContent = "Correct";
        score++;
        } else {
            result.textContent = "Wrong";
        };

        //question 2
        h1El.textContent = "Arrays are written incased in _______?"
        //answers
        answerBtn1.textContent = "Double quotations";
        answerBtn2.textContent = "Square brackets"; //correct answer
        answerBtn3.textContent = "Curly brackets";
        answerBtn4.textContent = "Round brackets";

        answerBtnDiv.addEventListener('click', function(event) {
            var target = event.target;

            if (target === answerBtn2) {
                result.textContent = "Correct";
                score++;
                } else {
                result.textContent = "Wrong";
            };

                //question 3"
                h1El.textContent = "What is 'NaN' in JavaScript?"
                //answers
                answerBtn1.textContent = "Not a Name";
                answerBtn2.textContent = "Not a Node"; 
                answerBtn3.textContent = "Not a Number"; //correct answer
                answerBtn4.textContent = "A delicous pita-like bread";

                answerBtnDiv.addEventListener('click', function(event) {
                    var target = event.target;

                    if (target === answerBtn3) {
                    result.textContent = "Correct";
                    score++;
                    } else {
                    result.textContent = "Wrong";
                    };

                    //question 4"
                    h1El.textContent = "What are the two 'scopes' of a variable?"
                    //answers
                    answerBtn1.textContent = "Inner and outer";
                    answerBtn2.textContent = "Global and inner"; 
                    answerBtn3.textContent = "Local and global"; //correct answer
                    answerBtn4.textContent = "Outer and local";

                    answerBtnDiv.addEventListener('click', function(event) {
                        var target = event.target;

                        if (target === answerBtn3) {
                        result.textContent = "Correct";
                        score++;
                        } else {
                        result.textContent = "Wrong";
                    };

                        //question 5
                        h1El.textContent = "What method joins two or more strings?"
                        //answers
                        answerBtn1.textContent = "Concat()"; //correct answer
                        answerBtn2.textContent = "Pop()"; 
                        answerBtn3.textContent = "Push()";
                        answerBtn4.textContent = "Splice()";

                        answerBtnDiv.addEventListener('click', function(event) {
                            var target = event.target;

                            if (target === answerBtn1) {
                            result.textContent = "Correct";
                            score++;
                            } else {
                            result.textContent = "Wrong";
                         };
                    });
                });

            });
        });
    });
    
    



});
    // var questions = [
    //     "Which of the following is NOT a DATATYPE?", 
    //     "Arrays are written incased in _______?",
    //     "What is 'NaN' in JavaScript?",
    //     "What are the two 'scopes' of a variable?",
    //     "What method joins two or more strings?"
    // ];
    //     for (var i = 0; i < questions.length; i++) {
    //         document.getElementById("h1").innerHTML = "<h1>" + questions[i] + "</h>";
    //     };



   
    //array of questions and their answers
    // var questions = [
    // {
    //     question: "Which of the following is NOT a DATATYPE?",
    //     answers: {
    //         a: "String",
    //         b: "Object",
    //         c: "Number",
    //         d: "Array"
    //     },
    //     correct: "d"
    // },
    // {
    //     question: "Arrays are written incased in _______?",
    //     answers: {
    //         a: "Double quotations",
    //         b: "Square brackets",
    //         c: "Curly brackets",
    //         d: "Round brackets"
    //     },
    //     correct: "b"
    // },
    // {
    //     question: "What is 'NaN' in JavaScript?",
    //     answers: {
    //         a: "Not a Name",
    //         b: "Not a Node",
    //         c: "Not a Number",
    //         d: "A type of pita-like bread"
    //     },
    //     correct: "c"
    // },
    // {
    //     question: "What are the two 'scopes' of a variable?",
    //     answers: {
    //         a: "Inner and outer",
    //         b: "Global and inner",
    //         c: "Local and global",
    //         d: "Outer and local"
    //     },
    //     correct: "c"
    // },
    // {
    //     question: "what method joins two or more strings?",
    //     answers: {
    //         a: "Concat()",
    //         b: "Pop()",
    //         c: "Splice()",
    //         d: "Push()"
    //     },
    //     correct: "a"
    // },
    // 