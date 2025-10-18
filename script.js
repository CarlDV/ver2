document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hbm');
  const navLinks = document.querySelector('nav ul');
  const closeBtn = document.querySelector('.closebtn');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('navactive');
  });

  closeBtn.addEventListener('click', () => {
    navLinks.classList.remove('navactive');
  });
});