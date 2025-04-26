const Recommendations =[
  'Ahmed is an exceptional developer who consistently delivers high-quality work. His ability to solve complex problems and explain technical concepts to non-technical stakeholders is remarkable. He would be an asset to any team.',
  'Working with Ahmed on our streaming platform was a pleasure. His attention to detail and commitment to best practices resulted in a robust, scalable system that has handled our growth perfectly.',
  "Ahmed's work on our mobile app transformed our business. His technical skills are matched only by his understanding of user experience principles. I would hire him again without hesitation."
];
function showrecommendations(){
  let RecommendationsHTML=``;
  Recommendations.forEach(Recommendation => {
    RecommendationsHTML+=`<div class="recommendation-item">
    ${Recommendation}
    </div>`
  });
  document.querySelector('.recommendation-grid-section').innerHTML=RecommendationsHTML;
}

showrecommendations();
document.querySelector('.recommendation-input').value = '';
document.querySelector('.recommendation-name-input').value = '';

function showPopup(){
  document.querySelector('.js-popup').style.display = 'flex';
}
function unShowPopup(){
  document.querySelector('.js-popup').style.display = 'none';
}
function addrecommendation(){
  const newRecommendation = document.querySelector('.recommendation-input').value
  Recommendations.push(newRecommendation);
  document.querySelector('.recommendation-input').value = '';
  document.querySelector('.recommendation-name-input').value = '';
  showrecommendations();
}