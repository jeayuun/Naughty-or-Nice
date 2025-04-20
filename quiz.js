// Pa-revise thankss
const quizData = [
  {
    q: "What's your go-to Christmas jam?",
    options: [
      { text: "Mistletoe by Justin Bieber", value: 25 },
      { text: "Star ng Pasko by ABS-CBN", value: 50 },
      { text: "All I Want For Christmas Is You by Mariah Carey", value: 75 },
      { text: "Christmas in Our Hearts by Jose Mari Chan", value: 100 }
    ]
  },
  {
    q: "What's your role during Noche Buena?",
    options: [
      { text: "The official taste tester (aka pasimuno sa papakan).", value: 50 },
      { text: "The one who gets asked if you're still single.", value: 25 },
      { text: "The designated Spotify DJ.", value: 75 },
      { text: "The dishwasher after Noche Buena.", value: 100 }
    ]
  }
];


let currentIndex = 0;
let answers = [];
let selectedValue = null;

const questionEl = document.querySelector('.quiz-question');
const optionsEl = document.querySelector('.quiz-options');
const nextBtn = document.getElementById('quiz-next');
const finishBtn = document.getElementById('quiz-finish');

function showQuestion(i) {
  const { q, options } = quizData[i];
  selectedValue = null;

  questionEl.innerHTML = `<span class="question-number">${i + 1}.</span> ${q}`;
  optionsEl.innerHTML = '';

  options.forEach(({ text, value }) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-option';
    btn.textContent = text;

    btn.onclick = () => {
      document.querySelectorAll('.quiz-option').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      selectedValue = value;
    };

    optionsEl.appendChild(btn);
  });

  nextBtn.style.display = (i < quizData.length - 1) ? 'inline-block' : 'none';
  finishBtn.style.display = (i === quizData.length - 1) ? 'inline-block' : 'none';
}

function handleNextQuestion() {
  if (selectedValue === null) {
    alert("Please select an answer first!");
    return;
  }
  answers[currentIndex] = selectedValue;
  currentIndex++;
  showQuestion(currentIndex);
}


document.addEventListener('DOMContentLoaded', () => {
  const retryBtn = document.querySelector('.ticket__retry');
  if (retryBtn) {
    retryBtn.addEventListener('click', restartQuiz);
  }

  showQuestion(currentIndex); // show quiz on load
});


/*  No restart Quiz yet */ 