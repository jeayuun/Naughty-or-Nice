// Pa-revise thankss
const quizData = [
    {
        q: "What's your go-to Christmas jam?",
        options: [
            "Mistletoe by Justin Bieber",
            "Star ng Pasko by ABS-CBN",
            "All I Want For Christmas Is You by Mariah Carey",
            "Christmas in Our Hearts by Jose Mari Chan"
        ]
    },
    {
        q: "Which classic Christmas movie never gets old?",
        options: [
            "Home Alone",
            "Elf",
            "The Grinch",
            "Love Actually"
        ]
    },
    {
        q: "Preferred holiday treat?",
        options: [
            "Gingerbread cookies",
            "Candy canes",
            "Fruitcake (no shame!)",
            "Hot cocoa"
        ]
    },
    {
        q: "Ideal winter activity?",
        options: [
            "Building a snowman",
            "Ice skating",
            "Sitting by the fire",
            "Holiday shopping"
        ]
    },
    {
        q: "Which reindeer is your spirit animal?",
        options: [
            "Dasher",
            "Prancer",
            "Vixen",
            "Rudolph"
        ]
    }
];

let currentIndex = 0;

const questionEl = document.querySelector('.quiz-question');
const optionsEl = document.querySelector('.quiz-options');
const nextBtn = document.getElementById('quiz-next');
const finishBtn = document.getElementById('quiz-finish');

function showQuestion(i) {
    const { q, options } = quizData[i];
    questionEl.textContent = `${i + 1}. ${q}`;
    optionsEl.innerHTML = '';  // clear previous options

    options.forEach(text => {
        const btn = document.createElement('button');
        btn.className = 'quiz-option';
        btn.textContent = text;
        // (you can hook in answer logic here if desired)
        optionsEl.appendChild(btn);
    });

    if (i < quizData.length - 1) {
        nextBtn.style.display = 'inline-block';
        finishBtn.style.display = 'none';
    } else {
        nextBtn.style.display = 'none';
        finishBtn.style.display = 'inline-block';
    }
}

function handleNextQuestion() {
    currentIndex++;
    showQuestion(currentIndex);
}

document.addEventListener('DOMContentLoaded', () => {
    showQuestion(0);
});