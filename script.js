document.addEventListener('DOMContentLoaded', function() {
  const container = document.querySelector('.container');
  if (container) { // Safety check
    container.style.opacity = 0;
    container.style.transition = 'opacity 2s';
    setTimeout(() => {
      container.style.opacity = 1;
    }, 500);
  }
});
