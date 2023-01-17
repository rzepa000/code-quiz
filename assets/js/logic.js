var startbtn=document.querySelector("#startquiz");
var timerEl=document.getElementById('time');
var questions = document.getElementById('questions');
var endscreen = document.getElementById('end-screen');
var startscreen = document.getElementById('start-screen');
var questiontitle = document.getElementById('question-title');
var choices = document.getElementById('choices');
var chosen = document.querySelector(".choice")
var nextq = 0;


function quiz(){
    countdown();
    var state=questions.getAttribute("class");
  if(state==="hide"){
    showanswers();
    questiontitle.textContent=question1[nextq];
    questions.setAttribute("class","show");
    startscreen.setAttribute("class","hide");
    
  }

}
var timeLeft = 30;
function countdown() {

    
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
      // As long as the `timeLeft` is greater than 1
      if (timeLeft >= 1) {
        timerEl.textContent = timeLeft;
        timeLeft--;
        } else if (timeLeft <= 0) {
        timerEl.textContent = timeLeft;
        endgame();
        
      } else if( nextq === "4"){
        endgame();
      }
    }, 1000);
  }
function showanswers(){
  choices.innerHTML = "";
  

  
  
  for (var i = 0; i < 4; i++) {
    
    var allanswers = answers1[nextq][i][0];

    
    var li = document.createElement("button"); // <li></li>
    li.setAttribute("type","button");
    li.setAttribute("class","choice");
    li.setAttribute("data-state",answers1[nextq][i][1]);
    li.textContent = allanswers;   
    choices.appendChild(li);
  }

}

function endgame(){
  var state=endscreen.getAttribute("class");
  if(state==="hide"){
    
    questiontitle.textContent=question1[nextq];
    endscreen.setAttribute("class","show");
    startscreen.setAttribute("class","hide");
    questions.setAttribute("class","hide");
    
  }


}





startbtn.addEventListener("click", quiz);     
questions.addEventListener("click", function(event){
  var element=event.target;
  if(element.matches(".choice")){
    var state2 = element.getAttribute("data-state");
    
    if (state2 === "false") {
      timeLeft=timeLeft-10;
      nextq++;
      showanswers();
      questiontitle.textContent=question1[nextq];
      
   
    }else if(state2==="true"){
      nextq++;
      showanswers();
      questiontitle.textContent=question1[nextq];

    }


  }

} 

)
