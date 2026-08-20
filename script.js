// ========================================
// ANATOMY CHALLENGE V2
// ========================================


// QUESTION DATABASE

const questionBank = [

    // ================================
    // SKELETAL
    // ================================

    {
        category: "skeletal",
        difficulty: "easy",
        icon: "🦴",

        question: "Which is the longest bone in the human body?",

        answers: [
            "Femur",
            "Humerus",
            "Tibia",
            "Ulna"
        ],

        correct: 0
    },

    {
        category: "skeletal",
        difficulty: "easy",
        icon: "💀",

        question: "Which structure protects the brain?",

        answers: [
            "Rib cage",
            "Skull",
            "Pelvis",
            "Sternum"
        ],

        correct: 1
    },

    {
        category: "skeletal",
        difficulty: "medium",
        icon: "🦴",

        question: "How many cervical vertebrae are normally present in the human spine?",

        answers: [
            "5",
            "7",
            "10",
            "12"
        ],

        correct: 1
    },

    {
        category: "skeletal",
        difficulty: "hard",
        icon: "🦴",

        question: "Which bone forms the lower jaw?",

        answers: [
            "Maxilla",
            "Mandible",
            "Zygomatic bone",
            "Temporal bone"
        ],

        correct: 1
    },


    // ================================
    // MUSCULAR
    // ================================

    {
        category: "muscular",
        difficulty: "easy",
        icon: "💪",

        question: "What connects a muscle to a bone?",

        answers: [
            "Ligament",
            "Tendon",
            "Cartilage",
            "Meniscus"
        ],

        correct: 1
    },

    {
        category: "muscular",
        difficulty: "easy",
        icon: "💪",

        question: "Which muscle is primarily responsible for extending the elbow?",

        answers: [
            "Biceps brachii",
            "Triceps brachii",
            "Deltoid",
            "Pectoralis major"
        ],

        correct: 1
    },

    {
        category: "muscular",
        difficulty: "medium",
        icon: "💪",

        question: "Which type of muscle is found in the walls of many internal organs?",

        answers: [
            "Skeletal muscle",
            "Cardiac muscle",
            "Smooth muscle",
            "Voluntary muscle"
        ],

        correct: 2
    },


    // ================================
    // NERVOUS
    // ================================

    {
        category: "nervous",
        difficulty: "easy",
        icon: "🧠",

        question: "Which part of the brain is strongly associated with balance and coordination?",

        answers: [
            "Cerebellum",
            "Thalamus",
            "Hypothalamus",
            "Medulla"
        ],

        correct: 0
    },

    {
        category: "nervous",
        difficulty: "medium",
        icon: "🧠",

        question: "What is the basic functional unit of the nervous system?",

        answers: [
            "Neuron",
            "Alveolus",
            "Nephron",
            "Platelet"
        ],

        correct: 0
    },

    {
        category: "nervous",
        difficulty: "hard",
        icon: "🧠",

        question: "Which structure connects the two cerebral hemispheres?",

        answers: [
            "Corpus callosum",
            "Medulla",
            "Cerebellar vermis",
            "Pituitary gland"
        ],

        correct: 0
    },


    // ================================
    // CARDIOVASCULAR
    // ================================

    {
        category: "cardiovascular",
        difficulty: "easy",
        icon: "❤️",

        question: "Which organ pumps blood throughout the body?",

        answers: [
            "Liver",
            "Heart",
            "Kidney",
            "Lung"
        ],

        correct: 1
    },

    {
        category: "cardiovascular",
        difficulty: "easy",
        icon: "🩸",

        question: "Which blood cells primarily carry oxygen?",

        answers: [
            "White blood cells",
            "Platelets",
            "Red blood cells",
            "Plasma cells"
        ],

        correct: 2
    },

    {
        category: "cardiovascular",
        difficulty: "medium",
        icon: "❤️",

        question: "Which chamber of the heart pumps oxygenated blood into the systemic circulation?",

        answers: [
            "Right atrium",
            "Right ventricle",
            "Left atrium",
            "Left ventricle"
        ],

        correct: 3
    },


    // ================================
    // RESPIRATORY
    // ================================

    {
        category: "respiratory",
        difficulty: "easy",
        icon: "🫁",

        question: "Which organs are primarily responsible for gas exchange?",

        answers: [
            "Kidneys",
            "Lungs",
            "Liver",
            "Stomach"
        ],

        correct: 1
    },

    {
        category: "respiratory",
        difficulty: "medium",
        icon: "🫁",

        question: "Where does most gas exchange occur in the lungs?",

        answers: [
            "Trachea",
            "Bronchi",
            "Alveoli",
            "Larynx"
        ],

        correct: 2
    }

];


// ========================================
// GAME VARIABLES
// ========================================

let questions = [];

let currentQuestion = 0;

let score = 0;

let lives = 3;

let streak = 0;

let bestStreak = 0;

let correctAnswers = 0;

