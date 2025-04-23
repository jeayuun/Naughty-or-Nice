let currentScorePage = 0;
let scoreTables = []; 

// Individual Score Logic
function populateIndividualScores(quizData, answers, page = 0) {
  const table = document.querySelector('.score-table');
  table.querySelectorAll('.score-row:not(.header)').forEach(row => row.remove());

  const start = page * 10;
  const end = Math.min(start + 10, quizData.length);

  for (let i = start; i < end; i++) {
    const question = quizData[i];
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
    
      const percent = parseInt(userValue);
    }
  }
}

// Total Score Logic
function handleNextScore() {
  const scoreTable = document.querySelector('.score-table');
  const totalScore = document.querySelector('.total-score');
  const scoreNextButton = document.getElementById('score-next');
  const scoreFinishButton = document.getElementById('score-finish');

  if (!scoreTable || !totalScore) return;

  populateIndividualScores(quizData, answers, currentScorePage);
  currentScorePage++;

  const totalPages = Math.ceil(quizData.length / 10);


  if (currentScorePage < totalPages) {
    scoreTable.style.display = 'block';
    totalScore.style.display = 'none';
    scoreNextButton.style.display = 'block';
    scoreFinishButton.style.display = 'none';
  } else if (currentScorePage === totalPages) {
    scoreTable.style.display = 'block';
    totalScore.style.display = 'none';
    scoreNextButton.style.display = 'block';
    scoreFinishButton.style.display = 'none';
  } else {

    const percentages = answers.map(value => parseInt(value)).filter(p => !isNaN(p));
    const totalScorePercentage = percentages.length > 0 
    ? Math.round(percentages.reduce((a, b) => a + b) / percentages.length)
    : 0;

    const isNice = totalScorePercentage >= 50;

    $('.ticket__nice, .ticket__naughty').hide();
    $(isNice ? '.ticket__nice' : '.ticket__naughty').show();


    $('.score-category-image img').hide();
    $(isNice ? '.nice-image' : '.naughty-image').show();

    let message = '';

    if (isNice && totalScorePercentage >= 85) {
      message = `<strong>You got a total score of ${totalScorePercentage}%!</strong> 🎅✨<br>
                Angel status! Santar wants to recruit you for his slzeigh team.`;
    } else if (isNice) {
      message = `<strong>You got a total score of ${totalScorePercentage}%!</strong> ☃️<br>
                Santar confirms you've earned your spot on the nice list.`;
    } else {
      message = `You got ${totalScorePercentage}%! Better luck next year! 🎁<br>
                Maybe try helping more elves or feeding the reindeer.`;
    }

    const remainingPercentage = 100 - totalScorePercentage;
    $('.progress-fill').css('width', `${totalScorePercentage}%`);
    $('.progress-percentage').text(`${totalScorePercentage}%`);
    $('#progress-left').text(`${remainingPercentage}%`);
    $('.score-message').html(message);

    scoreTable.style.display = 'none';
    totalScore.style.display = 'block';
    scoreNextButton.style.display = 'none';
    scoreFinishButton.style.display = 'block';
  }
}