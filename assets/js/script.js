var introSection = document.querySelector("#quiz");
var startBtnEl = document.getElementById("startBtn"); startBtnEl.setAttribute('class','hide');
var questionsSection = document.querySelector("#theQuestions");
var quizSection = document.querySelector("#questions");
//var optionsList = document.querySelector("ul");
var initialsSection = document.querySelector("#initials-submit");
var finalScore = document.querySelector("#final-score");
var initialsEl = document.querySelector("initials");
var highScore = document.querySelector("#theScores");
var goBackButton = document.querySelector("#go-back");
// var clearHSButton = document.querySelector("#clear-hs");
var feedbackEl = document.querySelector("feedback");
var questionEl = document.querySelector("#question");
var buttonsEl = document.querySelectorAll('.options');
var answer1El = document.querySelector('#btnAnswer1');
var answer2El = document.querySelector('#btnAnswer2');
var answer3El = document.querySelector('#btnAnswer3');
var answer4El = document.querySelector('#btnAnswer4');
var answer5El = document.querySelector('#btnAnswer5');


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
    // document.querySelector("time").style.display = "flex";
    document.querySelector("introSection").style.display = "none";
    document.querySelector("theQuestions").style.display = "none";
   
    // setTimer();
    // displayQuestion()
})
//-------------start timer------------
var timeEl = document.getElementById("time");

var secondsLeft = 30;
var questionsCount = 1;
var currentQuestion = 0;
// function setTimer(){
var timerInterval = setInterval(function(){
        secondsLeft--;
        timeLeft.textContent = "Time" = secondsLeft + "s";
         
        if (secondsLeft<= 0){
            clearInterval(timerInterval);
            timeLeft.textContent = "All Done!"
            // timer.textContent="All Done!"
            endQuiz();
        }else (questionsCount>= questions.length + 1){
            clearInterval(timerInterval);
            endQuiz();
        }
    },1000);

    
 function startQuiz(){
    questionNumber = 0
    countdown();
    showQuestion(questionNumber);
 }

//---display first question-----





// function displayQuestion(){
//     //---get current question and its answers---
//     var { question, options, correctAnswer} =
// questions[currentQuestion];

// document.querySelector('theQuestions').style.display = "block"
// document.querySelector('finish').style.display = "none";

//     questionEl.textContent = question;

//     options.forEach(function(data,key){
//         console.log("The key is "+ key)
//         var btn = document.querySelector(`#btnAnswer${key+1}`);
//         console.log (document.querySelector(`#btnAnswer${key+1}`))
//         btn.textContent = options[key];

//         btn.addEventListener("click", function(){
//             console.log(key)
//             checkAnswer(key);
//         });
//     });
// }


// //----------feedback section-----------------

// function checkAnswer(userAnswer){
//     var correctAnswer =
// questions[currentQuestion].correctAnswer;

// if (userAnswer=== correctAnswer){
//    feedbackEl.textContent = "Correct!";
//     score++;
// }
// else {
//     feedbackEl.textContent = "Wrong!";
//     timer-=10;
// }

// currentQuestion++;
// if (currentQuestion=== questions.length){
//     endQuiz();
// }
// else{
//     displayQuestion();
// }
// }

// function endQuiz(){

//     document.querySelector("finish").classList.remove("hide");

//     document.querySelector("final-score").textContent = "Your final score is ${score}";
// }


