const quizData = [
  {
      question: "What’s your favorite Christmas movie?",
      options: ["Ang Tanging Ina (2003)", "Four Sisters and a Wedding (2013)", "Seven Sundays (2017) ", "Home Alone (1990)"], 
      answer: "Home Alone (1990)"
  },
  {
      question: "What’s your Christmas #OOTD?",
      options: ["The first thing I see in my closet", "An outfit I’ve planned for months", "Color-coordinated with my family", "A themed Christmas costume"],
      answer: "A themed Christmas costume"
  },
  {
      question: "What’s your go-to Christmas jam?",
      options: [" Mistletoe by Justin Bieber", "Star ng Pasko by ABS-CBN", "All I Want For Christmas Is You by Mariah Carey", "Christmas in Our Hearts by Jose Mari Chan"],
      answer: "Christmas in Our Hearts by Jose Mari Chan"
  },
  {
      question: "What’s your favorite Filipino holiday activity?",
      options: ["Caroling #songer. ", "Exchange Gifts.", "Decorating (by the time September rolls around). ", "The much-awaited “Merry Christmas from my family to yours” photo shoot."],
      answer: "The much-awaited “Merry Christmas from my family to yours” photo shoot."
  },
  {
      question: "How do you usually celebrate Christmas Day?",
      options: ["Dodging Tita’s “So, what’s your plan after college?” question.", "No Sleep ‘Til Noche Buena.", "Karaoke ‘til the mic gives up!", "Just a simple gathering with family and friends."],
      answer: "Just a simple gathering with family and friends."
  },
  {
      question: "Someone gifts you a mug. Your honest reaction?",
      options: ["Thank them, then secretly regift it next Christmas", "“At least it’s not another picture frame...”", "Use it to hold random pens and pins.", "Actually use it as your daily coffee mug"],
      answer: "Actually use it as your daily coffee mug"
  },
  {
      question: "Your New Year’s resolution is?",
      options: ["Journal more, chismis less", "“Matulog nang maaga, hindi umaga”", "Stop buying things I don’t need.", "Stop procrastinating and be more productive"],
      answer: "Stop procrastinating and be more productive"
  },
  {
      question: "What’s your role during Noche Buena?",
      options: ["The official taste tester (aka pasimuno sa papakan).", "The one who gets asked if you’re still single.", " The designated Spotify DJ.", "The dishwasher after Noche Buena."],
      answer: "The dishwasher after Noche Buena."
  },
  {
      question: "How do you survive family reunions?",
      options: ["Hide in a room and pretend to nap.", "Mingle just enough for the food, then disappear.", "Play with the kids to avoid Tita’s interrogation.", "Sit beside the cousin who gets you."],
      answer: "Sit beside the cousin who gets you."
  },
  {
      question: "How do you complete Simbang Gabi?",
      options: ["Sleep halfway through, then act like you prayed.", "Buy a hot pandesal and pretend you’re holy.", "You only go because you have a crush on someone at the church. ", "Attend to keep up with family tradition. "],
      answer: "Attend to keep up with family tradition. "
  },
  {
      question: "Question 11: What is the correct answer?",
      options: ["Option A", "Option B", "Option C", "Option D"],
      answer: "Option A"
  },
  {
      question: "Question 12: What is the correct answer?",
      options: ["Option A", "Option B", "Option C", "Option D"],
      answer: "Option A"
  },
  {
      question: "Question 13: What is the correct answer?",
      options: ["Option A", "Option B", "Option C", "Option D"],
      answer: "Option A"
  },
  {
      question: "Question 14: What is the correct answer?",
      options: ["Option A", "Option B", "Option C", "Option D"],
      answer: "Option A"
  },
  {
      question: "Question 15: What is the correct answer?",
      options: ["Option A", "Option B", "Option C", "Option D",],
      answer: "Option A"
  },
  {
      question: "You’re hosting a holiday party. What’s your vibe?",
      options: ["Hot cocoa, lights, and playlists for every mood.", "Snacks? Yes. Cleanup? No", "I forgot I was hosting", "Everyone’s gone by 9, including me."],
      answer: "Hot cocoa, lights, and playlists for every mood."
  },
  {
      question: "Chances are you already get that from a child when he or she tells Santa isn't real.",
      options: ["“He is; just doesn't visit grumps.”", "“Do you want me to call him right now?”", "“Nice story, kid.”", "“Tell that to my court-mandated ankle elf.”"],
      answer: "“Do you want me to call him right now?”"
  },
  {
      question: "Your tree topper is?",
      options: ["A majestic star.", "A handmade blob from kindergarten.", "Whatever was in the junk drawer.", "An action figure. Or a cat."],
      answer: "A majestic star."
  },
  {
      question: "You're the one who handles the Secret Santa gifts. What would you give? ",
      options: ["Something weird, but unforgettable.", "A gift from the heart, made a person.", "A gift card. With the receipt.", "A half-eaten candy cane and vibes."],
      answer: "A gift from the heart, made a person."
  },
  {
      question: "Carolers arrive to your door. What do you do?",
      options: ["Hide in the kitchen.", "Yell “I only know the second verse!”", "Sing along and bring them cocoa.", " Nod politely from the window"],
      answer: "Sing along and bring them cocoa."
  },
  {
    question: "New Year resolutions are?",
    options: ["A time to grow and reflect.", "Very nice, but I forget them by the time February comes around. ”", "My resolution is that I am not making any.", "Lies we tell ourselves"],
    answer: "A time to grow and reflect."
  },
  {
    question: "You're caught under mistletoe with your nemesis. What now? ",
    options: ["Laugh awkwardly and offer a high-five.", "Kiss. Chaos is part of the holiday.", "Pretend you didn't see it and moonwalk away.", "Loudly declare, “I'm allergic to romance.”"],
    answer: "Loudly declare, “I'm allergic to romance.”" 
  },
  {
    question: "See someone weeping during the holidays. What do you do?",
    options: ["Hug, help, listen, repeat.", "Offer tissues and awkward comfort.", "Slowly back away like Homer into a hedge.", "Hand them a glitter bomb and say “Happy Crymas!”"],
    answer: "Hug, help, listen, repeat." 
  },
  {
    question: "Do you believe in Santa?",
    options: ["I believe in mall Santas. Especially the chaotic ones.", "Spiritually, yes. Logistically... maybe.", "No, but I respect the brand.", "Yes. Always have, always will."],
    answer: "Yes. Always have, always will."
  },
  {
    question: "You're invited to a holiday potluck. You bring...",
    options: ["Homemade pie and matching napkins.", "A mystery casserole. It's 'experimental.'", "A bag of chips and a questionable dip.", "Yourself. You are the gift."],
    answer: "Homemade pie and matching napkins."
  },
  {
    question: "What is your spirit animal this holiday season?",
    options: ["A grinchy squirrel with opinions.", "A raccoon in a Santa hat.", "An over-caffeinated elf.", "A warm, fuzzy polar bear in pajamas."],
    answer: "A warm, fuzzy polar bear in pajamas."
  },
  {
    question: "Favorite reindeer?",
    options: ["Dasher he's got cool energy.", "Rudolph. The Legend.", "Whichever one has the drama.", "I don't trust any flying deer."],
    answer: "Rudolph. The Legend."
  },
  {
    question: "Your grandma gives you another ugly sweater. What do you do?",
    options: ["Wear it proudly. She knit love into that yarn.", "Take a photo in it, then change.", "Accidentally shrink it in the wash.", "Gift it to someone else."],
    answer: "Wear it proudly. She knit love into that yarn."
  },
  {
    question: "What do you do with leftover holiday food?",
    options: ["Use it as holiday-themed art.","Eat it for 6 days straight.", "Share it, freeze it, make magic.", "Feed it to the squirrels. Don't ask."],
    answer: "Share it, freeze it, make magic."
  },
  {
    question: "When someone says 'New Year, New Me,' you say...",
    options: ["Go off, queen. Reinvent!", "Me too, but like... in April.", "It's the same me. With more snacks.", "Lies. You still owe me money."],
    answer: "Go off, queen. Reinvent!"
  }
];


