const intro = document.getElementById('introVideo');
const bg = document.getElementById('bgVideo');
const overlay = document.getElementById('overlay');
const doneBtn = document.getElementById('doneBtn');

// Safe play helper — tries to play and returns a promise
function tryPlay(videoEl){
  return videoEl.play().catch(()=> Promise.reject('play-blocked'));
}

// Setup: assign sources are already set in HTML. We will:
// 1) try to autoplay intro
// 2) if it plays, wait for it to end, then show bg + overlay
// 3) if autoplay blocked, wait for first user tap then start intro
// 4) ensure bg loops and overlay fades cleanly

function showOverlay(){
  overlay.classList.add('show');
}

function startBackgroundAndOverlay(){
  // hide intro video element (to free layer and avoid z-index issues)
  intro.classList.add('hidden');
  // show background video
  bg.classList.remove('hidden');
  // try to play background (should loop)
  tryPlay(bg).catch(()=> {
    // if blocked, allow first tap to start background
    document.body.addEventListener('click', () => bg.play(), { once: true });
  });
  // show overlay (fade)
  setTimeout(showOverlay, 400); // slight delay to let bg render
}

// Try autoplay of intro
tryPlay(intro).then(()=>{
  // autoplay succeeded — when intro ends, switch to bg
  intro.onended = startBackgroundAndOverlay;
}).catch(()=>{
  // autoplay blocked on this device (common on mobile).
  // Wait for first user interaction (tap/click), then play intro.
  const startOnTap = () => {
    tryPlay(intro).then(()=> {
      intro.onended = startBackgroundAndOverlay;
    }).catch(()=> {
      // If still blocked, skip to background loop directly
      startBackgroundAndOverlay();
    });
    document.body.removeEventListener('click', startOnTap);
  };
  document.body.addEventListener('click', startOnTap);
});

// Done button
doneBtn.addEventListener('click', () => {
  window.location.href = 'https://www.mooseknucklescanada.com';
});
