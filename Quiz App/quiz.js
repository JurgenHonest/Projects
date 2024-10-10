const questions = [
    {
        question: "Who is Karna in MahaBharat?",
        answers: [
            { text: "King of Hastinapur", correct: false },
            { text: "Son of Indra", correct: false },
            { text: "Son of Surya", correct: true },
            { text: "Avatar of Vishnu", correct: false },
        ]
    },
    {
        question: "Who killed Dhuryodan in Mahabharat?",
        answers: [
            { text: "Dhananjaya Arjun", correct: false },
            { text: "Suryaputra Karna", correct: false },
            { text: "Basudev Krishna", correct: false },
            { text: "Vrikodara Bheem", correct: true },
        ]
    },
    {
        question: "Who married Draupadi?",
        answers: [
            { text: "Suryaputra Karna", correct: false },
            { text: "Pandav", correct: true },
            { text: "Nakula and Bheem", correct: false },
            { text: "Dhuryodan", correct: false },
        ]
    },
    {
        question: "Whos chariot did Krishna take upon?",
        answers: [
            { text: "Gangaputra Bheesma", correct: false },
            { text: "Gatotkaca", correct: false },
            { text: "Abimanyu", correct: false },
            { text: "Dhananjaya Arjun", correct: true },
        ]
    },
    {
        question: "Who was the reincarnation of Asura in Mahabharat",
        answers: [
            { text: "Abhimanyu", correct: true },
            { text: "Savarga", correct: false },
            { text: "Damayanti", correct: false },
            { text: "Dhusasan", correct: false },
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionsIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionsIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestions();
}

function showQuestions() {
    resetState();
    let currentQuestion = questions[currentQuestionsIndex];
    let questionNum = currentQuestionsIndex + 1;
    questionElement.innerHTML = questionNum + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);

        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    }
    else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block"
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionsIndex++;
    if (currentQuestionsIndex < questions.length) {
        showQuestions();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionsIndex < questions.length) {
        handleNextButton();
    }
    else {
        startQuiz();
    }
})

startQuiz();