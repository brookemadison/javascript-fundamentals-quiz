// // Functions
// function buildQuiz(){}
// function showResults(){}

// // Variables
// const quizContainer = document.getElementById('quiz');
// const resultsContainer = document.getElementById('results');
// const submitButton = document.getElementById('start-quiz');
// const myQuestions = [];

// // Kick things off
// buildQuiz();

// // Event listeners
// submitButton.addEventListener('click', showResults);


// function buildQuiz() { 
//       // variable to store the HTML output
//     const output = [];

//       // for each question...
//       quizQuestions.forEach( (currentQuestion, questionNumber) => {
//         // the code we want to run for each question goes here
//       });

//           // variable to store the list of possible answers
//           const answers = [];

//           // and for each available answer...
//           for(letter in currentQuestion.answers){

//             // ...add an HTML radio button
//             answers.push(
//               `<label>
//                 <input type="radio" name="question${questionNumber}" value="${letter}">
//                 ${letter} :
//                 ${currentQuestion.answers[letter]}
//               </label>`
//             );
//           }

//           // add this question and its answers to the output
//           output.push(
//             `<div class="question"> ${currentQuestion.question} </div>
//             <div class="answers"> ${answers.join('')} </div>`
//           );


//       // finally combine our output list into one string of HTML and put it on the page
//       quizContainer.innerHTML = output.join('');
//     }

// function showResults() { }

// // display quiz right away
// buildQuiz();

// // on submit, show results
// startButton.addEventListener('click', showResults);





// myQuestions.forEach( (currentQuestion, questionNumber) => {
//     // the code we want to run for each question goes here
//   });
// // we'll want to store the list of answer choices
// const answers = [];

// // and for each available answer...
// for(letter in currentQuestion.answers){

//   // ...add an html radio button
//   answers.push(
//     `<label>
//       <input type="radio" name="question${questionNumber}" value="${letter}">
//       ${letter} :
//       ${currentQuestion.answers[letter]}
//     </label>`
//   );
// }

// // add this question and its answers to the output
// output.push(
//   `<div class="question"> ${currentQuestion.question} </div>
//   <div class="answers"> ${answers.join('')} </div>`
// );

// quizContainer.innerHTML = output.join('');




// //Quiz Questions
// const quizQuestions = [
//     {
//         question: "Commonly used data types DO NOT include:",
//         answers: {
//             a: "Strings",
//             b: "Booleans",
//             c: "Alerts",
//             d: "Numbers"
//         },
//         correctAnswer: "c"
//     },
//     {
//         question: "The condition in an if/else statement is enclosed within _____.",
//         answers: {
//             a: "Quotation Marks",
//             b: "Curly Brackets",
//             c: "Square Brackets",
//             d: "Parentheses"
//         },
//         correctAnswer: "d"
//     },
//     {
//         question: "Arrays in JavaScript can be used to store _____.",
//         answers: {
//             a: "Numbers and Strings",
//             b: "Other Arrays",
//             c: "Booleans",
//             d: "All of The Above"
//         },
//         correctAnswer: "d"
//     },
//     {
//         question: "String values must be enclosed within _____ when being assigned to variables.",
//         answers: {
//             a: "Commas",
//             b: "Quotation Marks",
//             c: "curly Brackets",
//             d: "Parentheses"
//         },
//         correctAnswer: "b"
//     },
//     {
//         question: "A very useful tool used during development and debugging for printing content to the debugger is:",
//         answers: {
//             a: "JavaScript",
//             b: "Terminal",
//             c: "For Loops",
//             d: "console.log"
//         },
//         correctAnswer: "d"
//     }
// ];

//QUIZ QUESTIONS
const questionsArr = [
  {
    question: 'Commonly used data types DO NOT include:',
    choices: ['Strings', 'Booleans', 'Alerts', 'Number'],
    correct: 'Alerts'
  },
  {
    question: 'The condition in an if/else statement is enclosed within _____.',
    choices: ['Quotation Marks', 'Curly Brackets', 'Square Brackets', 'Parenthesis'],
    correct: 'Parenthesis'
  },
  {
    question: 'Arrays in JavaScript can be used to store _____.',
    choices: ['Numbers and Strings', 'Other arrays', 'Booleans', 'All of the Above'],
    correct: 'All of the Above'
  },
  {
    question: 'String values must be enclosed within _____ when being assigned to variables.',
    choices: ['Commas', 'Quatation Marks', 'Curly Brackets', 'Paretheses'],
    correct: 'Quotation Marks'
  },
  {
    question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
    choices: ['JavaScript', 'Terminal', 'For Loops', 'console.log'],
    correct: 'console.log'
  },
]

const startTimer = function(){
  timerEl.textContent = "Time Left: 60s";

  const interval = setInterval(function(){
      timeLeft --;
      if(currQuestion>=questionsArr.length){
          clearInterval(interval);
          timerEl.remove();
      }
      else if (timeLeft <= 0) {
          clearInterval(interval);
          timerEl.remove();
          currQuestion = questionsArr.length;
          endQuiz();
      }
      else{
          timerEl.textContent = "Time Left: " + timeLeft + "s";
      }
  },1000);
};
     
const choices = function(){



// const nextQuestion = function(event){
//     //How to check whether we already came from the last question?
//     if(index == questionsArr.length){
//         //console.log(event.path[0].outerText);
//         answers = answers.concat(event.path[0].outerText);
//         endQuiz();
//         return;
//     }

//     //console.log(event.path[0].outerText);
//     answers = answers.concat(event.path[0].outerText);

//     //load new set of questions
//     const questionEl = document.querySelector("#question");
//     questionEl.textContent = questionsArr[index].question

//     //load new set of buttons
//     const buttonOne = document.querySelector("#btn-1");
//     buttonOne.textContent = questionsArr[index].choices[0];
//     const buttonTwo = document.querySelector("#btn-2");
//     buttonTwo.textContent = questionsArr[index].choices[1];
//     const buttonThree = document.querySelector("#btn-3");
//     buttonThree.textContent = questionsArr[index].choices[2];
//     const buttonFour = document.querySelector("#btn-4");
//     buttonFour.textContent = questionsArr[index].choices[3];

//     index++;
// }

// const endQuiz = function(){
//   //console.log("You Finished the quiz!");
//   $("#buttons-container").text("");

//   const questionEl = document.querySelector("#question");
//   questionEl.textContent = "Would you like to see your results?"

//   const newButton = document.createElement("button");
//   newButton.className = "quiz-btn";
//   newButton.textContent = "See Results"
//   newButton.addEventListener("click", seeResults);

//   //Create Take Quiz Again button and append to buttons container -- Will have to reload the page.
//     //Create Take Quiz Again button and append to buttons container -- Will have to reload the page

//     const buttonsContainer = document.querySelector("#buttons-container");
//     buttonsContainer.appendChild(newButton);
// }

