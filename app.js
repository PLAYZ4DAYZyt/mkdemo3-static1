// Select elements
const video = document.getElementById('introVideo');
const overlay = document.getElementById('overlay');
const doneBtn = document.getElementById('doneBtn');

// Set video source
video.src = 'assets/intro.mp4';

// When video ends, show overlay
video.onended = () => {
  overlay.style.backgroundImage = "url('assets/bg_success.jpg')";
  overlay.classList.add('show');
  overlay.style.opacity = 1;
};

// Done button redirects to Moose Knuckles website
doneBtn.addEventListener('click', () => {
  window.location.href = 'https://www.mooseknucklescanada.com';
});
