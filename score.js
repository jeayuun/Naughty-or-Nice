// Individual Score Logic Here @David
function populateIndividualScores(quizData, answers) {
  const table = document.querySelector('.score-table');
  
  // Remove old score rows except the header
  table.querySelectorAll('.score-row:not(.header)').forEach(row => row.remove());

  quizData.forEach((question, i) => {
    const userValue = answers[i];
    const selectedOption = question.options.find(opt => opt.value === userValue);

    if (selectedOption) {
      const row = document.createElement('div');
      row.className = 'score-row';

      row.innerHTML = `
        <span class="question">${question.q}</span>
        <span class="answer">${selectedOption.text}</span>
        <span class="percentage">${userValue}%</span>
      `;

      table.appendChild(row);
    }
  });
}


// Total Score Logic
function handleNextScore() {
  populateIndividualScores(quizData, answers);
  const scoreTable = document.querySelector('.score-table');
  const totalScore = document.querySelector('.total-score');
  const scoreNextButton = document.getElementById('score-next');
  const scoreFinishButton = document.getElementById('score-finish');

  if (!scoreTable || !totalScore) return;

  // Only collect scores from dynamically generated rows
  let percentages = [];

  const rows = scoreTable.querySelectorAll('.score-row:not(.header)');
  rows.forEach(row => {
    const percentSpan = row.querySelector('.percentage');
    if (percentSpan) {
      const percent = parseInt(percentSpan.textContent.replace('%', ''));
      if (!isNaN(percent)) percentages.push(percent);
    }
  });

  const totalScorePercentage = percentages.length > 0 
    ? Math.round(percentages.reduce((a, b) => a + b) / percentages.length)
    : 0;

  const isNice = $('.ticket__nice').css('display') === 'block';

  $('.score-category-image').hide();
  $(isNice ? '.nice-image' : '.naughty-image').show();

  let message = '';

  if (isNice) {
    if (totalScorePercentage >= 85) {
      message = `<strong>You got a total score of ${totalScorePercentage}%!</strong> 🎅✨<br>
                 Angel status! Santar wants to recruit you for his sleigh team.`;
    } else if (totalScorePercentage >= 50) {
      message = `<strong>You got a total score of ${totalScorePercentage}%!</strong> ☃️<br>
                 Santar confirms you've earned your spot on the nice list.`;
    } else {
      message = `You only got a total score of ${totalScorePercentage}%! 😓<br>
                 Santar's side-eyeing your choices... but there's hope!`;
    }
  }

  const remainingPercentage = 100 - totalScorePercentage;
  $('.progress-fill').css('width', `${totalScorePercentage}%`);
  $('.progress-percentage').text(`${totalScorePercentage}%`);
  $('#progress-left').text(`${remainingPercentage}%`);

  $('.score-message').html(message);

  // Toggle views
  scoreTable.style.display = 'none';
  totalScore.style.display = 'block';
  scoreNextButton.style.display = 'none';
  scoreFinishButton.style.display = 'block';
}