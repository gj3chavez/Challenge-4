var score = 0;
var HighScores =[];
//var timeEl = document.querySelector("#time");

var questionsEl = document.getElementById("");
var initialsEl = document.getElementById("");


var timerEl = document.querySelector("time");
var questionNumber = 0;
var timeValue = 60;
var questionCount = 1;

//buttons
var submitBtn= document.querySelector("")
var startBtn = document.querySelector("#start");

function SetTime(){
    var Interval = setInterval(() => {
        timeValue = timeValue - 1;
        timeLeft.innerHTML = timeValue;
        if (timeValue === 0){
           clearInterval(Interval);
        }

        
    }, 1000);

}
function startQuiz(){
    //write the questions here
}

