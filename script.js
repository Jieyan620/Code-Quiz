var op1 = document.getElementById('op1');
var op2 = document.getElementById('op2');
var op3 = document.getElementById('op3');
var op4 = document.getElementById('op4');

var quiz_link = `https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple`

var quizNumber = 0

console.log()
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
         showQuiz(quizsArray)
      })
}

// randomize the answers
function shuffleArray(quizAnswers) {
   for (var i = quizAnswers.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = quizAnswers[i];
      quizAnswers[i] = quizAnswers[j];
      quizAnswers[j] = temp;
   }
   return quizAnswers
}

function showQuiz(quizsArray) {
   // get all answers in one array
   var quizAnswers = []
   var worngAnswers = quizsArray[quizNumber].incorrect_answers
   quizAnswers = worngAnswers.map(
      function add(incorrect_answer) {
         return {
            answerBool: false,
            text: incorrect_answer
         }
   })
   var answer = { answerBool: true, text: quizsArray[quizNumber].correct_answer }
   quizAnswers.push(answer)
   
   shuffleArray(quizAnswers)

   // show in html
   
   console.log(quizAnswers)
}


// add event listener to whole page

function eventListener() {
   document.addEventListener('click', ({ target }) => {

      // if timer

      if (target.id === "op1" || "op2" || "op3" || "op4") {

      }



   })
}





getQuizs()