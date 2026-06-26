// Wait for the DOM to be fully loaded before attaching events
document.addEventListener('DOMContentLoaded', function () {

  const video = document.getElementById('wildlifeVideo');
  const toggleBtn = document.getElementById('toggleBtn');

  toggleBtn.addEventListener('click', function () {

    // CASE 1: Video is currently hidden -> show it and play it
    if (video.style.display === 'none') {
      video.style.display = 'block';
      video.play();
      toggleBtn.textContent = 'Hide Video';
      toggleBtn.setAttribute('aria-pressed', 'false');
      return;
    }

    // CASE 2: Video is visible but paused -> play it
    if (video.paused) {
      video.play();
      toggleBtn.textContent = 'Hide Video';
      toggleBtn.setAttribute('aria-pressed', 'false');
      return;
    }

    // CASE 3: Video is visible and playing -> hide it (and pause it)
    video.pause();
    video.style.display = 'none';
    toggleBtn.textContent = 'Show Video';
    toggleBtn.setAttribute('aria-pressed', 'true');
  });

});
