let x = document.querySelector('.navbar');
let menuBtn = document.querySelector('.menuBtn');
let closeBtn = document.querySelector('.closeBtn');

function openMenu(){
  x.style.display = 'block';
  menuBtn.style.display = 'none';
  closeBtn.style.display = 'block'
}

function closeMenu(){
  x.style.display = 'none';
  menuBtn.style.display = 'block';
  closeBtn.style.display = 'none'
}



let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.header .navbar a');



window.onscroll = () => {
   sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');


    if(top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    };
   });




 let header = document.querySelector('.header');

 header.classList.toggle('sticky', window.scrollY > 100);


 // navbar.classList.remove('active');
};



  ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200,
  });
 
  ScrollReveal().reveal('.home-content', { origin: 'right' });
  ScrollReveal().reveal('.heading', { origin: 'top' });
  ScrollReveal().reveal('.home-img img, .about-content, .demo, .services-container, .portfolio-box, .contact form', { origin: 'bottom'});
  ScrollReveal().reveal('.about-img img, .test1 img', { origin: 'left'});