/* THIS IS FOR THE BUTTON ON THE MAIN HTML FILE SINCE MAY LOADING SIYA,
BASICALLY DAPAT MAG APPEAR YUNG QUESTIONS AFTER BUTTON AND INTRODUCTION NI SANTA
ONLY PROBLEM IS HINDI KO MA LOCATE YUNG SA COOKIE NA COIN, NAG APPEAR NGA SIYA PERO 
DI KO MAHANAP YUNG NAG CAUSE NG 0 OPACITY 


document.addEventListener("DOMContentLoaded", function () {
    const quizSection = document.getElementById("quiz-section");
    const pressAnimation = document.querySelector(".tricks-press__press");
  
    const observer = new MutationObserver(() => {
      const lottiePlayer = pressAnimation.querySelector("svg");
  
      if (lottiePlayer) {
        pressAnimation.addEventListener("animationend", () => {
          showQuiz();
        });
  
        setTimeout(() => {
          if (quizSection.style.display === "none") {
            showQuiz();
          }
        }, 2200); 
        
        observer.disconnect(); 
      }
    });
  
    observer.observe(pressAnimation, { childList: true, subtree: true });
  
    function showQuiz() {
      if (quizSection) {
        quizSection.style.display = "block";
        startQuiz();
      }
    }
  });
*/


