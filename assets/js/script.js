function menuShow () {
    let menuMobile = document.querySelector('.mobile');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open')
        document.querySelector('.icon').scr= "assets\img\icons8-menu-100.png"
    }
    else {
        menuMobile.classList.add('open')
        document.querySelector('.icon').scr= "assets\img\icons8-close-window-96.png"
    }
}