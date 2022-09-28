var currentquestionindex = 0
var time = 5;
var timerid;

var questionsEl = document.getElementById("questions")
var timerEl = document.getElementById("time")
var choicesEl = document.getElementById("choices")
var submitbtn = document.getElementById("submit")
var startBtn = document.getElementById("initiate_btn");
var initialsEl = document.getElementById("initials")
var question = document.getElementById("question-title") 



function startQuiz() {
   var startscreenEl = document.getElementById("rules");
   startscreenEl.setAttribute("class", "hide");
   startBtn.setAttribute("class", "hide");
   questionsEl.removeAttribute("class");
   timerid = setInterval(clocktick, 1500);
   timerEl.textContent = time;
   getquestion();
}

function clocktick (){
        time--;
        timerEl.textContent = time;
        if(time<=0){
                quizend();
        }
}

function quizend(){
        clearInterval(timerid);
}

function getquestion(){
        var currentQuestion = questions[currentquestionindex]
        var titleEl = document.getElementById("question-title")
        titleEl.textContent = currentQuestion.question
}

function nextquestion(){
       
}

        getquestion()
        document.addEventListener("click", startQuiz)