let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;

function startQuiz() {
  const questionElement = document.getElementById("question");
  const optionsList = document.getElementById("options");
  const nextButton = document.getElementById("next-btn");
  const scoreElement = document.getElementById("score");

  const currentQuestion = quizData[currentQuestionIndex];

  questionElement.innerText = currentQuestion.question;
  optionsList.innerHTML = "";
  scoreElement.innerText = "";

  currentQuestion.options.forEach(option => {
      const li = document.createElement("li");
      li.innerText = option;
      li.className = "option-item";
      li.style.cursor = "pointer";
      li.style.margin = "10px 0";
      li.onclick = () => {
          selectedAnswer = option;
          Array.from(optionsList.children).forEach(child => {
              child.style.backgroundColor = "";
          });
          li.style.backgroundColor = "#b3d9ff";
          nextButton.disabled = false;
      };
      optionsList.appendChild(li);
  });

  nextButton.innerText = currentQuestionIndex < quizData.length - 1 ? "Next" : "Finish";
  nextButton.disabled = true;
}

function nextQuestion() {
  if (!selectedAnswer) return;

  if (selectedAnswer === quizData[currentQuestionIndex].answer) {
      score++;
  }

  currentQuestionIndex++;
  selectedAnswer = null;

  if (currentQuestionIndex < quizData.length) {
      startQuiz();
  } else {
      showScore();
  }
}

function showScore() {
  const questionElement = document.getElementById("question");
  const optionsList = document.getElementById("options");
  const restartButton = document.getElementById("next-btn");
  const scoreElement = document.getElementById("score");

  questionElement.innerText = "Quiz Completed!";
  optionsList.innerHTML = "";
  scoreElement.innerText = `Your Score: ${score} / ${quizData.length}`;
  restartButton.innerText = "Restart Quiz";
  restartButton.disabled = true;
  restartButton.onclick = restartQuiz;
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  selectedAnswer = null;
  document.getElementById("next-btn").onclick = nextQuestion;
  startQuiz();
}


// This is used without a trigger button (instantly appearing mga questions) // 
window.onload = function () {
document.getElementById("quiz-section").style.display = "block";
startQuiz();
};  
