document.getElementById('cards-btn').addEventListener('click', function() {
  document.getElementById('card-container').classList.remove('hidden')
  document.getElementById('donation-history').classList.add('hidden')
  document.getElementById('cards-btn').style.backgroundColor ="#B4F461";
});

document.getElementById('history-btn').addEventListener('click', function() {
  document.getElementById('donation-history').classList.remove('hidden');
  document.getElementById('card-container').classList.add('hidden');
  document.getElementById('history-btn').style.backgroundColor ="#B4F461";
});



 
   


