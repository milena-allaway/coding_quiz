var questions = [
    {
        question: "question 1",
        answers: {
            a: "",
            b: "",
            c: "",
            d: ""
        },
        correct: ""
    },
    {
        question: "question 2",
        answers: {
            a: "",
            b: "",
            c: "",
            d: ""
        },
        correct: ""
    },
    {
        question: "question 3",
        answers: {
            a: "",
            b: "",
            c: "",
            d: ""
        },
        correct: ""
    },
    {
        question: "question 4",
        answers: {
            a: "",
            b: "",
            c: "",
            d: ""
        },
        correct: ""
    },
    {
        question: "question 5",
        answers: {
            a: "",
            b: "",
            c: "",
            d: ""
        },
        correct: ""
    },
]
var score = 0;

for (var i = 0; i < questions.length; i++) {
    var userAnswer = //code here
    if (userAnswer === questions[i].correct) {
        score++;
    }
}