let timeLeft = 15;

let timer;

let selectedCategory = "all";

let selectedDifficulty = "easy";


// ========================================
// LOCAL STORAGE
// ========================================

let highScore =
    Number(localStorage.getItem("anatomyHighScore")) || 0;

let totalXP =
    Number(localStorage.getItem("anatomyXP")) || 0;


// ========================================
// ELEMENTS
// ========================================

const homeScreen =
    document.getElementById("home-screen");

const quizScreen =
    document.getElementById("quiz-screen");

const resultScreen =
    document.getElementById("result-screen");

const startButton =
    document.getElementById("start-btn");

const restartButton =
    document.getElementById("restart-btn");

const homeButton =
    document.getElementById("home-btn");

const questionElement =
    document.getElementById("question");

const answerButtons =
    document.querySelectorAll(".answer-btn");

const questionNumber =
    document.getElementById("question-number");

const scoreElement =
    document.getElementById("score");

const timerElement =
    document.getElementById("timer");

const livesElement =
    document.getElementById("lives");

const progressBar =
    document.getElementById("progress-bar");

const feedback =
    document.getElementById("feedback");

const questionImage =
    document.getElementById("question-image");

const categoryLabel =
    document.getElementById("category-label");

const difficultyLabel =
    document.getElementById("difficulty-label");

const streakElement =
    document.getElementById("streak");

const finalScore =
    document.getElementById("final-score");

const correctCount =
    document.getElementById("correct-count");

const bestStreakElement =
    document.getElementById("best-streak");

const accuracyElement =
    document.getElementById("accuracy");

const resultMessage =
    document.getElementById("result-message");

const homeHighScore =
    document.getElementById("home-high-score");

const homeXP =
    document.getElementById("home-xp");


// ========================================
// DISPLAY SAVED DATA
// ========================================

homeHighScore.textContent = highScore;

homeXP.textContent = totalXP;


// ========================================
// CATEGORY SELECTION
// ========================================

document.querySelectorAll(".category")
    .forEach(button => {

        button.addEventListener("click", () => {

            document
                .querySelectorAll(".category")
                .forEach(btn =>
                    btn.classList.remove("active")
                );

            button.classList.add("active");

            selectedCategory =
                button.dataset.category;

        });

    });


// ========================================
// DIFFICULTY SELECTION
// ========================================

document.querySelectorAll(".difficulty")
    .forEach(button => {

        button.addEventListener("click", () => {

            document
                .querySelectorAll(".difficulty")
                .forEach(btn =>
                    btn.classList.remove("active")
                );

            button.classList.add("active");

            selectedDifficulty =
                button.dataset.difficulty;

        });

    });


// ========================================
// START
// ========================================

startButton.addEventListener(
    "click",
    startGame
);

restartButton.addEventListener(
    "click",
    startGame
);

homeButton.addEventListener(
    "click",
    goHome
);


// ========================================
// START GAME
// ========================================

function startGame() {

    currentQuestion = 0;

    score = 0;

    lives = 3;

    streak = 0;

    bestStreak = 0;

    correctAnswers = 0;


    questions =
        questionBank.filter(question => {

            const categoryMatch =
                selectedCategory === "all" ||
                question.category === selectedCategory;

            const difficultyMatch =
                question.difficulty === selectedDifficulty;

            return categoryMatch &&
                   difficultyMatch;

        });


    // If selected difficulty doesn't have enough
    // questions, use all questions from category.

    if (questions.length < 10) {

        questions =
            questionBank.filter(question => {

                return selectedCategory === "all" ||
                    question.category === selectedCategory;

            });

    }


    // Shuffle questions

    questions.sort(() => Math.random() - 0.5);


    // Maximum 10 questions

    questions =
        questions.slice(0, 10);


    homeScreen.classList.add("hidden");

    resultScreen.classList.add("hidden");

    quizScreen.classList.remove("hidden");


    scoreElement.textContent = 0;

    streakElement.textContent = 0;

    updateLives();

    showQuestion();

}


// ========================================
// SHOW QUESTION
// ========================================

function showQuestion() {

    clearInterval(timer);

    timeLeft = 15;

    timerElement.textContent = timeLeft;

    feedback.textContent = "";


    const q =
        questions[currentQuestion];


    questionElement.textContent =
        q.question;


    questionImage.textContent =
        q.icon;


    questionNumber.textContent =
        currentQuestion + 1;


    progressBar.style.width =
        ((currentQuestion + 1) /
        questions.length * 100) + "%";


    categoryLabel.textContent =
        getCategoryName(q.category);


    difficultyLabel.textContent =
        q.difficulty.toUpperCase();


    answerButtons.forEach((button, index) => {

        button.textContent =
            q.answers[index];

        button.className =
            "answer-btn";

        button.onclick =
            () => checkAnswer(index);

    });


    startTimer();

}


// ========================================
// CATEGORY NAME
// ========================================

