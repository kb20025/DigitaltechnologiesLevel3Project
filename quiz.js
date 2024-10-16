const questions = [

    {
        question: "The Sahara Desert is the largest desert in the world.",
        answers: [
            { text: "True", correct: false },
            { text: "False", correct: true },
            
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
        question: "The Sumerians were the oldest known civilization.",
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
        question: "Canberra is the capital city of Australia.",
        answers: [
            { text: "True", correct: true },
            { text: "False", correct: false },
            
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
        question: "Vatican City is the smallest country in the world.",
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
        question: "Tokyo is the capital of Japan.",
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
        question: "Africa has the most countries of any continent.",
        answers: [
            { text: "True", correct: true },
            { text: "False", correct: false },
           
        ]
    },
    {
        question: "The Pacific Ocean is the largest ocean on Earth.",
        answers: [
            { text: "True", correct: true },
            { text: "False", correct: false },
            
        ]
    }
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

startquiz();