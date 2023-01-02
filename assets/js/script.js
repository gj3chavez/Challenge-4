var introSection = document.getElementById("#intro-section");
var startButton = document.getElementById("#start");
var questionsSection = document.getElementById("#the-questions");
var optionsList = document.getElementById("ul");
var finishSection = document.getElementById("#finish");
var finalScore = document.getElementById("#final-score");
var scoreForm = document.getElementById("#initials");
var highScoreList = document.getElementById("#highscore-list");
var goBackButton = document.getElementById("#go-back");
var clearHSButton = document.getElementById("#clear-hs");
var feedback = document.getElementById("#feedback");
var timer = document.querySelector("#time");

var score = 0;
var currentQuestion = 1;
var timeLeft = 60;
var timer = document.querySelector(".timer");


function setTimer(){

    var timerInterval = setInterval(function){
        secondsLeft--;
        timeLeft.textContent = "Time:"+ "s";

        if (secondsLeft <= 0){
            clearInterval(timerInterval);
            timeLeft.textContent= "All done!";
        }

        else if(currentQuestion >= questions.length +1){
            clearInterval(timerInterval);
        }

    
    }, 1000);

}

//-------------------Questions---------------------------------
var questions =[
    {
        question: "Commonly used data types DO NOT Include:",
        options: ["a.booleans", "b.strings", "c.numbers", "d.alerts"],
        answer: "d"
}
    {
        question: "The condition in an if/else statement is enclosed within____.",
        options: ["a.quotes", "b.curly brackets", "c.parenthesis", "d.square backets"],
        answer: "b"

}
    {
        question: "Arrays in JavaScript can be used to store:",
        options: ["a.booleans", "b.numbers and strings", "c.other arrays", "d.all of the avobe"],
        answer: "d"
    }
    {
        question: "String values must be enclosed within_____ when being assigned to variables.",
        options: ["a.commas", "b.curly brackets", "c.quotes", "d.parenthesis"],
        answer: "c"
    }
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        options: ["a.JavaScript", "b.terminal/bash", "c.for loops", "d.console.log"],
        answer: "d"
    }
]

var setTime = function(){
    timeLeft = 60;

var timerchek = setInterval(function(){

})
}


startButton.onclick = startQuiz;
scoreForm.onclick = onkeyup = checkForEnter;
highScoreList.onclick = saveHighscore;
