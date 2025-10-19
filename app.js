const video = document.getElementById('introVideo');
const overlay = document.getElementById('overlay');
const doneBtn = document.getElementById('doneBtn');

// Set video source
video.src = 'assets/intro.mp4';

// Attempt autoplay
video.play().catch(() => {
  // If autoplay fails (common on mobile), play on first tap
  document.body.addEventListener('click', () => {
    video.play();
  }, { once: true });
});

// Animate overlay and list items sequentially
video.onended = () => {
  overlay.style.backgroundImage = "url('assets/bg_success.jpg')";
  overlay.classList.add('show');

  const items = overlay.querySelectorAll('li');
  items.forEach((item, index) => {
    setTimeout(() => {
      item.style.opacity = 1;
      item.style.transform = 'translateY(0)';
    }, 300 * (index + 1)); // stagger animation by 0.3s
  });
};

// Done button redirects to Moose Knuckles website
doneBtn.addEventListener('click', () => {
  window.location.href = 'https://www.mooseknucklescanada.com';
});
