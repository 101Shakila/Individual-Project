//Shakila Samaradiwakara 8886070

// include loops, timers, UI Widjets - Selectable 
$(document).ready(function () {

    document.getElementById("answer1").addEventListener("click", function () {
        checkAnswer(0);
    })

    document.getElementById("answer2").addEventListener("click", function () {
        checkAnswer(1);
    })

    document.getElementById("answer3").addEventListener("click", function () {
        checkAnswer(2);
    })

    document.getElementById("answer4").addEventListener("click", function () {
        checkAnswer(3);
    })


    $("#finalResult").hide();
    renderQuestion();

});



//quiz questions and answers:
const quizQA = [
    {
        question: "What is the capital city of Sri Lanka?",
        answers: [
            { text: "Colombo", correct: false },
            { text: "Kandy", correct: false },
            { text: "Sri Jayawardenepura Kotte", correct: true },
            { text: "Galle", correct: false }
        ],

    },

    {
        question: "Who invented the telephone?",
        answers: [
            { text: "Alexander Graham Bell", correct: true },
            { text: "Harper Lee", correct: false },
            { text: "Shakila Samaradiwakara", correct: false },
            { text: "Emmanuel Macron", correct: false }
        ],

    },

    {
        question: "What is the currency used in Japan?",
        answers: [
            { text: "Rupee", correct: false },
            { text: "Dollar", correct: false },
            { text: "Yen", correct: true },
            { text: "Riyal", correct: false }
        ],

    },

    {
        question: "Who is the current president of France?",
        answers: [
            { text: "Emmanuel France", correct: true },
            { text: "Bob the builder", correct: false },
            { text: "Justin Trudeau", correct: false },
            { text: "Elon Musk", correct: false }
        ],

    },
]


// The variables will select the HTML elements we setup in quiz.html
const firstAnswer = document.querySelector("#answer1");
const secondAnswer = document.querySelector("#answer2");
const thirdAnswer = document.querySelector("#answer3");
const forthAnswer = document.querySelector("#answer4");


//setup variables to see how much was correct & quiz progress
let correctAmount = 0;
let questionIndex = 0;

//function to show the quesitons and options to choose from
function renderQuestion() {


    //get the data for the current question from
    let currentQuestion = quizQA[questionIndex];

    //show the question on the screen
    document.getElementById("question").innerHTML = currentQuestion.question;


    //loop to go through all the answer options for the user to choose from
    for (let i = 0; i < currentQuestion.answers.length; i++) {

        let answerElement = document.getElementById("answer" + (i + 1));

        answerElement.innerHTML = currentQuestion.answers[i].text;
    }

}

//function to check if the answer chosen is correct
function checkAnswer(selectedAnswer) {

    let currentQuest = quizQA[questionIndex];

    let chosenAnswer = currentQuest.answers[selectedAnswer].correct;

    if (chosenAnswer) {
        correctAmount++;
    }
    //increment the index so it goes to the next question
    questionIndex++;

    //update progress bar
    progressBarUpdate();

    //goes to next question
    if (questionIndex >= quizQA.length) {
        showResults();
    }
    else {
        renderQuestion();
    }

}

function showResults() {

    $("#finalResult").show();
    $("#answerContainer").hide();
    $("#resultsQ").text("You got " + correctAmount + " out of " + quizQA.length + " correct!")

}

//JQuery Widget #1
$(function () {
    $("#quizProgressBar").progressbar({
        value: 0
    });
})

//update the progressbar as the questions progress
function progressBarUpdate() {

    let progress = (questionIndex / quizQA.length) * 100;
    $("#quizProgressBar").progressbar("value", progress);

}

//reseting the quiz to start over.
function resetQuiz() {

    $("#finalResult").hide();
    $("#answerContainer").show();
    correctAmount = 0;
    questionIndex = 0;
    progressBarUpdate();
    renderQuestion();

}

//Jquery event handler method
$("#resetQuiz").click(function (evt) {
    resetQuiz();

})