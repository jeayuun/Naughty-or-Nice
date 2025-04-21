// Lacking the restart func to reset quiz 
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
    q: "How do you complete Simbang Gabi?",
    options: [
      { text: "Sleep halfway through, then act like you prayed.", value: 25 },
      { text: "Buy a hot pandesal and pretend you’re holy.", value: 50 },
      { text: "You only go because you have a crush on someone at the church.", value: 75 },
      { text: "Attend to keep up with family tradition.", value: 100 }
    ]
  },
  {
    q: "How do you usually celebrate Christmas Day?",
    options: [
      { text: "Dodging Tita's “So, what's your plan after college?” question.", value: 25 },
      { text: "No Sleep 'Til Noche Buena.", value: 50 },
      { text: "Karaoke 'til the mic gives up!", value: 75 },
      { text: "Just a simple gathering with family and friends.", value: 100 }
    ]
  },
  {
    q: "What do you bring to the potluck?",
    options: [
      { text: "The magic of being there.", value: 25 },
      { text: "Store-bought spaghetti, declared as “homemade.”", value: 50 },
      { text: "Lumpiang shanghai.", value: 75 },
      { text: "Your signature dish.", value: 100 }
    ]
  },
  {
    q: "What's your role during Noche Buena?",
    options: [
      { text: "The official taste tester (aka pasimuno sa papakan).", value: 25 },
      { text: "The one who gets asked if you're still single.", value: 50 },
      { text: "The designated Spotify DJ.", value: 75 },
      { text: "The dishwasher after Noche Buena.", value: 100 }
    ]
  },
  {
    q: "Your New Year's resolution is:",
    options: [
      { text: "Journal more, chismis less", value: 25 },
      { text: "“Matulog nang maaga, hindi umaga”", value: 50 },
      { text: "Stop buying things I don’t need.", value: 75 },
      { text: "Stop procrastinating and be more productive.", value: 100 }
    ]
  },
  {
    q: "What’s your holiday shopping style?",
    options: [
      { text: "Last-minute. #panic-buying.", value: 25 },
      { text: "Add to cart now, checkout only if there’s a sale.", value: 50 },
      { text: "Secret Santa expert—cute gifts, always on budget.", value: 75 },
      { text: "Finished shopping in November, with color-coded wrapping.", value: 100 }
    ]
  },
  {
    q: "What’s your favorite Christmas movie?",
    options: [
      { text: "Ang Tanging Ina (2003).", value: 25 },
      { text: "Four Sisters and a Wedding (2013).", value: 50 },
      { text: "Seven Sundays (2017).", value: 75 },
      { text: "Home Alone (1990).", value: 100 }
    ]
  },
  {
    q: "How do you greet your friends during the holidays?",
    options: [
      { text: "Copy-paste “Merry Christmas!” to 30 people.", value: 25 },
      { text: "Send memes, reels, and voice notes.", value: 50 },
      { text: "Post one generic story and tag everyone. ", value: 75 },
      { text: "You make a card or video greeting for each barkada member.", value: 100 }
    ]
  },
  {
    q: "Your tree topper is…",
    options: [
      { text: "An action figure. Or a cat.", value: 25 },
      { text: "Whatever was in the junk drawer.", value: 50 },
      { text: "A handmade blob from kindergarten.", value: 75 },
      { text: "A majestic star. Classic.", value: 100 }
    ]
  },
  {
    q: "What is your spirit animal this holiday season?",
    options: [
      { text: "A grinchy squirrel with opinions.", value: 25 },
      { text: "An over-caffeinated elf.", value: 50 },
      { text: "A raccoon in a Santa hat.", value: 75 },
      { text: "A warm, fuzzy polar bear in pajamas.", value: 100 }
    ]
  },
  {
    q: "When someone says “New Year, New Me,” you say...",
    options: [
      { text: "“Lies. You still owe me money.”", value: 25 },
      { text: "“It's the same me. With more snacks.”", value: 50 },
      { text: "“Me too, but like... in April.”", value: 75 },
      { text: "“Go off, queen. Reinvent!”", value: 100 }
    ]
  },
  {
    q: "You're the one who handles the Secret Santa gifts. What would you give?",
    options: [
      { text: "A half-eaten candy cane and vibes.", value: 25 },
      { text: "A gift card. With the receipt.", value: 50 },
      { text: "Something weird, but unforgettable.", value: 75 },
      { text: "A gift from the heart, made a person.", value: 100 }
    ]
  },
  {
    q: "Do you believe in Santa?",
    options: [
      { text: "I believe in mall Santas. Especially the chaotic ones.", value: 25 },
      { text: "No, but I respect the brand.", value: 50 },
      { text: "Spiritually, yes. Logistically... maybe.", value: 75 },
      { text: "Yes. Always have, always will.", value: 100 }
    ]
  },
  {
    q: "Favorite reindeer?",
    options: [
      { text: "I don't trust any flying deer.", value: 25 },
      { text: "Whichever one has the drama.", value: 50 },
      { text: "Dasher-he's got cool energy.", value: 75 },
      { text: "Rudolph. The Legend.", value: 100 }
    ]
  },
  {
    q: "Carolers arrive to your door. You...",
    options: [
      { text: "Yell “I only know the second verse!”", value: 25 },
      { text: "Hide in the kitchen.", value: 50 },
      { text: "Nod politely from the window.", value: 75 },
      { text: "Sing along and bring them cocoa.", value: 100 }
    ]
  },
  {
    q: "What’s your Christmas #OOTD?",
    options: [
      { text: "The first thing I see in my closet.", value: 25 },
      { text: "An outfit I’ve planned for months.", value: 50 },
      { text: "Color-coordinated with my family.", value: 75 },
      { text: "A themed Christmas costume.", value: 100 }
    ]
  },
  {
    q: "You’re hosting a holiday party. What’s your vibe?",
    options: [
      { text: "Everyone’s gone by 9, including me.", value: 25 },
      { text: "I forgot I was hosting.", value: 50 },
      { text: "Snacks? Yes. Cleanup? No.", value: 75 },
      { text: "Hot cocoa, lights, and playlists for every mood.", value: 100 }
    ]
  },
  {
    q: "What’s your post-Christmas routine?",
    options: [
      { text: "Start rushing to finish your school backlogs.", value: 25 },
      { text: "Eat leftover spaghetti until New Year.", value: 50 },
      { text: "Do a deep cleaning to welcome the new year.", value: 75 },
      { text: "Visit your relatives, just in case they give you aguinaldo.", value: 100 }
    ]
  },
  {
    q: "What do you do with leftover holiday food?",
    options: [
      { text: "Feed it to the squirrels. Don't ask.", value: 50 },
      { text: "Use it as holiday-themed art.", value: 25 },
      { text: "Eat it for 6 days straight.", value: 75 },
      { text: "Share it, freeze it, make magic.", value: 100 }
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
  answers[currentIndex] = selectedValue;
  currentIndex++;
  showQuestion(currentIndex);
}

finishBtn.addEventListener('click', () => {
  if (selectedValue !== null) {
    answers[currentIndex] = selectedValue;
  }

  document.querySelector('.quiz-container').style.display = 'none';
  document.querySelector('.score-section').style.display = 'block';

  populateIndividualScores(quizData, answers); // ← Call this
});

/* Restart Function */




document.addEventListener('DOMContentLoaded', () => {
  showQuestion(currentIndex); // show quiz on load
});
