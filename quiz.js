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
    // {
    //   q: "How do you complete Simbang Gabi?",
    //   options: [
    //     "Sleep halfway through, then act like you prayed.",
    //     "Buy a hot pandesal and pretend you're holy.",
    //     "You only go because you have a crush on someone at the church.",
    //     "Attend to keep up with family tradition."
    //   ]
    // },
    // {
    //   q: "How do you usually celebrate Christmas Day?",
    //   options: [
    //     "Dodging Tita's “So, what's your plan after college?” question.",
    //     "No Sleep 'Til Noche Buena.",
    //     "Karaoke 'til the mic gives up!",
    //     "Just a simple gathering with family and friends."
    //   ]
    // },
    // {
    //   q: "What do you bring to the potluck?",
    //   options: [
    //     "The magic of being there.",
    //     "Store-bought spaghetti, declared as “homemade.”",
    //     "Lumpiang shanghai.",
    //     "Your signature dish."
    //   ]
    // },
    {
      q: "What's your role during Noche Buena?",
      options: [
        "The official taste tester (aka pasimuno sa papakan).",
        "The one who gets asked if you're still single.",
        "The designated Spotify DJ.",
        "The dishwasher after Noche Buena."
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
    questionEl.innerHTML = `<span class="question-number">${i + 1}.</span> ${q}`;
    optionsEl.innerHTML = ''; 

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