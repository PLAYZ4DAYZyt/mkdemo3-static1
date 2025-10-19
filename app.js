const video = document.getElementById('introVideo');
const overlay = document.getElementById('overlay');
const doneBtn = document.getElementById('doneBtn');

// Set video source
video.src = 'assets/intro.mp4';

// Function to show overlay and animate auth rows
function showOverlay() {
  overlay.classList.add('show');

  const rows = overlay.querySelectorAll('.auth-row');
  rows.forEach((row, index) => {
    setTimeout(() => {
      row.style.opacity = 1;
      row.style.transform = 'translateY(0)';
    }, 300 * (index + 1));
  });
}

// Attempt autoplay for video
video.play().catch(() => {
  document.body.addEventListener('click', () => {
    video.play().then(() => {
      video.onended = showOverlay;
    });
  }, { once: true });
});

// Show overlay when video ends
video.onended = showOverlay;

// Done button redirects to Moose Knuckles
doneBtn.addEventListener('click', () => {
  window.location.href = 'https://www.mooseknucklescanada.com';
});
