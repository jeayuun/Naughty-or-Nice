document.addEventListener('DOMContentLoaded', () => {
  let currentQuestion = 1;
  const totalQuestions = 5;
  const nextButton = document.querySelector('.quiz-next');
  const questionNumber = document.querySelector('.question-number');

  document.querySelector('.enter__button').addEventListener('click', () => {
    setTimeout(() => {
      document.querySelector('.quiz-section').style.display = 'flex';
    }, 11500); // Match audio intro duration
  });

  function updateQuestionDisplay() {
    document.querySelectorAll('.question').forEach(question => {
      question.classList.remove('active');
      if(parseInt(question.dataset.question) === currentQuestion) {
        question.classList.add('active');
      }
    });
    
    questionNumber.textContent = currentQuestion;
    
    // Update button text on last question
    if(currentQuestion === totalQuestions) {
      nextButton.textContent = 'FINISH';
    } else {
      nextButton.textContent = 'NEXT';
    }
  }

  // Handle option selection
  document.querySelectorAll('.quiz-option').forEach(option => {
    option.addEventListener('click', function() {
      // Remove previous selections
      this.parentElement.querySelectorAll('.quiz-option').forEach(opt => {
        opt.classList.remove('selected');
      });
      // Add selection to clicked option
      this.classList.add('selected');
    });
  });

  // Handle next button click
  nextButton.addEventListener('click', () => {
    const selectedOption = document.querySelector('.question.active .quiz-option.selected');
    
    if(!selectedOption) {
      alert('Please select an answer!');
      return;
    }

    if(currentQuestion < totalQuestions) {
      currentQuestion++;
      updateQuestionDisplay();
    } else {
      // Trigger original cookie scene transition
      document.querySelector('.quiz-section').style.display = 'none';
      
      // Trigger existing animation sequence
      const event = new Event('click');
      document.querySelector('.quiz-next').dispatchEvent(event);
    }
    
    // Reset selections for next question
    document.querySelectorAll('.quiz-option').forEach(opt => {
      opt.classList.remove('selected');
    });
  });

  // Initialize first question
  updateQuestionDisplay();
});