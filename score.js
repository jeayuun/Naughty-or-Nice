// Individual Score Logic Here @David



// Total Score Logic
function handleNextScore() {
  let percentages = [];
  document.querySelectorAll('.percentage').forEach(item => {
    let percent = parseInt(item.textContent.replace('%', ''));
    if (!isNaN(percent)) percentages.push(percent);
  });
  
  let totalScorePercentage = percentages.length > 0 
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

  scoreTable.style.display = 'none';
  totalScore.style.display = 'block';
  scoreNextButton.style.display = 'none';
  scoreFinishButton.style.display = 'block';
}