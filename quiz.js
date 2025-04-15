const quizData = [
    {
      question: "What's your favorite Christmas movie?",
      options: [
        "Ang Tanging Ina (2003)",
        "Four Sisters and a Wedding (2013)",
        "Seven Sundays (2017)",
        "Home Alone (1990)"
      ]
    },
    {
      question: "What's your ideal holiday activity?",
      options: [
        "Eating everything in sight",
        "Volunteering for a cause",
        "Binge-watching movies",
        "Sleeping all day"
      ]
    },
    {
      question: "Choose a holiday outfit:",
      options: [
        "Ugly Christmas sweater",
        "Pajamas all day",
        "Something fancy and sparkly",
        "A onesie with reindeer antlers"
      ]
    }
  ];
  
  let currentIndex = 0;
  let answers = [];
  
  function loadQuiz() {
    const questionEl = document.querySelector(".quiz-question");
    const optionsEl = document.querySelector(".quiz-options");
    const finishBtn = document.querySelector(".quiz-finish");
  
    const currentQuestion = quizData[currentIndex];
  
    // Display question
    questionEl.textContent = `${currentIndex + 1}. ${currentQuestion.question}`;
  
    // Clear previous options
    optionsEl.innerHTML = "";
  
    // Generate answer buttons
    currentQuestion.options.forEach(option => {
      const button = document.createElement("button");
      button.className = "quiz-option";
      button.textContent = option;
      button.onclick = () => {
        answers.push(option);
        currentIndex++;
  
        if (currentIndex < quizData.length) {
          loadQuiz();
        } else {
          finishBtn.style.display = "block";
        }
      };
      optionsEl.appendChild(button);
    });
  

    finishBtn.style.display = "none";
  }
  
// Button triggers the quiz (di nag render yung image dunno why)
  document.addEventListener("DOMContentLoaded", () => {
    const quizSection = document.querySelector(".quiz-container");
    const triggerButton = document.querySelector(".tricks-press__press");
  
    if (triggerButton && quizSection) {
      triggerButton.addEventListener("click", () => {
        // Show entire quiz
        quizSection.style.display = "block";
        loadQuiz();
      });
    }
  


    // Finish Trigger (Need to connect nalang before the cookie anim)
    const finishBtn = document.querySelector(".quiz-finish");
    finishBtn.addEventListener("click", () => {
      // You can also hide quiz section and show results here
    });
  });
  
