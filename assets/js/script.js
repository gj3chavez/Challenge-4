var introSection = document.getElementById("introSection");
var startBtn = document.querySelector("#startBtn");
var questionsSection = document.getElementById("theQuestions");
//var optionsList = document.getElementById("ul");
var finishSection = document.getElementById("#the-end");
var finalScore = document.getElementById("final-score");
var scoreForm = document.getElementById("initials");
var highScoreList = document.getElementById("highscoreList");
var goBackButton = document.getElementById("go-back");
var clearHSButton = document.getElementById("clear-hs");
var feedbackEl = document.getElementById("feedback");
var questionEl = document.querySelector("#question");


//-------------------Questions---------------------------------
var questions =[
    {
        question: "Commonly used data types DO NOT Include:",
        options: ["a.booleans", "b.strings", "c.numbers", "d.alerts"],
        correctAnswer: "d.alerts"
},
    {
        question: "The condition in an if/else statement is enclosed within____.",
        options: ["a.quotes", "b.curly brackets", "c.parenthesis", "d.square backets"],
        correctAnswer: "b.curly brackets"

},
    {
        question: "Arrays in JavaScript can be used to store:",
        options: ["a.booleans", "b.numbers and strings", "c.other arrays", "d.all of the avobe"],
        correctAnswer: "d.all of the avobe"
    },
    {
        question: "String values must be enclosed within_____ when being assigned to variables.",
        options: ["a.commas", "b.curly brackets", "c.quotes", "d.parenthesis"],
        correctAnswer: "c.quotes"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        options: ["a.JavaScript", "b.terminal/bash", "c.for loops", "d.console.log"],
        correctAnswer: "d.console.log"
    },
]
startBtn.addEventListener("click", function(){
    // document.getElementById("time").style.display = "flex";
    document.getElementById("introSection").style.display = "none";
    document.getElementById("theQuestions").style.display = "none";
   
    // setTimer();
    // displayQuestion()
})
//-------------start timer------------
var timerEl = document.querySelector(".timer");
var timeEl = document.getElementById("time")
var secondsLeft = 30;

var currentQuestion = 0;
// function setTimer(){
var timerInterval = setInterval(function(){
        secondsLeft--;
        timerEl.textContent =secondsLeft =
        + "Time" ;
         
        if (secondsLeft<= 0){
            clearInterval();
            // timer.textContent="All Done!"
            endQuiz();
        }else (questionEl>= questions.length + 1){
            clearInterval(timerInterval);
            endQuiz();
        }
    },1000);

    
 
// let currentQuestion = 0;
//---display first question-----
//displayQuestion();




function displayQuestion(){
    //---get current question and its answers---
    var { question, options, correctAnswer} =
questions[currentQuestion];

document.getElementById('theQuestions').style.display = "block"
document.getElementById('finish').style.display = "none";

    questionEl.textContent = question;

    options.forEach(function(data,key){
        console.log("The key is "+ key)
        var btn = document.querySelector(`#btnAnswer${key+1}`);
        console.log (document.querySelector(`#btnAnswer${key+1}`))
        btn.textContent = options[key];

        btn.addEventListener("click", function(){
            console.log(key)
            checkAnswer(key);
        });
    });
}


//----------feedback section-----------------

function checkAnswer(userAnswer){
    var correctAnswer =
questions[currentQuestion].correctAnswer;

if (userAnswer=== correctAnswer){
   feedbackEl.textContent = "Correct!";
    score++;
}
else {
    feedbackEl.textContent = "Wrong!";
    timer-=10;
}

currentQuestion++;
if (currentQuestion=== questions.length){
    endQuiz();
}
else{
    displayQuestion();
}
}

function endQuiz(){

    document.getElementById("finish").classList.remove("hide");

    document.getElementById("final-score").textContent = "Your final score is ${score}";
}


