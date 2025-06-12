//  Variables = qNumber(null), timer(num), score(num), initials(text)
let timer = 90;
let runningTimer;
let score = 0;
let username = "";
let qNumber;
let finalScore;
const MAX_HIGH_SCORES = 7;

//  DOM Objects = START BUTTON, ANSWER BUTTONS, QUESTION CONTAINER, QUESTION ELEMENT
const startButton = document.getElementById("startButton");
const qContainer = document.getElementById("questionsContainer");
const qElement = document.getElementById("question");
const answerButtons = document.getElementById("answers");
const countdown = document.getElementById("timerArea");
const scoreArea = document.getElementById("scoreArea");
const highScoresButton = document.getElementById("showScoresButton");

// LocalStorage Objects
let highScores = JSON.parse(localStorage.getItem("highScores")) || [];

//  Event listeners.
startButton.addEventListener("click", startGame);
highScoresButton.addEventListener("click", displayScores);


const questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: [
            { text: "javascript", correct: false },
            { text: "script", correct: true },
            { text: "js", correct: false },
            { text: "jQuery", correct: false }
        ]
    },
    {
        question: "Where is the correct place to insert JavaScript?",
        answers: [
            { text: "The Head Section", correct: false },
            { text: "The Body Section", correct: false },
            { text: "In an External File", correct: false },
            { text: "All of the Above", correct: true }
        ]
    },
    {
        question: "The external JavaScript file must contain the script tag.",
        answers: [
            { text: "True", correct: false },
            { text: "False", correct: true }
        ]
    },
    {
        question: 'How do you write "Hello World" in an alert box?',
        answers: [
            { text: 'msg("Hello World");', correct: false },
            { text: 'prompt("Hello World");', correct: false },
            { text: 'alertBox("Hello World");', correct: false },
            { text: 'alert("Hello World");', correct: true }
        ]
    },
    {
        question: "How do you create a function in JavaScript?",
        answers: [
            { text: "function myFunction()", correct: true },
            { text: "function = myFunction()", correct: false },
            { text: "make.function.myFunction()", correct: false },
            { text: "function:myFunction()", correct: false }
        ]
    },
    {
        question: 'How do you call a function named "myFunction"?',
        answers: [
            { text: "call myFunction()", correct: false },
            { text: "read myFunction()", correct: false },
            { text: "myFunction()", correct: true },
            { text: "run.myFunction()", correct: false }
        ]
    },
    {
        question: "How do you write an IF statement in JavaScript?",
        answers: [
            { text: "if (i === 5)", correct: true },
            { text: "if i = 5 then", correct: false },
            { text: "if i === 5 then", correct: false },
            { text: "if (i = 5)", correct: false }
        ]
    },
    {
        question: "!= means what in javascript?",
        answers: [
            { text: "Or", correct: false },
            { text: "And", correct: false },
            { text: "Plus and Equal To", correct: false },
            { text: "Not Equal To", correct: true }
        ]
    },
    {
        question: "What Characters Contains an Array?",
        answers: [
            { text: "< >", correct: false },
            { text: "{ }", correct: false },
            { text: "[ ]", correct: true },
            { text: "# #", correct: false }
        ]
    }
];