const questions = [
    {
        question: "The Sahara Desert is the largest desert in the world.",
        answers: [
            { text: "True", correct: false },
            { text: "False", correct: true },
        ]
    },
    {
        question: "Africa has the most countries of any continent.",
        answers: [
            { text: "True", correct: true },
            { text: "False", correct: false },
        ]
    },
    {
        question: "The Sumerians were not the oldest known civilization.",
        answers: [
            { text: "True", correct: false},
            { text: "False", correct: true },
        ]
    },
    {
        question: "The Ural Mountains separate Europe from Asia.",
        answers: [
            { text: "True", correct: true },
            { text: "False", correct: false },
        ]
    },
    {
        question: "Canberra is the capital city of Australia.",
        answers: [
            { text: "True", correct: true },
            { text: "False", correct: false },
        ]
    },
    {
        question: "Africa is known as the Dark Continent.",
        answers: [
            { text: "True", correct: true },
            { text: "False", correct: false },
        ],
    },
    {
        question: "The Indian Ocean is the largest ocean on Earth.",
        answers: [
            { text: "True", correct: false},
            { text: "False", correct: true},
        ]
    },
    {
        question: "Vatican City is the smallest country in the world.",
        answers: [
            { text: "True", correct: true },
            { text: "False", correct: false },
        ]
    },
    {
        question: "Canada has the longest coastline of any country.",
        answers: [
            { text: "True", correct: true },
            { text: "False", correct: false },
        ]
    },
    {
        question: "The Nile River is the longest river in the world.",
        answers: [
            { text: "True", correct: true },
            { text: "False", correct: false },
        ]
    },
    {
        question: "Japan is known as the Land of the Rising Sun.",
        answers: [
            { text: "True", correct: true },
            { text: "False", correct: false },
        ]
    },
    {
        question: "Beijing is the capital of Japan.",
        answers: [
            { text: "True", correct: false },
            { text: "False", correct: true },
        ]
    },
    {
        question: "The Russian Empire was known for its road system across the land",
        answers: [
            { text: "True", correct: false },
            { text: "False", correct: true },
        ]
    },
];


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startquiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.style.display = "none"; 
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

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
    } else {
        selectedBtn.classList.add("incorrect");
    }

    nextButton.style.display = "block"; 
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        questionElement.innerHTML = `Quiz completed! Your score: ${score}/${questions.length}`;
        answerButtons.innerHTML = ''; 
        nextButton.style.display = "none"; 
    }
});


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
}


questions.forEach(question => {
    shuffleArray(question.answers);
});


shuffleArray(questions);

console.log(questions);

startquiz();
