document.addEventListener("DOMContentLoaded", () => {
  const section1 = document.getElementById('section1');
  const section2 = document.getElementById('section2');
  const introDelay = 3500; // 3.5s similar to original
  const bgVideo = document.getElementById('bgVideo');

  // Helper to show section2 (display looped bg + overlay)
  function showSection2() {
    // ensure bg video plays (try to play; fallback to user tap)
    bgVideo.play().catch(() => {
      document.body.addEventListener('click', () => { bgVideo.play(); }, { once: true });
    });

    section2.classList.remove('hide');
    section2.classList.remove('animate');
    section1.classList.add('hide');
  }

  // Simulate "checking authenticity" intro then show section2
  setTimeout(() => {
    section1.classList.add('animate');
    section1.addEventListener('transitionend', () => {
      showSection2();
    }, { once: true });
  }, introDelay);

  // Optional: make content change if you want page="not-authentic"
  if (typeof page !== 'undefined' && page === 'not-authentic') {
    document.getElementById('info-status').textContent = 'Not Authentic';
    document.getElementById('info-uid').textContent = '(not valid)';
    // show retap / support link etc. (the HTML already includes placeholders)
    document.getElementById('retap').classList.remove('hide');
  }
});
