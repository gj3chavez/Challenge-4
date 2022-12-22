var timerEl = document.querySelector("#time");
var startBtn = document.querySelector("#start");


let score = 0;
let questionNumber = 0;
let timeValue = 60;

let timerEl = document.getElementById('time');
let quizContainer = document.getElementById('quizContainer');
let buttonEl = document.getElementById('startQuiz');
let timeLeft = document.getElementById('timeLeft');

function startTimer(){
    let Interval= setInterval(() => {
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

function init() {
    startTimer(); 
   startQuiz();
}



buttonEl.addEventListener('click', function(event){
    console.log("button clicked")
    init()
})
