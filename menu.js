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