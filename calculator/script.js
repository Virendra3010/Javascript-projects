const button = document.getElementById('btn');
button.addEventListener('click', () => {
  button.classList.toggle('active');
  setTimeout(() => {
    button.classList.remove('active');
  }, 100);
});