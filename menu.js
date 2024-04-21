function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    let menuIconButton = document.getElementById('menu-icon-button');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        menuIconButton.querySelector('.icon').src = "imagens/menu.png";
    } else {
        menuMobile.classList.add('open');
        menuIconButton.querySelector('.icon').src = "imagens/close.png";
    }
}
=======
}

var slideshows = document.querySelectorAll('[data-component="slideshow"]');
  

  slideshows.forEach(initSlideShow);

  function initSlideShow(slideshow) {

    var slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`); 

    var index = 0, time = 5000;
    slides[index].classList.add('active');  
    
    setInterval( () => {
      slides[index].classList.remove('active');
      
      
      index++;
      
    
      if (index === slides.length) index = 0; 
      
      slides[index].classList.add('active');

    }, time);
  }

