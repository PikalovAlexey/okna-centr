function openMenu() {
    let menu = document.querySelector('.menu')
    let menuBurger = document.querySelector('.menu_burger__passive')
    let body = document.querySelector('body')

    if (menu.classList.contains('menu_active')) {
        menu.classList.remove('menu_active')
        menuBurger.classList.remove('menu_burger__active')
        body.style.overflow = 'visible'
    }
    else {
        menu.classList.add('menu_active')
        menuBurger.classList.add('menu_burger__active')
        body.style.overflow = 'hidden'
    }
}