document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("show");
  });



  window.sr = ScrollReveal();
  
  sr.reveal('.icono', {
    duration: 3000,
    origin: 'bottom',
    distance: '100px',
  });
  
  sr.reveal('.itemleft', {
    duration: 3000,
    origin: 'left',
    distance: '100px',
  });
  
  sr.reveal('.itemright', {
    duration: 3000,
    origin: 'right',
    distance: '-100px',
  });
  