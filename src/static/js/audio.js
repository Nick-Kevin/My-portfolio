// Récupérer l'élément audio
var audio = document.getElementById('background-audio');

// Fonction pour démarrer la lecture
function playAudio() {
  audio.play();
  localStorage.setItem('audioPlaying', 'true'); // Enregistrer l'état de lecture dans le localStorage
}

// Fonction pour arrêter la lecture
function pauseAudio() {
  audio.pause();
  localStorage.setItem('audioPlaying', 'false'); // Enregistrer l'état de lecture dans le localStorage
}

// Vérifier l'état de lecture lors du chargement de la page
window.addEventListener('DOMContentLoaded', function() {
  var isAudioPlaying = localStorage.getItem('audioPlaying');
  if (isAudioPlaying === 'true') {
    audio.play();
  }
});
