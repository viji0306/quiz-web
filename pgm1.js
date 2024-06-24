var v1=new XMLHttpRequest();
v1.onreadystatechange=function()
{
    if(this.readyState==4 && this.status==200)
    {
    var v2=JSON.parse(v1.responseText);
 var quizData1=v2.quizData;


 const quiz = document.querySelector(".quiz-body");
const answerElement = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const footerElement = document.querySelector(".quiz-footer");
const quizDetailElement = document.querySelector(".quiz-details");
const liElement = document.querySelector("ul li");

const option_a= document.getElementById("a_text");
const option_b = document.getElementById("b_text");
const option_c= document.getElementById("c_text");
const option_d= document.getElementById("d_text");
const btnSubmit = document.getElementById("btn");

let currentQuiz = 0;
let score = 0;

loadQuiz();
function loadQuiz() {
    deselectAnswers();
  const currentQuizData = quizData1[currentQuiz];
  questionElement.innerText=currentQuizData.question;
  option_a.innerText=currentQuizData.a;
  option_b.innerText=currentQuizData.b;
  option_c.innerText=currentQuizData.c;
  option_d.innerText=currentQuizData.d;
  quizDetailElement.innerHTML=`<p>${currentQuiz+1} of ${quizData1.length} Questions</p>`
  
}
function deselectAnswers(){
    answerElement.forEach((answerElement)=>
        {
answerElement.checked=false
        });
}
function getSelected() {
    let answer;
   
    answerElement.forEach((answerElement) => {
     if (answerElement.checked) {
      answer = answerElement.id;
     }
    });
    return answer;
   }
   
   btnSubmit.addEventListener("click", function () {
    const answers = getSelected();
   
    if (answers) {
        if (answers === quizData1[currentQuiz].correct) {
         score++;
        }
        nextQuestion();
       }
   });   

   function nextQuestion() {
    currentQuiz++;
   
    if (currentQuiz < quizData1.length) {
     loadQuiz();
    } else {
     quiz.innerHTML = `<h2>You answered ${score}/${quizData1.length} questions</h2>
       <button type="button" onclick="location.reload()">Restart</button>
       `
       footerElement.style.display="none";
       
    }
   
   }
   function correctanswers() {
    currentQuiz++;
   
    if (currentQuiz < quizData1.correct.length) {
     loadQuiz();
    } else {
     quiz.innerHTML = `<h2> ${quizData1.correct.length}</h2>`
      
     
    }
  }
    }
};
v1.open("GET","pgm1.json",true);
v1.send();
