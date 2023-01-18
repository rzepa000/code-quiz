var highscores = document.getElementById("highscores");
var reset = document.getElementById("clear");
var initials=localStorage.getItem("initials");
var score=localStorage.getItem("score");
var scores=localStorage.getItem("arr");


var data =JSON.parse(scores);



// Loop through the data and create list items
for(var i=0;i<data.length;i++){
 // var data2=[];
 
  var listItem = document.createElement("li");
  listItem.textContent =  data[i];
  highscores.appendChild(listItem);
}




reset.addEventListener("click", function(event){
  window.localStorage.clear();
  
  location.reload();
  
})