function getCategoryName(category) {

    const names = {

        skeletal: "🦴 Skeletal",

        muscular: "💪 Muscular",

        nervous: "🧠 Nervous",

        cardiovascular: "❤️ Cardiovascular",

        respiratory: "🫁 Respiratory"

    };

    return names[category] || "🧬 Anatomy";

}


// ========================================
// TIMER
// ========================================

function startTimer() {

    timer =
        setInterval(() => {

            timeLeft--;

            timerElement.textContent =
                timeLeft;


            if (timeLeft <= 0) {

                clearInterval(timer);

                timeUp();

            }

        }, 1000);

}


// ========================================
// TIME UP
// ========================================

function timeUp() {

    feedback.textContent =
        "⏰ Time's up!";

    feedback.style.color =
        "#facc15";

    streak = 0;

    streakElement.textContent = 0;

    loseLife();

    disableAnswers();

    setTimeout(nextQuestion, 1000);

}


// ========================================
// CHECK ANSWER
// ========================================

function checkAnswer(selected) {

    clearInterval(timer);

    disableAnswers();


    const q =
        questions[currentQuestion];


    if (selected === q.correct) {

        answerButtons[selected]
            .classList.add("correct");


        streak++;

        correctAnswers++;


        if (streak > bestStreak) {

            bestStreak = streak;

        }


        // Base XP

        let points = 10;


        // Streak bonus

        points +=
            (streak - 1) * 2;


        // Difficulty bonus

        if (q.difficulty === "medium") {

            points += 5;

        }

        else if (q.difficulty === "hard") {

            points += 10;

        }


        score += points;


        feedback.textContent =
            `✅ Correct! +${points} XP`;

        feedback.style.color =
            "#22c55e";


        scoreElement.textContent =
            score;


        streakElement.textContent =
            streak;

    }

    else {

        answerButtons[selected]
            .classList.add("wrong");


        answerButtons[q.correct]
            .classList.add("correct");


        feedback.textContent =
            "❌ Wrong answer!";

        feedback.style.color =
            "#ef4444";


        streak = 0;

        streakElement.textContent = 0;

        loseLife();

    }


    setTimeout(nextQuestion, 1200);

}


// ========================================
// LOSE LIFE
// ========================================

function loseLife() {

    lives--;

    updateLives();

}


// ========================================
// UPDATE LIVES
// ========================================

function updateLives() {

    if (lives === 3) {

        livesElement.textContent =
            "❤️ ❤️ ❤️";

    }

    else if (lives === 2) {

        livesElement.textContent =
            "❤️ ❤️ 🖤";

    }

    else if (lives === 1) {

        livesElement.textContent =
            "❤️ 🖤 🖤";

    }

    else {

        livesElement.textContent =
            "🖤 🖤 🖤";

    }

}


// ========================================
// DISABLE ANSWERS
// ========================================

function disableAnswers() {

    answerButtons.forEach(button => {

        button.classList.add("disabled");

    });

}


// ========================================
// NEXT QUESTION
// ========================================

function nextQuestion() {

    if (lives <= 0) {

        endGame();

        return;

    }


    currentQuestion++;


    if (currentQuestion >= questions.length) {

        endGame();

        return;

    }


    showQuestion();

}


// ========================================
// END GAME
// ========================================

function endGame() {

    clearInterval(timer);


    quizScreen.classList.add("hidden");

    resultScreen.classList.remove("hidden");


    finalScore.textContent =
        score;


    correctCount.textContent =
        correctAnswers;


    bestStreakElement.textContent =
        bestStreak;


    const accuracy =
        Math.round(
            (correctAnswers /
            questions.length) * 100
        );


    accuracyElement.textContent =
        accuracy + "%";


    // Save XP

    totalXP += score;

    localStorage.setItem(
        "anatomyXP",
        totalXP
    );


    // High score

    if (score > highScore) {

        highScore = score;

        localStorage.setItem(
            "anatomyHighScore",
            highScore
        );

    }


    homeHighScore.textContent =
        highScore;

    homeXP.textContent =
        totalXP;


    if (accuracy === 100) {

        resultMessage.textContent =
            "🏆 PERFECT! You are an Anatomy Master!";

    }

    else if (accuracy >= 80) {

        resultMessage.textContent =
            "🔥 Excellent! Your anatomy knowledge is impressive!";

    }

    else if (accuracy >= 60) {

        resultMessage.textContent =
            "👍 Good work! Keep studying and you'll get even better.";

    }

    else {

        resultMessage.textContent =
            "📚 Keep learning! Practice makes progress.";

    }

}


// ========================================
// HOME
// ========================================

function goHome() {

    clearInterval(timer);

    quizScreen.classList.add("hidden");

    resultScreen.classList.add("hidden");

    homeScreen.classList.remove("hidden");

    homeHighScore.textContent =
        highScore;

    homeXP.textContent =
        totalXP;

}