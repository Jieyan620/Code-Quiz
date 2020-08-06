var op1 = document.getElementById('op1');
var op2 = document.getElementById('op2');
var op3 = document.getElementById('op3');
var op4 = document.getElementById('op4');

var quiz_link = `https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple`

var quizNumber = 0


// timer on Nav
var timeleft = 60;
var downloadTimer = setInterval(function () {
   if (timeleft <= 0) {
      clearInterval(downloadTimer);
      document.getElementById("timer").innerHTML = "Finished";
   } else {
      document.getElementById("timer").innerHTML = timeleft;
   }
   timeleft -= 1;
}, 1000);

// quiz api https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple
function getQuizs(quizNumber) {
   fetch(quiz_link)
      .then(r => r.json())
      .then((quizs) => {
         const quizsArray = quizs.results
         console.log(quizsArray)


      })
}



// add event listener to whole page

document.addEventListener('click'. ({target}) => {


   
})




