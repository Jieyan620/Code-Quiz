var op1 = document.getElementById('op1')
var op2 = document.getElementById('op2')
var op3 = document.getElementById('op3')
var op4 = document.getElementById('op4')
var ques = document.getElementById('question')

var score = 0

var quiz_link = `https://opentdb.com/api.php?amount=1&category=18&difficulty=easy&type=multiple`

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

// quiz api https://opentdb.com/api.php?amount=1&category=18&difficulty=easy&type=multiple
function getQuizs() {

   fetch(quiz_link)
      .then(r => r.json())
      .then((quizs) => {
         const quizsArray = quizs.results
         // console.log(quizsArray)
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
   var worngAnswers = quizsArray[0].incorrect_answers
   quizAnswers = worngAnswers.map(
      function add(incorrect_answer) {
         return {
            answerBool: false,
            text: incorrect_answer
         }
      })
   var answer = { answerBool: true, text: quizsArray[0].correct_answer }
   quizAnswers.push(answer)
   // randomize the answers
   shuffleArray(quizAnswers)

   // show in html
   ques.innerText = "Question : " + quizsArray[0].question
   op1.innerText = "1. " + quizAnswers[0].text
   op1.title = quizAnswers[0].answerBool

   op2.innerText = "2. " + quizAnswers[1].text
   op2.title = quizAnswers[1].answerBool

   op3.innerText = "3. " + quizAnswers[2].text
   op3.title = quizAnswers[2].answerBool

   op4.innerText = "4. " + quizAnswers[3].text
   op4.title = quizAnswers[3].answerBool

   document.getElementById('score').innerText = "Your Score: " + score
}


// add event listener to whole page
function eventListener() {
   document.addEventListener('click', ({ target }) => {

      // if timer

      if (target.id === "op1" || "op2" || "op3" || "op4") {

         if (target.title === "true") {
            document.getElementById('bool').innerText = "True"
            score = score + 1
            // document.getElementById('score').innerText = "Your Score: " + score
            getQuizs()

         } else {
            document.getElementById('bool').innerText = "False"
            getQuizs()
         }
      } 
   })
}





getQuizs()
eventListener()