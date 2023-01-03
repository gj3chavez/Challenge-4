var introSection = document.getElementById("#intro-section");
var startBtn = document.querySelector("#start");
var questionsSection = document.getElementById("#the-questions");
//var optionsList = document.getElementById("ul");
var finishSection = document.getElementById("#finish");
var finalScore = document.getElementById("#final-score");
var scoreForm = document.getElementById("#initials");
var highScoreList = document.getElementById("#highscore-list");
var goBackButton = document.getElementById("#go-back");
var clearHSButton = document.getElementById("#clear-hs");
var feedback = document.getElementById("#feedback");
var timer = document.querySelector("#time");


//-------------------Questions---------------------------------
var questions =[
    {
        question: "Commonly used data types DO NOT Include:",
        options: {"a.booleans", "b.strings", "c.numbers", "d.alerts"},
        correctAnswer: "d"
}
    {
        question: "The condition in an if/else statement is enclosed within____.",
        options: {"a.quotes", "b.curly brackets", "c.parenthesis", "d.square backets"},
        correctAnswer: "b"

}
    {
        question: "Arrays in JavaScript can be used to store:",
        options: {"a.booleans", "b.numbers and strings", "c.other arrays", "d.all of the avobe"},
        correctAnswer: "d"
    }
    {
        question: "String values must be enclosed within_____ when being assigned to variables.",
        options: {"a.commas", "b.curly brackets", "c.quotes", "d.parenthesis"},
        correctAnswer: "c"
    }
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        options: {"a.JavaScript", "b.terminal/bash", "c.for loops", "d.console.log"},
        correctAnswer: "d"
    }
]
startBtn.addEventListener("click", function(){
    document.getElementById("time").style.display = "flex";
    document.getElementById("intro-section").style.display = "none";
    document.getElementById("the-questions").style.display = "flex";
    setTimer();
})
//-------------start timer------------

var timeLeft = 60;
var timer = document.querySelector(".time");

function setTimer(){

} timerInterval = setInterval(function(){
    timeLeft--;
    timer.textContent = timeLef;
     
    if (timer<= 0){
        endQuiz();
    }
},1000);


//---display first question-----
displayQuestion();



function displayQuestion(){
    //---get current question and its answers---
    var { question, options, correctAnswer} =
questions[currentQuestion];

    questionEl.querySelector("h2").textContent = question;

    Object.keys(options).forEach(function(key){
        var btn = questionEl.querySelector('#btnanswer${key}');
        btn.textContent = options[key];

        btn.addEventListener("click", function(){
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


