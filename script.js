ScrollReveal({
    reset:true,
    distance:'80px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.home-img,.about-btn,.projects-btn, .hr-line ,.contact form', {origin: 'bottom'});
ScrollReveal().reveal('.about h1,.left,.education h1  ', {origin: 'left'});

var typed = new Typed('#element', {
    strings: ['Web Designer', 'Front end Developer', 'Back end Developer'],
    typeSpeed: 50,
    loop: true
});