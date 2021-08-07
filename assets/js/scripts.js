var quizContainer = document.getElementById('quiz');
var startButton = document.getElementById('start-quiz');


function buildQuiz() {
    // variable to store the HTML output
    const output = [];

    // for each question...
    quizQuestions.forEach(
        (currentQuestion, questionNumber) => {

            // variable to store the list of possible answers
            const answers = [];

            // and for each available answer...
            for (letter in currentQuestion.answers) {

                // ...add an HTML radio button
                answers.push(
                    `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
                );
            }

            // add this question and its answers to the output
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
            );
        }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quiz.innerHTML = output.join('');
}

function showResults() { }

// display quiz right away
buildQuiz();

// on submit, show results
startButton.addEventListener('click', showResults);


//Quiz Questions
const quizQuestions = [
    {
        question: "Commonly used data types DO NOT include:",
        answers: {
            a: "Strings",
            b: "Booleans",
            c: "Alerts",
            d: "Numbers"
        },
        correctAnswer: "c"
    },
    {
        question: "The condition in an if/else statement is enclosed within _____.",
        answers: {
            a: "Quotation Marks",
            b: "Curly Brackets",
            c: "Square Brackets",
            d: "Parentheses"
        },
        correctAnswer: "d"
    },
    {
        question: "Arrays in JavaScript can be used to store _____.",
        answers: {
            a: "Numbers and Strings",
            b: "Other Arrays",
            c: "Booleans",
            d: "All of The Above"
        },
        correctAnswer: "d"
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        answers: {
            a: "Commas",
            b: "Quotation Marks",
            c: "curly Brackets",
            d: "Parentheses"
        },
        correctAnswer: "b"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: {
            a: "JavaScript",
            b: "Terminal",
            c: "For Loops",
            d: "console.log"
        },
        correctAnswer: "d"
    }
];