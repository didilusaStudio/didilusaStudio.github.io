const menuBtn = document.getElementById('menu-btn');
const nav = document.getElementById('nav');
const track = document.querySelector('.portfolio-content');

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('open');
});

/*----CAROUSSEL ARROWS----*/ 
document.querySelector('.next').onclick = () => track.scrollBy({ left: 350, behavior: 'smooth' });
document.querySelector('.prev').onclick = () => track.scrollBy({ left: -350, behavior: 'smooth' });
